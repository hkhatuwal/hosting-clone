'use client';

import {ArrowRight, ChevronLeft, ChevronRight} from "lucide-react";
import React, {useState} from "react";
import Image from "next/image";

export default function SmarterTools() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/assets/images/ai-website.webp",
            title: "AI-Powered Website Builder",
            description: "Our AI-powered website builder lets you create a site that's visually polished, technically sound, and aligned with your brand. From eCommerce to client bookings to professional portfolios, you can launch a high-performing site in minutes.",
        },
        {
            image: "/assets/images/developer-ssh.webp",
            title: "Developer-Friendly Features",
            description: "Developer-friendly features like SSH access, WP-CLI, and staging environments give you full control to build, test, and deploy with confidence.",
        },
        {
            image: "/assets/images/automated-backups.webp",
            title: "Security & Protection",
            description: "Free SSL, automated backups, DDoS protection, and malware scanning run 24/7. Set it once and forget it, we handle the threats so you can focus on growing your business.",
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full bg-green-50 py-20 overflow-hidden">
            <div className="max-w-3xl lg:container mx-auto px-6 lg:px-12">
                {/* Header with Navigation */}
                <div className="flex justify-between items-start mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl font-display font-semibold text-gray-900 mb-6">
                            Smarter tools. Expert results.
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            With hosting.com, you get more than space on a server you get performance, security, and the
                            confidence your site is built to last.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="cursor-pointer w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700"/>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="cursor-pointer w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700"/>
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative rounded-3xl bg-gradient-to-r bg-[#122b2b]">
                    <div
                        className="flex gap-5 transition-transform duration-500 ease-in-out"
                        style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 rounded-xl overflow-hidden"
                            >
                                <div className="grid lg:grid-cols-3 gap-8 ">
                                    {/* Left Panel - Image */}
                                    <div className=" col-span-1 flex overflow-hidden h-[500px]">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={600}
                                            height={200}
                                            className="cursor-pointer w-full h-full object-cover hover:scale-105 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Right Panel - Text Content */}
                                    <div className="flex flex-col justify-between col-span-2  text-white lg:p-12 ">
                                        <div>
                                            <h3 className="text-3xl font-semibold mb-6">
                                                {slide.title}
                                            </h3>
                                            <p className="text-lg leading-relaxed text-gray-200">
                                                {slide.description}
                                            </p>
                                        </div>

                                        {index==0 && <div className="flex justify-between">
                                            <h3>
                                                Al Sitebuilder Starting at $4.99 /mo
                                            </h3>
                                            <button
                                                className="group  cursor-pointer flex gap-2 justify-center items-center bg-gradient-to-r to-lime-400 from-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-teal-950 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                            >
                                                Read more
                                                <span
                                                    className="inline-block w-0 overflow-hidden -translate-x-2 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"
                                                ><ArrowRight /> </span>
                                            </button>

                                        </div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? 'bg-gray-900 w-8'
                                    : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

