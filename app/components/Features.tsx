'use client';

import {Zap, Brain, ShieldCheck, ArrowLeftRight} from "lucide-react";
import Image from "next/image";

export default function Features() {
    const features = [
        {
            icon: "/assets/images/faster.png",
            title: "Faster performance",
            description: "Our platform is tuned for speed with LiteSpeed caching and smart resource management, ensuring your site runs smoothly and efficiently under any load."
        },
        {
            icon: "/assets/images/crew-support.png",

            title: "Expert support",
            description: "Our in-house team is available 24/7/365. Real people ready to help, whether it's 3 p.m. or 3 a.m."
        },
        {
            icon: "/assets/images/security.png",
            title: "Security built in, not bolted on",
            description: "Every plan includes free SSL certificates, DDoS protection, brute force defense, and malware scanning to keep your site safe from day one."
        },
        {
            icon: "/assets/images/move-site.png",
            title: "We move your site for free",
            description: "Switching hosts? We'll handle the migration of your site, databases, files, and emails. Minimal downtime, no drama."
        }
    ];

    return (
        <div className="w-full bg-green-50 py-12 md:py-20">
            <div className="max-w-3xl lg:container mx-auto px-4 md:px-12">
                {/* Section Heading */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-black mb-8 md:mb-12 max-w-4xl">
                    Features built for better hosting, with Adlef
                </h2>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                    {features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 md:p-8"
                            >
                                {/* Icon */}
                                <Image src={feature.icon} width={40} height={40} className="w-10 h-10 md:w-12 md:h-12" alt={feature.title}/>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-3 md:mb-4 mt-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

