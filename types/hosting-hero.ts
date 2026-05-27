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
    hero_main?: HostingHeroImage;
  };
};

export type HostingHeroResponse = {
  data: { hero: HostingHero };
  meta?: {
    updated_at?: string | null;
    locale?: string;
  };
};
