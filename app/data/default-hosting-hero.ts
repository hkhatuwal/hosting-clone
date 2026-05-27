import type { HostingHero } from "@/types/hosting-hero";

export const defaultHostingHero: HostingHero = {
  heading: "Fast. Reliable.\nSecure hosting.",
  description:
    "Enjoy fast, secure, and scalable web hosting with LiteSpeed performance, built-in automated backups, free migration, and a unified control panel designed for flexibility and growth.",
  bullets: [
    "High performance with AMD EPYC CPUs, NVMe SSD storage & LiteSpeed",
    "24/7/365 in-house support from real experts",
    "Advanced security with SSL, brute force, malware & DDoS protection",
    "Global data centers for low latency and fast page loads",
  ],
  promo: {
    heading: "Save up to 87% now.",
    price_current: "US$1.99 / mo.",
    price_original: "US$14.99/mo.",
  },
  cta: {
    label: "See plans",
    href: "#pricing",
    open_in_new_tab: false,
  },
  background: {
    gradient:
      "linear-gradient(135deg, #0d493d 0%, #2d7a5f 50%, #6fb844 100%)",
    overlay_opacity: 0.2,
  },
  images: {
    hero_main: {
      url: "/assets/images/hosting-hero.webp",
      alt: "Web hosting dashboard",
      width: 1200,
      height: 900,
      priority: true,
    },
    background_pattern: {
      url: "/assets/images/home-hero-narrow-graphic.webp",
      alt: "Background pattern",
      width: 1920,
      height: 1080,
    },
  },
};
