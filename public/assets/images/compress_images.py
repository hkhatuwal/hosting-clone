#!/usr/bin/env python3
"""
Compress images in this directory and save copies under compressed/.

Original files are never modified. Output keeps the same filename and extension
(.png stays .png, .webp stays .webp, etc.).

Each output file is tuned to stay at or below --max-size-kb (default 900 KB).
Large PNGs are reduced via palette quantization and resizing when needed.

Usage:
    pip install -r requirements.txt
    python compress_images.py
    python compress_images.py --max-size-kb 900 --quality 85
"""

from __future__ import annotations

import argparse
import sys
from io import BytesIO
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install with: pip install -r requirements.txt", file=sys.stderr)
    sys.exit(1)

SCRIPT_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = SCRIPT_DIR / "compressed"
SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}
SKIP_NAMES = {"compress_images.py", "requirements.txt"}

FORMAT_BY_EXT = {
    ".png": "PNG",
    ".jpg": "JPEG",
    ".jpeg": "JPEG",
    ".webp": "WEBP",
    ".gif": "GIF",
}

MIN_QUALITY = 25
MIN_SCALE = 0.35
PNG_COLOR_STEPS = (256, 192, 128, 96, 64, 48, 32)


def format_size(num_bytes: int) -> str:
    if num_bytes < 1024:
        return f"{num_bytes} B"
    if num_bytes < 1024 * 1024:
        return f"{num_bytes / 1024:.1f} KB"
    return f"{num_bytes / (1024 * 1024):.2f} MB"


def collect_images(source_dir: Path) -> list[Path]:
    images: list[Path] = []
    for path in sorted(source_dir.iterdir()):
        if not path.is_file():
            continue
        if path.name in SKIP_NAMES:
            continue
        if path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue
        images.append(path)
    return images


def resized_copy(img: Image.Image, scale: float) -> Image.Image:
    if scale >= 0.999:
        return img.copy()
    w, h = img.size
    new_w = max(1, int(w * scale))
    new_h = max(1, int(h * scale))
    return img.resize((new_w, new_h), Image.Resampling.LANCZOS)


def prepare_png(img: Image.Image, colors: int, quantize: bool) -> Image.Image:
    if not quantize:
        if img.mode in ("RGBA", "LA"):
            return img.convert("RGBA")
        if img.mode != "RGB":
            return img.convert("RGB")
        return img

    has_alpha = img.mode in ("RGBA", "LA") or (
        img.mode == "P" and "transparency" in img.info
    )
    if has_alpha:
        return img.convert("RGBA").quantize(
            colors=colors, method=Image.Quantize.FASTOCTREE
        )
    if img.mode != "RGB":
        img = img.convert("RGB")
    return img.quantize(colors=colors, method=Image.Quantize.MEDIANCUT)


def save_to_buffer(
    img: Image.Image,
    ext: str,
    quality: int,
    png_colors: int,
    png_quantize: bool = True,
) -> bytes:
    fmt = FORMAT_BY_EXT[ext]
    buf = BytesIO()

    if ext == ".png":
        out = prepare_png(img, png_colors, quantize=png_quantize)
        out.save(buf, format=fmt, optimize=True, compress_level=9)
    elif ext in {".jpg", ".jpeg"}:
        out = img
        if out.mode in ("RGBA", "P", "LA"):
            out = out.convert("RGB")
        out.save(
            buf,
            format=fmt,
            quality=quality,
            optimize=True,
            progressive=True,
        )
    elif ext == ".webp":
        out = img
        if out.mode == "P":
            out = out.convert("RGBA")
        out.save(buf, format=fmt, quality=quality, method=6)
    elif ext == ".gif":
        out = img
        if out.mode not in ("P", "L"):
            out = out.convert("P", palette=Image.Palette.ADAPTIVE, colors=png_colors)
        out.save(buf, format=fmt, optimize=True)
    else:
        img.save(buf, format=fmt)

    return buf.getvalue()


def find_best_params(
    img: Image.Image,
    ext: str,
    max_bytes: int,
    start_quality: int,
) -> tuple[bytes, float, int, int, str]:
    """Return (image_bytes, scale, quality, png_colors, note)."""
    best_data: bytes | None = None
    best_size = sys.maxsize
    best_meta = (1.0, start_quality, 256, "")

    scale = 1.0
    while scale >= MIN_SCALE - 1e-6:
        scaled = resized_copy(img, scale)
        quality = start_quality

        if ext == ".png":
            for quantize in (False, True):
                color_steps = PNG_COLOR_STEPS if quantize else (256,)
                for colors in color_steps:
                    try:
                        data = save_to_buffer(
                            scaled, ext, quality, colors, png_quantize=quantize
                        )
                    except Exception:
                        continue
                    size = len(data)
                    if size < best_size:
                        best_data, best_size = data, size
                        best_meta = (scale, quality, colors, "")
                    if size <= max_bytes:
                        q_note = f", colors={colors}" if quantize else ""
                        note = f"scale={scale:.0%}{q_note}"
                        return data, scale, quality, colors, note
        elif ext == ".gif":
            for colors in PNG_COLOR_STEPS:
                data = save_to_buffer(scaled, ext, quality, colors)
                size = len(data)
                if size < best_size:
                    best_data, best_size = data, size
                    best_meta = (scale, quality, colors, "")
                if size <= max_bytes:
                    note = f"scale={scale:.0%}, colors={colors}"
                    return data, scale, quality, colors, note
        else:
            while quality >= MIN_QUALITY:
                data = save_to_buffer(scaled, ext, quality, 256)
                size = len(data)
                if size < best_size:
                    best_data, best_size = data, size
                    best_meta = (scale, quality, 256, "")
                if size <= max_bytes:
                    note = f"scale={scale:.0%}, quality={quality}"
                    return data, scale, quality, 256, note
                quality -= 5

        scale = round(scale - 0.05, 2)

    assert best_data is not None
    scale, quality, colors, _ = best_meta
    note = f"best effort scale={scale:.0%}"
    if ext == ".png":
        note += f", colors={colors}"
    else:
        note += f", quality={quality}"
    return best_data, scale, quality, colors, note


def compress_file(
    source: Path,
    dest: Path,
    max_bytes: int,
    start_quality: int,
) -> tuple[int, int, str]:
    with Image.open(source) as img:
        img.load()
        ext = source.suffix.lower()
        data, _scale, _quality, _colors, note = find_best_params(
            img, ext, max_bytes, start_quality
        )

    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)

    original_size = source.stat().st_size
    compressed_size = len(data)
    over = " OVER TARGET" if compressed_size > max_bytes else ""
    return original_size, compressed_size, note + over


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Compress images into compressed/ while preserving file extensions."
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=85,
        help="Starting quality for JPEG/WebP (1-100, default: 85)",
    )
    parser.add_argument(
        "--max-size-kb",
        type=int,
        default=900,
        help="Target maximum file size in KB (default: 900)",
    )
    parser.add_argument(
        "--source",
        type=Path,
        default=SCRIPT_DIR,
        help="Directory to read images from (default: script directory)",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=OUTPUT_DIR,
        help="Directory for compressed copies (default: ./compressed)",
    )
    args = parser.parse_args()

    if not 1 <= args.quality <= 100:
        parser.error("--quality must be between 1 and 100")
    if args.max_size_kb < 1:
        parser.error("--max-size-kb must be at least 1")

    source_dir = args.source.resolve()
    output_dir = args.output.resolve()
    max_bytes = args.max_size_kb * 1024

    if source_dir == output_dir:
        parser.error("Source and output directories must be different")

    images = collect_images(source_dir)
    if not images:
        print(f"No supported images found in {source_dir}")
        return

    print(f"Source:     {source_dir}")
    print(f"Output:     {output_dir}")
    print(f"Max size:   {args.max_size_kb} KB")
    print(f"Quality:    {args.quality} (JPEG/WebP start)\n")

    total_before = 0
    total_after = 0
    over_target = 0

    for source in images:
        dest = output_dir / source.name
        try:
            before, after, note = compress_file(source, dest, max_bytes, args.quality)
        except Exception as exc:
            print(f"  FAIL  {source.name}: {exc}")
            continue

        total_before += before
        total_after += after
        if after > max_bytes:
            over_target += 1
        saved_pct = (1 - after / before) * 100 if before else 0
        print(
            f"  OK    {source.name}: "
            f"{format_size(before)} -> {format_size(after)} "
            f"({saved_pct:.1f}% smaller) [{note}]"
        )

    if total_before:
        overall = (1 - total_after / total_before) * 100
        print(
            f"\nTotal: {format_size(total_before)} -> {format_size(total_after)} "
            f"({overall:.1f}% smaller)"
        )
    if over_target:
        print(f"\nWarning: {over_target} file(s) could not reach {args.max_size_kb} KB.")
    print(f"\nDone. Compressed copies saved to:\n  {output_dir}")


if __name__ == "__main__":
    main()
