'use client';

import Image from "next/image";

export default function VpsFeatures() {
    const features = [
        {
            icon: "/assets/images/vps-feature-root-access.png",
            title: "Full root access",
            description: "Install any stack, configure firewalls, run Docker, and customize your server exactly how you need it — no restrictions."
        },
        {
            icon: "/assets/images/vps-feature-expert-support.png",
            title: "Expert VPS support",
            description: "Our in-house engineers know Linux, networking, and performance tuning. Available 24/7/365 when you need real help."
        },
        {
            icon: "/assets/images/vps-feature-security.png",
            title: "Security at the server level",
            description: "DDoS mitigation, optional managed hardening, automated backups, and snapshot restore keep your VPS protected around the clock."
        },
        {
            icon: "/assets/images/vps-feature-migration.png",
            title: "Free VPS migration",
            description: "Moving from another provider? We'll migrate your VPS, data, and configs with minimal downtime — handled by our migration team."
        }
    ];

    return (
        <div className="w-full bg-green-50 py-12 md:py-20">
            <div className="max-w-3xl lg:container mx-auto px-4 md:px-12">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-semibold text-black mb-8 md:mb-12 max-w-4xl">
                    Features built for serious VPS hosting, with Adlef
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 md:p-8"
                        >
                            <Image src={feature.icon} width={40} height={40} className="w-10 h-10 md:w-12 md:h-12" alt={feature.title}/>

                            <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-3 md:mb-4 mt-3">
                                {feature.title}
                            </h3>

                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
