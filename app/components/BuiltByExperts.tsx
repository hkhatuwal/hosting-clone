'use client';

import { Clock, RefreshCw, PiggyBank } from "lucide-react";

export default function BuiltByExperts() {
    const features = [
        {
            badge: "20x",
            badgeType: "text",
            title: "Up to 20X faster turbo",
            description: "That means better SEO rankings, lower bounce rates and higher conversion rates."
        },
        {
            badge: "clock",
            badgeType: "icon",
            title: "Support that never clocks out",
            description: "Our in-house team is available 24/7/365. Real people ready to help, whether it's 3 p.m. or 3 a.m."
        },
        {
            badge: "refresh",
            badgeType: "icon",
            title: "Free account migration",
            description: "Already have a Website? Let us do the hard work for you and transfer it for free, ask us how."
        },
        {
            badge: "piggybank",
            badgeType: "icon",
            title: "Money-back guarantee",
            description: "Give our high-speed hosting service a try completely risk-free."
        },
        {
            badge: "99%",
            badgeType: "text",
            title: "99.9% uptime commitment",
            description: "Adlef is the host you can depend on with ultra-reliable servers."
        }
    ];

    const renderBadge = (badge: string, badgeType: string) => {
        if (badgeType === "text") {
            return (
                <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{badge}</span>
                </div>
            );
        } else {
            return (
                <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    {badge === "clock" && <Clock className="w-7 h-7 text-white" />}
                    {badge === "refresh" && <RefreshCw className="w-7 h-7 text-white" />}
                    {badge === "piggybank" && <PiggyBank className="w-7 h-7 text-white" />}
                </div>
            );
        }
    };

    return (
        <div className="w-full bg-white py-12 md:py-20">
            <div className="max-w-3xl lg:container mx-auto px-4 md:px-6 lg:px-12">
                {/* Section Heading and Description */}
                <div className="mb-8 md:mb-12 max-w-5xl">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
                        Built by experts for experts
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        We keep your site fast, stable, and ready for whatever's next. Every plan runs on serious hardware AMD EPYC processors, Samsung NVMe storage, and Anycast DNS. Built to scale, so you're covered whether it's a personal blog or a global ecommerce empire.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-emerald-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow"
                        >
                            {/* Badge */}
                            {renderBadge(feature.badge, feature.badgeType)}

                            {/* Title */}
                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
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

