# Hosting Page — Hero Section API Specification

This document defines the data contract needed to make the **Hero** section on `/hosting` dynamic. It maps directly to `app/components/HeroHosting.tsx` and is intended for the Laravel backend (`LARAVEL_HOSTING_URL`).

---

## Overview

| Item | Value |
|------|--------|
| Page slug | `hosting` |
| Section key | `hero` |
| Frontend component | `HeroHosting` |
| Suggested endpoint | `GET /api/pages/hosting/hero` |
| Auth | Public (no auth required for read) |
| Cache | Recommend `Cache-Control` + ISR/revalidate on Next.js (e.g. 60–300s) |

---

## Response envelope

```json
{
  "data": {
    "hero": { }
  },
  "meta": {
    "updated_at": "2026-05-26T12:00:00Z",
    "locale": "en"
  }
}
```

Alternatively, a flat payload is fine if the endpoint is hero-only:

```json
{
  "hero": { }
}
```

---

## Hero object — field reference

### 1. Content (text)

| Field | Type | Required | Current static value | Notes |
|-------|------|----------|----------------------|-------|
| `heading` | `string` | Yes | `"Fast. Reliable.\nSecure hosting."` | Supports line breaks. Frontend renders with `<br/>` or splits on `\n`. HTML tags optional if API sends sanitized HTML. |
| `description` | `string` | Yes | Long paragraph about LiteSpeed, backups, etc. | Plain text preferred. Max ~500 chars recommended. |
| `bullets` | `string[]` | Yes (min 1) | 4 feature lines with checkmarks | Order preserved. Each item is one list row. |
| `promo.heading` | `string` | No | `"Save up to 87% now."` | Short promo line above pricing. |
| `promo.price_current` | `string` | No | `"US$1.99 / mo."` | Display string as-is (currency/formatting from CMS). |
| `promo.price_original` | `string` | No | `"US$14.99/mo."` | Shown with strikethrough. Omit or `null` to hide “was” price. |
| `cta.label` | `string` | Yes | `"See plans"` | Button text. |
| `cta.href` | `string` | Yes | `"#pricing"` or `/hosting#pricing` | Internal hash or full URL. |
| `cta.open_in_new_tab` | `boolean` | No | `false` | Only for external links. |

### 2. Background & layout

| Field | Type | Required | Current static value | Notes |
|-------|------|----------|----------------------|-------|
| `background.gradient` | `string` | No | `linear-gradient(135deg, #0d493d 0%, #2d7a5f 50%, #6fb844 100%)` | CSS `background` value. If omitted, use default gradient in frontend. |
| `background.overlay_opacity` | `number` | No | `0.2` | 0–1, applied to pattern overlay image. |
| `layout.min_height` | `object` | No | — | Optional overrides: `{ "mobile": "500px", "tablet": "600px", "desktop": "700px" }`. |

### 3. Images

All images should be absolute URLs in production (CDN or Laravel `storage` public URL). For local dev, `http://localhost:8000/storage/...` is acceptable.

#### 3.1 Background pattern (decorative overlay)

| Field | Type | Required | Current asset |
|-------|------|----------|----------------|
| `images.background_pattern.url` | `string` | No | `/assets/images/home-hero-narrow-graphic.webp` |
| `images.background_pattern.alt` | `string` | No | `"Background pattern"` |
| `images.background_pattern.width` | `number` | No | Intrinsic width for Next/Image if known |
| `images.background_pattern.height` | `number` | No | Intrinsic height |

**Usage:** Full-bleed `fill` + `object-cover`, low opacity overlay on gradient.

#### 3.2 Hero main image (right column)

| Field | Type | Required | Current asset |
|-------|------|----------|----------------|
| `images.hero_main.url` | `string` | Yes | `/assets/images/hosting-hero.webp` |
| `images.hero_main.alt` | `string` | Yes | `"Web hosting dashboard"` |
| `images.hero_main.width` | `number` | Recommended | e.g. `1200` |
| `images.hero_main.height` | `number` | Recommended | e.g. `900` |
| `images.hero_main.priority` | `boolean` | No | `true` for LCP image above the fold |

**Usage:** `fill` inside a responsive container (`h-[300px]` → `xl:h-[600px]`), `object-cover`, rounded corners.

#### 3.3 Optional responsive sources

If the API can provide multiple sizes, use `srcset`-friendly structure:

```json
"images": {
  "hero_main": {
    "url": "https://cdn.example.com/hosting-hero-1200.webp",
    "alt": "Web hosting dashboard",
    "width": 1200,
    "height": 900,
    "sources": [
      {
        "url": "https://cdn.example.com/hosting-hero-800.webp",
        "width": 800,
        "media": "(max-width: 768px)"
      },
      {
        "url": "https://cdn.example.com/hosting-hero-1200.webp",
        "width": 1200,
        "media": "(min-width: 769px)"
      }
    ]
  }
}
```

Frontend can map `sources` to Next.js `Image` `srcSet` or pick URL by breakpoint.

---

## Full example payload

```json
{
  "data": {
    "hero": {
      "heading": "Fast. Reliable.\nSecure hosting.",
      "description": "Enjoy fast, secure, and scalable web hosting with LiteSpeed performance, built-in automated backups, free migration, and a unified control panel designed for flexibility and growth.",
      "bullets": [
        "High performance with AMD EPYC CPUs, NVMe SSD storage & LiteSpeed",
        "24/7/365 in-house support from real experts",
        "Advanced security with SSL, brute force, malware & DDoS protection",
        "Global data centers for low latency and fast page loads"
      ],
      "promo": {
        "heading": "Save up to 87% now.",
        "price_current": "US$1.99 / mo.",
        "price_original": "US$14.99/mo."
      },
      "cta": {
        "label": "See plans",
        "href": "#pricing",
        "open_in_new_tab": false
      },
      "background": {
        "gradient": "linear-gradient(135deg, #0d493d 0%, #2d7a5f 50%, #6fb844 100%)",
        "overlay_opacity": 0.2
      },
      "images": {
        "background_pattern": {
          "url": "https://cdn.adlef.com/pages/hosting/home-hero-narrow-graphic.webp",
          "alt": "Background pattern",
          "width": 1920,
          "height": 1080
        },
        "hero_main": {
          "url": "https://cdn.adlef.com/pages/hosting/hosting-hero.webp",
          "alt": "Web hosting dashboard",
          "width": 1200,
          "height": 900,
          "priority": true
        }
      }
    }
  },
  "meta": {
    "updated_at": "2026-05-26T12:00:00Z",
    "locale": "en"
  }
}
```

---

## TypeScript types (frontend)

```ts
export type HostingHeroImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sources?: Array<{
    url: string;
    width: number;
    media?: string;
  }>;
};

export type HostingHeroPromo = {
  heading?: string;
  price_current?: string;
  price_original?: string | null;
};

export type HostingHeroCta = {
  label: string;
  href: string;
  open_in_new_tab?: boolean;
};

export type HostingHeroBackground = {
  gradient?: string;
  overlay_opacity?: number;
};

export type HostingHero = {
  heading: string;
  description: string;
  bullets: string[];
  promo?: HostingHeroPromo;
  cta: HostingHeroCta;
  background?: HostingHeroBackground;
  images: {
    background_pattern?: HostingHeroImage;
    hero_main: HostingHeroImage;
  };
};

export type HostingHeroResponse = {
  data: { hero: HostingHero };
  meta?: { updated_at?: string; locale?: string };
};
```

---

## Image configuration (Next.js)

### Remote domains

When images are served from Laravel or a CDN, add hosts to `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "cdn.adlef.com", pathname: "/**" },
    { protocol: "http", hostname: "localhost", port: "8000", pathname: "/storage/**" },
  ],
},
```

### Formats & size guidance

| Asset | Recommended format | Max dimensions | Notes |
|-------|-------------------|----------------|-------|
| `background_pattern` | WebP (or AVIF) | ~1920×1080 | Decorative; can be heavily compressed |
| `hero_main` | WebP | 1200×900 (2× for retina: 2400×1800) | LCP candidate — optimize aggressively |

### Laravel / CMS upload rules

- **MIME:** `image/webp`, `image/png`, `image/jpeg`
- **Max file size:** 500 KB pattern, 1 MB hero main (suggest WebP conversion on upload)
- **Store:** Public disk + CDN URL in API response (not binary in JSON)
- **Alt text:** Required for `hero_main`; recommended for `background_pattern`
- **Filename slug:** e.g. `hosting-hero-{locale}-{version}.webp` for cache busting via URL change

---

## Validation rules (backend)

| Rule | Detail |
|------|--------|
| `heading` | Non-empty, max 200 chars |
| `description` | Non-empty, max 600 chars |
| `bullets` | Array, 1–8 items, each max 200 chars |
| `cta.href` | Valid URL or hash (`#...`) or path (`/...`) |
| `images.hero_main.url` | Valid HTTPS URL (or HTTP in local only) |
| `images.hero_main.alt` | Non-empty, max 125 chars |
| `background.overlay_opacity` | Number between 0 and 1 |

---

## Error & fallback behavior (frontend)

| Scenario | Behavior |
|----------|----------|
| API 404 / 5xx | Use committed static defaults (current copy + `/public/assets/images/*`) |
| Partial payload | Merge: required fields from API; missing images fall back to static paths |
| Invalid image URL | Skip remote image; log in dev; use static fallback |

---

## Suggested Laravel structure (optional)

For a CMS-style admin later:

- **Table:** `page_sections` — `page_slug`, `section_key`, `locale`, `payload` (JSON), `published_at`
- **Or:** dedicated `hosting_hero` model with media relations for `hero_main` and `background_pattern`

Media fields should expose:

- `url` (public)
- `alt` (editable)
- `width`, `height` (auto on upload)

---

## Environment

| Variable | Purpose |
|----------|---------|
| `LARAVEL_HOSTING_URL` | Base URL, e.g. `http://localhost:8000` |
| `NEXT_PUBLIC_API_URL` | Optional public base if different from Laravel internal URL |

Example fetch URL:

```
GET {LARAVEL_HOSTING_URL}/api/pages/hosting/hero
```

Optional header for staging:

```
Accept-Language: en
```

---

## Next sections (out of scope for this doc)

The hosting page also includes sections that will need separate API specs:

- `PartnerBrands`
- `PricingPlans`
- `HostingServices`
- `Stats`, `Features`, `BuiltByExperts`, `SmarterTools`
- `Testimonials`, `BehindTheBrand`, `TechSupport`, `BlogPosts`

Each should follow the same pattern: `GET /api/pages/hosting/{section}` or a single `GET /api/pages/hosting` with nested section objects.

---

## Checklist for backend team

- [ ] Implement `GET /api/pages/hosting/hero` returning JSON above
- [ ] Upload/manage `hero_main` and optional `background_pattern` with alt text
- [ ] Return absolute image URLs (CDN or `/storage/...`)
- [ ] Include `width` and `height` on images when possible (avoids layout shift)
- [ ] Support `locale` query param or `Accept-Language` if multi-language is planned
- [ ] Document `updated_at` for cache invalidation
