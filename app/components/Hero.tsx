'use client';

import {Star, Globe, Zap, ArrowRight} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [placeholder, setPlaceholder] = useState('');
    const fullPlaceholder = 'Search for your domain now';
    
    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let isPaused = false;
        
        const typingInterval = setInterval(() => {
            if (isPaused) {
                return;
            }
            
            if (!isDeleting && currentIndex <= fullPlaceholder.length) {
                setPlaceholder(fullPlaceholder.slice(0, currentIndex));
                currentIndex++;
                
                // Pause when fully typed
                if (currentIndex > fullPlaceholder.length) {
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        isDeleting = true;
                    }, 2000); // 2 second pause at the end
                }
            } else if (isDeleting && currentIndex > 0) {
                currentIndex--;
                setPlaceholder(fullPlaceholder.slice(0, currentIndex));
                
                // Pause when fully deleted, then restart
                if (currentIndex === 0) {
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        isDeleting = false;
                    }, 500); // 0.5 second pause before restarting
                }
            }
        }, 50); // Faster speed (50ms per character)
        
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="w-full relative">
            {/* Search Bar Section */}
            <div className="w-full bg-[#e6f5e4] border-b border-gray-200">
                <div className="container mx-auto px-12 py-2">
                    <div className="flex items-center gap-4">
                        {/* Search Input */}
                        <div className="flex-1 flex items-center gap-4">
                            <input
                                type="text"
                                placeholder={placeholder}
                                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <button
                                className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                Search
                            </button>
                        </div>

                        {/* Domain Extension Badges */}
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-50 px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2 font-semibold text-sm">
                                    <Image
                                        src="/assets/images/dotcom.png"
                                        alt="dotcom"
                                        width={38}
                                        height={32}
                                    />
                                    <span className="font-semibold text-sm">Free / 1st year</span>
                                </div>
                                <div className="text-[10px] text-gray-800">2-year purchase required</div>
                            </div>
                            <div className="bg-gray-50  px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2 font-semibold text-sm">
                                    <Image
                                        src="/assets/images/dotnet.png"
                                        alt="dotcom"
                                        width={38}
                                        height={48}
                                    />
                                    <span className="font-semibold text-sm">Free / 1st year</span>
                                </div>
                                <div className="text-[10px] text-gray-800">2-year purchase required</div>
                            </div>
                            <div className="bg-gray-50  px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2 ">
                                    <Image
                                        src="/assets/images/dotorg.png"
                                        alt="dotcom"
                                        width={38}
                                        height={48}
                                    />
                                    <span className="font-semibold text-sm">$9.99</span>
                                </div>
                                <div className="text-[10px] text-gray-800">for the 1st year</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero w-full text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 text-gray-400 text-sm font-mono whitespace-pre-wrap">
                        {Array(50).fill('COM// BLACK FRIDAY ').join('\n')}
                    </div>
                </div>

                <div className="container mx-auto px-12 py-24 relative z-10">
                    <div className="grid grid-cols-2 gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                            {/* Review Badges */}
                            <div className="space-y-3 flex gap-5 items-center">
                                <Image src={"/assets/images/trustpilot-rating.png"} className="scale-125" alt="Rating"
                                       width={200} height={200}/>
                                <Image src={"/assets/images/hostadvice.png"} className="object-contain mb-0"
                                       alt="Rating" width={150} height={150}/>
                                <Image src={"/assets/images/google-rating.png"} className="object-contain" alt="Rating"
                                       width={150} height={150}/>

                            </div>

                            {/* Headline */}
                            <h1 className="text-6xl font-bold leading-tight">
                                This Black Friday,<br/>
                                be seen, get ready,<br/>
                                stay ahead.
                            </h1>

                            {/* Sub-headline */}
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Get your WordPress site ready for Black Friday.<br/>
                                Try it for just $1 or get Managed WordPress free for 6 months.
                            </p>

                            {/* Price and CTA */}
                            <div className="space-y-4">
                                <div className="text-3xl font-bold">
                                    Try for just <span className="text-primary">US$1.00/mo</span>
                                </div>
                                <button
                                    className="px-10 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors">
                                    See plans
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Visual Elements */}
                        <div className="relative h-[600px] flex items-center justify-center">

                            <Image src={"/assets/images/hero.webp"} alt="Hero image" width={0}
                                   height={0}
                                   style={{width: '100%', height: 'auto'}} // optional
                                   sizes="100vw"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Cards Section */}
            <div className="w-full absolute bottom-[-30%] ">
                {/* Background: Dark top, light green bottom */}

                <div className="container mx-auto px-12 py-16 relative z-10">
                    <div className="grid grid-cols-4 gap-3">
                        {/* Card 1: Fast shared hosting */}
                        <div className="bg-[#132828] rounded-xl p-8 text-white space-y-4">
                            <div className="w-12 h-12">
                                <Globe className="w-full h-full" strokeWidth={1.5}/>
                            </div>
                            <h3 className="text-xl font-bold">Fast shared hosting</h3>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-300">Starting at</p>
                                <p className="text-4xl font-bold">$1.99</p>
                            </div>
                            <a href="#"
                               className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
                                <span>Find out more</span>
                                <ArrowRight className="w-5 h-5"/>
                            </a>
                        </div>

                        {/* Card 2: AI Sitebuilder */}
                        <div className="bg-[#0d493d] rounded-xl p-8 text-white space-y-4">
                            <div className="w-12 h-12">
                                <Image src={"/assets/images/ai-site-builder.png"} alt="WordPress wordpress"
                                       className="h-full w-full" width={0} height={0}/>
                            </div>
                            <h3 className="text-xl font-bold">AI Sitebuilder</h3>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-300">Starting at</p>
                                <p className="text-4xl font-bold">$4.99</p>
                            </div>
                            <a href="#"
                               className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
                                <span>Find out more</span>
                                <ArrowRight className="w-5 h-5"/>
                            </a>
                        </div>

                        {/* Card 3: Ultrafast VPS - Highlighted */}
                        <div className="bg-green-400 rounded-xl p-8 text-black space-y-4">
                            <div className="w-12 h-12">
                                <Zap className="w-full h-full" strokeWidth={1.5}/>
                            </div>
                            <h3 className="text-xl font-bold">Ultrafast VPS</h3>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-800">Starting at</p>
                                <p className="text-4xl font-bold">$9.99</p>
                            </div>
                            <a href="#"
                               className="inline-flex items-center gap-2 text-black hover:gap-3 transition-all">
                                <span>Find out more</span>
                                <ArrowRight className="w-5 h-5"/>
                            </a>
                        </div>

                        {/* Card 4: Hosting for WordPress */}
                        <div className="bg-white rounded-xl p-8 text-black space-y-4">
                            <div className="w-12 h-12">
                                <Image src={"/assets/images/hosting-wordpress.png"} alt="WordPress wordpress"
                                       className="h-full w-full" width={0} height={0}/>
                            </div>
                            <h3 className="text-xl font-bold">Hosting for WordPress</h3>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-600">Starting at</p>
                                <p className="text-4xl font-bold">$1.00</p>
                            </div>
                            <a href="#"
                               className="inline-flex items-center gap-2 text-black hover:gap-3 transition-all">
                                <span>Find out more</span>
                                <ArrowRight className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

