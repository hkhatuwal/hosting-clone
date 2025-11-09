'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BlogPosts() {
    const blogPosts = [
        {
            thumbnail: "/assets/images/blog1.webp", // Placeholder - user will provide
            title: "Get your WordPress ready for Black Friday and unlock 6 months free on annual managed plans",
            date: "November 4, 2025",
            readTime: "5 min read",
            link: "#"
        },
        {
            thumbnail: "/assets/images/blog2.png", // Placeholder
            title: "How expert WordPress maintenance boosts SEO, speed, and revenue",
            date: "October 29, 2025",
            readTime: "5 min read",
            link: "#"
        },
        {
            thumbnail: "/assets/images/blog3.webp", // Placeholder
            title: "What we learned at BrightonSEO: search is changing, and so are we",
            date: "October 28, 2025",
            readTime: "5 min read",
            link: "#"
        },
        {
            thumbnail: "/assets/images/blog4.webp", // Placeholder
            title: "Website security 101: protecting your site at the hosting level",
            date: "October 27, 2025",
            readTime: "5 min read",
            link: "#"
        }
    ];

    return (
        <div className="w-full py-12 md:py-20" style={{ backgroundColor: '#F8FAF7' }}>
            <div className="max-w-3xl lg:container mx-auto px-4 md:px-6 lg:px-12">
                {/* Section Title */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
                    Recent hosting news & blog posts
                </h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-[380px] md:h-[410px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Thumbnail with "Open Post" Icon */}
                            <div className="relative h-40 md:h-48 w-full overflow-hidden">
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Open Post Icon - Top Right */}
                                <a 
                                    href={post.link}
                                    className="absolute top-3 right-3 md:top-4 md:right-4 bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200"
                                    aria-label="Open post"
                                >
                                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </a>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                                {/* Post Title */}
                                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 leading-snug line-clamp-3">
                                    {post.title}
                                </h3>

                                {/* Date and Read Time */}
                                <div className="text-xs md:text-sm text-gray-500">
                                    {post.date} {post.readTime}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

