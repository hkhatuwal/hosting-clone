'use client';

import Image from "next/image";

export default function WordpressFeatures() {
  const features = [
    {
      icon: "/assets/images/wordpress-feature-litespeed.png",
      title: "LiteSpeed WordPress cache",
      description:
        "Server-level caching and QUIC.cloud CDN integration keep TTFB low and Core Web Vitals green — even under traffic spikes.",
    },
    {
      icon: "/assets/images/wordpress-feature-wp-support.png",
      title: "WordPress expert support",
      description:
        "Our team knows plugins, themes, and WooCommerce inside out. Available 24/7/365 when something breaks at 2 a.m.",
    },
    {
      icon: "/assets/images/wordpress-feature-security.png",
      title: "Security built for WordPress",
      description:
        "Free SSL, malware scanning, brute-force protection, and isolated accounts help keep your site and visitors safe.",
    },
    {
      icon: "/assets/images/wordpress-feature-migration.png",
      title: "Free WordPress migration",
      description:
        "Switching hosts? We move your site, database, media, and emails with minimal downtime — handled by our migration team.",
    },
  ];

  return (
    <div className="w-full bg-green-50 py-12 md:py-20">
      <div className="max-w-3xl lg:container mx-auto px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-black mb-8 md:mb-12 max-w-4xl">
          Features built for better WordPress hosting, with Adlef
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8">
              <Image
                src={feature.icon}
                width={40}
                height={40}
                className="w-10 h-10 md:w-12 md:h-12"
                alt={feature.title}
              />

              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-3 md:mb-4 mt-3">
                {feature.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
