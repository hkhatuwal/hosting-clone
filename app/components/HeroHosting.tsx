'use client';

import { Check } from "lucide-react";
import Image from "next/image";

export default function HeroHosting() {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Hero Section with Background Image */}
            <div 
                className="hero w-full text-white relative min-h-[700px] flex items-center"
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

                <div className="container mx-auto px-12 py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-6">
                            {/* Main Heading */}
                            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
                                Fast, reliable,<br/>
                                secure web hosting
                            </h1>

                            {/* Descriptive Paragraph */}
                            <p className="text-lg text-white/90 leading-relaxed">
                                Enjoy fast, secure, and scalable web hosting with LiteSpeed performance, 
                                built-in automated backups, free migration, and a unified control panel 
                                designed for flexibility and growth.
                            </p>

                            {/* Feature List with Checkmarks */}
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">
                                        High performance with AMD EPYC CPUs, NVMe SSD storage & LiteSpeed
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">
                                        24/7/365 in-house support from real experts
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">
                                        Advanced security with SSL, brute force, malware & DDoS protection
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-white">
                                        Global data centers for low latency and fast page loads
                                    </span>
                                </li>
                            </ul>

                            {/* Pricing and CTA */}
                            <div className="space-y-4 pt-4">
                                <div className="space-y-1">
                                    <p className="text-xl font-bold text-white">
                                        Save up to 87% now.
                                    </p>
                                    <p className="text-lg text-white/90">
                                        Starting at <span className="font-bold">US$1.99 / mo.</span>{' '}
                                        <span className="line-through opacity-70">Was US$14.99/mo.</span>
                                    </p>
                                </div>
                                <button
                                    className="px-10 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-lg">
                                    See plans
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Visual Elements */}
                        <div className="relative h-[500px] lg:h-[600px]">
                            {/* Main Image - Placeholder for now */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm">
                                <Image 
                                    src="/assets/images/hosting-hero.webp" 
                                    alt="Web hosting dashboard"
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

