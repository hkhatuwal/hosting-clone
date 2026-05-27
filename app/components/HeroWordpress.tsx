'use client';

import { Check } from "lucide-react";
import Image from "next/image";

export default function HeroWordpress() {
  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="hero w-full text-white relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #0d493d 0%, #2d7a5f 50%, #6fb844 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/wordpress-hero-pattern.webp"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                Fast.<br />
                Secure.<br />
                WordPress hosting.
              </h1>

              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Launch and grow on infrastructure tuned for WordPress — LiteSpeed
                caching, automatic updates, free SSL, staging environments, and
                expert support from people who live and breathe WP.
              </p>

              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check
                      className="w-3 h-3 md:w-4 md:h-4 text-black"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-white text-sm md:text-base">
                    LiteSpeed + object cache for up to 20X faster page loads
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check
                      className="w-3 h-3 md:w-4 md:h-4 text-black"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-white text-sm md:text-base">
                    One-click installs, staging sites, WP-CLI & automatic updates
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check
                      className="w-3 h-3 md:w-4 md:h-4 text-black"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-white text-sm md:text-base">
                    Free WordPress migration, daily backups & malware scanning
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check
                      className="w-3 h-3 md:w-4 md:h-4 text-black"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-white text-sm md:text-base">
                    24/7 WordPress specialists — real humans, not scripts
                  </span>
                </li>
              </ul>

              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                <div className="space-y-1">
                  <p className="text-lg md:text-xl font-bold text-white">
                    Save up to 85% on WordPress plans.
                  </p>
                  <p className="text-base md:text-lg text-white/90">
                    Starting at{" "}
                    <span className="font-bold">US$2.99 / mo.</span>{" "}
                    <span className="line-through opacity-70">
                      Was US$19.99/mo.
                    </span>
                  </p>
                </div>
                <a
                  href="#wordpress-pricing"
                  className="inline-block px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-primary text-black font-bold text-base md:text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                  See WordPress plans
                </a>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm">
                <Image
                  src="/assets/images/wordpress-hero.webp"
                  alt="WordPress dashboard and site editor"
                  fill
                  className="object-cover rounded-xl md:rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
