'use client';

import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            title: "I love Adlef",
            review: "Best internet support I have had since 1993 when internet first went public. I have been through several hosts with my media company and school, and Adlef support staff are knowledgeable, thorough, pleasant, and treat clients with respect and understanding. I can't say enough. Keep up the great work. Thank you for saving my domains and email from hackers.",
            rating: 5
        },
        {
            title: "Adlef as an alternative to Hostgator",
            review: "I had tons of troubles with Hostgator and decided to move 6 months earlier. Adlef was a price match, but I was also looking for cPanel, cPanel migration, and a few other features. I am super happy with the speed of my websites and the support desk seems to be A class. Hostgator was good only at the beginning—in the past two years everything has gone south bit by bit.",
            rating: 5
        },
        {
            title: "This is my second Reseller program",
            review: "This is my second Reseller program, along with maintaining a few individual sites for friends, and I'm again glad I've gone with Adlef. I've had a few hiccups on my end, but the important thing is your people have been incredibly helpful. Timely and helpful communication. Issues can always pop up, of course, but it's how well people work to resolve them that matters to me.",
            rating: 5
        }
    ];

    return (
        <div className="w-full bg-[#1A2B2B] py-12 md:py-20">
            <div className="max-w-3xl lg:container mx-auto px-4 md:px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    {/* Trustpilot Logo */}
                    <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                        <Star className="w-5 h-5 md:w-6 md:h-6 text-[#3AD67F] fill-[#3AD67F]" />
                        <span className="text-white text-lg md:text-xl font-medium">Trustpilot</span>
                    </div>
                    
                    {/* Section Title */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-white">
                        What our customers have to say
                    </h2>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#2B504F] rounded-2xl p-6 md:p-8 flex flex-col"
                        >
                            {/* Star Rating */}
                            <div className="flex gap-1 mb-3 md:mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 md:w-5 md:h-5 text-[#3AD67F] fill-[#3AD67F]"
                                    />
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                                {testimonial.title}
                            </h3>

                            {/* Review Text */}
                            <p className="text-white text-xs md:text-sm leading-relaxed">
                                {testimonial.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

