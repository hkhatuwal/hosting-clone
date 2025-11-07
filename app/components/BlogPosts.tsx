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
        <div className="w-full py-20" style={{ backgroundColor: '#F8FAF7' }}>
            <div className="max-w-3xl lg:container mx-auto px-6 lg:px-12">
                {/* Section Title */}
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                    Recent hosting news & blog posts
                </h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-[410px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Thumbnail with "Open Post" Icon */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Open Post Icon - Top Right */}
                                <a 
                                    href={post.link}
                                    className="absolute top-4 right-4 bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200"
                                    aria-label="Open post"
                                >
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </a>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 p-6 flex flex-col justify-between ">
                                {/* Post Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-snug line-clamp-3">
                                    {post.title}
                                </h3>

                                {/* Date and Read Time */}
                                <div className="text-sm text-gray-500">
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

