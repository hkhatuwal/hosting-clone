import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { HostingHero, HostingHeroImage } from "@/types/hosting-hero";

type HeroHostingProps = {
  hero: HostingHero;
};

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, #0d493d 0%, #2d7a5f 50%, #6fb844 100%)";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function HeroImage({
  image,
  className,
  fill = false,
  sizes,
}: {
  image: HostingHeroImage;
  className?: string;
  fill?: boolean;
  sizes?: string;
}) {
  const shared = {
    src: image.url,
    alt: image.alt,
    className,
    priority: image.priority,
    sizes,
  };

  if (fill) {
    return <Image {...shared} fill />;
  }

  if (image.width && image.height) {
    return (
      <Image
        {...shared}
        width={image.width}
        height={image.height}
        className={className}
      />
    );
  }

  return <Image {...shared} fill />;
}

export default function HeroHosting({ hero }: HeroHostingProps) {
  const gradient = hero.background?.gradient ?? DEFAULT_GRADIENT;
  const overlayOpacity = hero.background?.overlay_opacity ?? 0.2;
  const headingLines = hero.heading.split("\n");
  const pattern = hero.images.background_pattern;
  const heroMain = hero.images.hero_main;
  const ctaExternal = isExternalHref(hero.cta.href);

  const ctaClassName =
    "inline-block px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-primary text-black font-bold text-base md:text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg";

  const ctaContent = hero.cta.label;
  const ctaProps = {
    className: ctaClassName,
    ...(hero.cta.open_in_new_tab
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {}),
  };

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="hero w-full text-white relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center"
        style={{ background: gradient }}
      >
        {pattern?.url && (
          <div
            className="absolute inset-0"
            style={{ opacity: overlayOpacity }}
          >
            <HeroImage image={pattern} fill className="object-cover" />
          </div>
        )}

        <div className="container mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                {headingLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < headingLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                {hero.description}
              </p>

              <ul className="space-y-2 md:space-y-3">
                {hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 md:gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                      <Check
                        className="w-3 h-3 md:w-4 md:h-4 text-black"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-white text-sm md:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {(hero.promo?.heading ||
                hero.promo?.price_current ||
                hero.cta) && (
                <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                  {(hero.promo?.heading || hero.promo?.price_current) && (
                    <div className="space-y-1">
                      {hero.promo?.heading && (
                        <p className="text-lg md:text-xl font-bold text-white">
                          {hero.promo.heading}
                        </p>
                      )}
                      {hero.promo?.price_current && (
                        <p className="text-base md:text-lg text-white/90">
                          Starting at{" "}
                          <span className="font-bold">
                            {hero.promo.price_current}
                          </span>
                          {hero.promo.price_original && (
                            <>
                              {" "}
                              <span className="line-through opacity-70">
                                Was {hero.promo.price_original}
                              </span>
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  )}
                  {ctaExternal ? (
                    <a href={hero.cta.href} {...ctaProps}>
                      {ctaContent}
                    </a>
                  ) : (
                    <Link href={hero.cta.href} {...ctaProps}>
                      {ctaContent}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {heroMain?.url && (
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm">
                  <HeroImage
                    image={heroMain}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover rounded-xl md:rounded-2xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
