'use client';

import { Clock, RefreshCw, PiggyBank } from "lucide-react";

export default function VpsBuiltByExperts() {
    const features = [
        {
            badge: "10x",
            badgeType: "text",
            title: "Up to 10X faster than shared",
            description: "Dedicated CPU and NVMe mean consistent performance for databases, APIs, and high-traffic applications."
        },
        {
            badge: "clock",
            badgeType: "icon",
            title: "24/7 VPS specialists",
            description: "Real engineers who understand Linux, networking, and server tuning — not scripted chatbots."
        },
        {
            badge: "refresh",
            badgeType: "icon",
            title: "Free VPS migration",
            description: "Already running elsewhere? We'll move your VPS, apps, and data with minimal downtime."
        },
        {
            badge: "piggybank",
            badgeType: "icon",
            title: "30-day money-back guarantee",
            description: "Try Adlef VPS risk-free. If it's not the right fit, we'll make it right."
        },
        {
            badge: "NVMe",
            badgeType: "text",
            title: "NVMe on AMD EPYC",
            description: "Enterprise hardware built for I/O-heavy workloads, containers, and production environments."
        }
    ];

    const renderBadge = (badge: string, badgeType: string) => {
        if (badgeType === "text") {
            return (
                <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm md:text-lg">{badge}</span>
                </div>
            );
        }
        return (
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                {badge === "clock" && <Clock className="w-7 h-7 text-white" />}
                {badge === "refresh" && <RefreshCw className="w-7 h-7 text-white" />}
                {badge === "piggybank" && <PiggyBank className="w-7 h-7 text-white" />}
            </div>
        );
    };

    return (
        <div className="w-full bg-white py-12 md:py-20">
            <div className="max-w-3xl lg:container mx-auto px-4 md:px-6 lg:px-12">
                <div className="mb-8 md:mb-12 max-w-5xl">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
                        Built for developers who need control
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Every VPS runs on AMD EPYC processors, Samsung NVMe storage, and redundant
                        networking. Scale from a single app to multi-region deployments — with the
                        freedom of root access and the reliability of enterprise infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-emerald-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow"
                        >
                            {renderBadge(feature.badge, feature.badgeType)}

                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                                {feature.title}
                            </h3>

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
