'use client';

import {ArrowRight, ChevronLeft, ChevronRight} from "lucide-react";
import React, {useState} from "react";
import Image from "next/image";

export default function BehindTheBrand() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/assets/images/our-mission.webp",
            tag: "Our mission",
            description: "We provide a global hosting platform that helps people succeed online. Powered by advanced infrastructure, backed by expert service, and shaped by a people-first philosophy, we make the complex simple. We give you tools and support that deliver real results, and we show up. Every time. Because trust isn't a slogan here. It's a promise.",
        },
        {
            image: "/assets/images/our-people.webp",
            tag: "Our people",
            description: "Behind every server, control panel, and line of code is a team of skilled engineers, product specialists, and customer success managers. We hire for expertise and invest in our people so they can deliver the best for you.",
        },
        {
            image: "/assets/images/our-support-team.webp",
            tag: "Our support team",
            description: "A team of trained professionals are available 24/7, ready to tackle technical challenges and guide you through solutions. Whether you need configuration advice, troubleshooting, or performance optimization, you'll speak to someone who knows the technology inside out.",
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    
    return (
        <div className="w-full bg-[#1a3030] py-12 md:py-20 overflow-hidden">
            <div className="max-w-7xl lg:container mx-auto px-4 md:px-6 lg:px-12">
                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 md:mb-6">
                            Who's behind the brand
                        </h2>
                        <p className="text-base md:text-lg text-white leading-relaxed">
                            Adlef is built by people who believe hosting should be as reliable as the technology 
                            behind it. We combine decades of industry experience with a forward-thinking approach, creating 
                            solutions that work for businesses of every size. From first-time site owners to global enterprises, 
                            we've got the tech and the team to support you.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3 self-end md:self-start">
                        <button
                            onClick={prevSlide}
                            className="cursor-pointer w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 text-white"/>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="cursor-pointer w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 text-white"/>
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 px-1 md:px-2"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#f8f7f4] rounded-3xl overflow-hidden">
                                    {/* Left Panel - Image */}
                                    <div className="col-span-1 flex overflow-hidden h-[250px] md:h-[400px] lg:h-[500px]">
                                        <Image
                                            src={slide.image}
                                            alt={slide.tag}
                                            width={600}
                                            height={500}
                                            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Right Panel - Text Content */}
                                    <div className="flex flex-col justify-between col-span-1 p-6 md:p-8 lg:p-12">
                                        <div>
                                            {/* Tag */}
                                            <div className="inline-block mb-4 md:mb-6">
                                                <span className="px-4 md:px-6 py-2 border-2 border-gray-900 rounded-full text-xs md:text-sm font-medium text-gray-900">
                                                    {slide.tag}
                                                </span>
                                            </div>
                                            
                                            {/* Description */}
                                            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-900">
                                                {slide.description}
                                            </p>
                                        </div>

                                        {/* Button */}
                                        <div className="mt-6 md:mt-8">
                                            <button
                                                className="group cursor-pointer flex gap-2 items-center bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-500 hover:to-lime-500 text-teal-950 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base"
                                            >
                                                Read more
                                                <span
                                                    className="inline-block w-0 overflow-hidden -translate-x-2 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"
                                                >
                                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                                </span>
                                            </button>
                                        </div>
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
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? 'bg-white w-8'
                                    : 'bg-white/40 w-2 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

