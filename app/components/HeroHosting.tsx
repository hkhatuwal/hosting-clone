'use client';

import { Check } from "lucide-react";
import Image from "next/image";

export default function HeroHosting() {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Hero Section with Background Image */}
            <div 
                className="hero w-full text-white relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center"
                style={{
                    background: 'linear-gradient(135deg, #0d493d 0%, #2d7a5f 50%, #6fb844 100%)'
                }}
            >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-20">
                    <Image 
                        src="/assets/images/home-hero-narrow-graphic.webp" 
                        alt="Background pattern"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-16 lg:py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-4 md:space-y-6">
                            {/* Main Heading */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                                Fast. Reliable.<br/>
                                Secure hosting.
                            </h1>

                            {/* Descriptive Paragraph */}
                            <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                Enjoy fast, secure, and scalable web hosting with LiteSpeed performance, 
                                built-in automated backups, free migration, and a unified control panel 
                                designed for flexibility and growth.
                            </p>

                            {/* Feature List with Checkmarks */}
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-start gap-2 md:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 md:w-4 md:h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white text-sm md:text-base">
                                        High performance with AMD EPYC CPUs, NVMe SSD storage & LiteSpeed
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 md:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 md:w-4 md:h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white text-sm md:text-base">
                                        24/7/365 in-house support from real experts
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 md:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 md:w-4 md:h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white text-sm md:text-base">
                                        Advanced security with SSL, brute force, malware & DDoS protection
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 md:gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 md:w-4 md:h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white text-sm md:text-base">
                                        Global data centers for low latency and fast page loads
                                    </span>
                                </li>
                            </ul>

                            {/* Pricing and CTA */}
                            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                                <div className="space-y-1">
                                    <p className="text-lg md:text-xl font-bold text-white">
                                        Save up to 87% now.
                                    </p>
                                    <p className="text-base md:text-lg text-white/90">
                                        Starting at <span className="font-bold">US$1.99 / mo.</span>{' '}
                                        <span className="line-through opacity-70">Was US$14.99/mo.</span>
                                    </p>
                                </div>
                                <button
                                    className="px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-primary text-black font-bold text-base md:text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg">
                                    See plans
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Visual Elements */}
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                            {/* Main Image - Placeholder for now */}
                            <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-sm">
                                <Image 
                                    src="/assets/images/hosting-hero.webp" 
                                    alt="Web hosting dashboard"
                                    fill
                                    className="object-cover rounded-xl md:rounded-2xl"
                                />
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

