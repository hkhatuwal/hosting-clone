'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

export default function WordpressSmarterTools() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/images/wordpress-slide-staging.webp",
      title: "Staging & One-Click Clone",
      description:
        "Test plugin updates, theme changes, and new features on a staging copy before pushing live. Clone your production site in one click — no FTP required.",
    },
    {
      image: "/assets/images/wordpress-slide-wpcli.webp",
      title: "WP-CLI & Developer Tools",
      description:
        "SSH access, WP-CLI, Git-friendly workflows, and PHP version switching give developers the control they need without sacrificing managed convenience.",
    },
    {
      image: "/assets/images/wordpress-slide-updates.webp",
      title: "Auto Updates & Daily Backups",
      description:
        "Core, plugin, and theme updates on your schedule. Daily backups stored off-server with one-click restore — set it once and focus on your content.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-green-50 py-12 md:py-20 overflow-hidden">
      <div className="max-w-3xl lg:container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-gray-900 mb-4 md:mb-6">
              Smarter WordPress tools. Expert results.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With Adlef, you get more than WordPress on a server — you get
              staging, caching, security, and the confidence your site is built
              to rank and convert.
            </p>
          </div>

          <div className="flex gap-3 self-end md:self-start">
            <button
              onClick={prevSlide}
              className="cursor-pointer w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="cursor-pointer w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl bg-gradient-to-r ">
          <div
            className="flex gap-1 lg:gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 rounded-2xl overflow-hidden bg-[#122b2b]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
                  <div className="col-span-1 flex overflow-hidden h-[250px] md:h-[400px] lg:h-[500px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={600}
                      height={500}
                      className="cursor-pointer w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  <div className="flex flex-col justify-between col-span-1 lg:col-span-2 text-white p-6 md:p-8 lg:p-12">
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">
                        {slide.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-200">
                        {slide.description}
                      </p>
                    </div>

                    {index === 0 && (
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                        <h3 className="text-sm md:text-base">
                          WordPress Business from $4.99 /mo
                        </h3>
                        <a
                          href="#wordpress-pricing"
                          className="group cursor-pointer flex gap-2 justify-center items-center bg-gradient-to-r to-lime-400 from-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-teal-950 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap"
                        >
                          See plans
                          <span className="inline-block w-0 overflow-hidden -translate-x-2 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                            <ArrowRight />
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-gray-900 w-8"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
