import { defaultHostingHero } from "@/app/data/default-hosting-hero";
import type { HostingHero, HostingHeroResponse } from "@/types/hosting-hero";

function getLaravelBaseUrl(): string | null {
  const url =
    process.env.LARAVEL_HOSTING_URL ??
    process.env.NEXT_PUBLIC_LARAVEL_HOSTING_URL;
  if (!url) {
    return null;
  }
  return url.replace(/\/$/, "");
}

export function mergeHostingHero(
  api: HostingHero | null,
  fallback: HostingHero = defaultHostingHero,
): HostingHero {
  if (!api) {
    return fallback;
  }

  return {
    ...fallback,
    ...api,
    promo: { ...fallback.promo, ...api.promo },
    cta: { ...fallback.cta, ...api.cta },
    background: { ...fallback.background, ...api.background },
    images: {
      background_pattern:
        api.images?.background_pattern?.url
          ? api.images.background_pattern
          : fallback.images.background_pattern,
      hero_main:
        api.images?.hero_main?.url
          ? api.images.hero_main
          : fallback.images.hero_main,
    },
    bullets: api.bullets?.length ? api.bullets : fallback.bullets,
  };
}

export async function fetchHostingHero(
  locale = "en",
): Promise<HostingHero | null> {
  const baseUrl = getLaravelBaseUrl();
  if (!baseUrl) {
    console.warn("LARAVEL_HOSTING_URL is not set");
    return null;
  }

  try {
    const res = await fetch(
      `${baseUrl}/api/pages/hosting/hero?locale=${encodeURIComponent(locale)}`,
      {
        headers: {
          Accept: "application/json",
          "Accept-Language": locale,
        },
        next: { revalidate: 60, tags: ["hosting-hero"] },
      },
    );

    if (!res.ok) {
      return null;
    }

    const json = (await res.json()) as HostingHeroResponse;
    return json.data?.hero ?? null;
  } catch {
    return null;
  }
}

export async function getHostingHero(locale = "en"): Promise<HostingHero> {
  const apiHero = await fetchHostingHero(locale);
  return mergeHostingHero(apiHero);
}
