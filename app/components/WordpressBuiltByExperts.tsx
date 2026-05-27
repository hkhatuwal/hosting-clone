'use client';

import { Clock, RefreshCw, PiggyBank } from "lucide-react";

export default function WordpressBuiltByExperts() {
  const features = [
    {
      badge: "20x",
      badgeType: "text",
      title: "Up to 20X faster turbo",
      description:
        "LiteSpeed cache and NVMe storage mean better SEO rankings, lower bounce rates, and higher conversions.",
    },
    {
      badge: "clock",
      badgeType: "icon",
      title: "24/7 WordPress support",
      description:
        "Plugin issues, white screens, or WooCommerce glitches — our in-house WP team is here day and night.",
    },
    {
      badge: "refresh",
      badgeType: "icon",
      title: "Free site migration",
      description:
        "Already on another host? We'll move your WordPress site, database, and files for free with minimal downtime.",
    },
    {
      badge: "piggybank",
      badgeType: "icon",
      title: "30-day money-back guarantee",
      description:
        "Try Adlef WordPress hosting completely risk-free. Not satisfied? We'll make it right.",
    },
    {
      badge: "99%",
      badgeType: "text",
      title: "99.9% uptime commitment",
      description:
        "Enterprise-grade infrastructure keeps your WordPress site online when your audience needs it most.",
    },
  ];

  const renderBadge = (badge: string, badgeType: string) => {
    if (badgeType === "text") {
      return (
        <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
          <span className="text-white font-bold text-sm md:text-lg">
            {badge}
          </span>
        </div>
      );
    }
    return (
      <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        {badge === "clock" && <Clock className="w-7 h-7 text-white" />}
        {badge === "refresh" && <RefreshCw className="w-7 h-7 text-white" />}
        {badge === "piggybank" && <PiggyBank className="w-7 h-7 text-white" />}
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-12 md:py-20">
      <div className="max-w-3xl lg:container mx-auto px-4 md:px-6 lg:px-12">
        <div className="mb-8 md:mb-12 max-w-5xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
            Built by WordPress experts, for WordPress users
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Every plan runs on AMD EPYC processors, Samsung NVMe storage, and
            LiteSpeed Web Server — the same stack agencies use for high-traffic
            client sites. Scale from a personal blog to a WooCommerce empire
            without changing hosts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow"
            >
              {renderBadge(feature.badge, feature.badgeType)}

              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
