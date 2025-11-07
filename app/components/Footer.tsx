import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#182a2a] text-white">
            {/* Main Footer Content */}
            <div className="max-w-3xl lg:container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Image src={"/assets/images/logo-light.png"} alt="Logo" width={220} height={48}/>
                        </div>

                        {/* Trustpilot Rating */}
                        <div className="space-y-2">
                            <div className="text-lg font-semibold">Excellent</div>
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-[#00d95f]" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                ))}
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-300">4,786 reviews on</span>
                                <svg className="w-20 h-5 fill-[#00d95f]" viewBox="0 0 512 96"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M35.9 47.4L23.4 15.5h11.7L47 47.4 58.9 15.5h11.7L58.9 47.4 70.8 79.3H59.1L47 47.4 35.9 79.3H24.2L35.9 47.4z"/>
                                    <text x="85" y="60" className="text-sm fill-[#00d95f] font-bold"
                                          style={{fontSize: '32px'}}>Trustpilot
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Including Section */}
                        <div className="space-y-3">
                            <div className="text-sm text-gray-400">Including</div>
                            <div className="flex gap-2 ">
                                {/* A2 Hosting Logo Placeholder */}
                                <Image src={"/assets/images/a2-hosting.png"} alt="Logo" width={160} height={48}/>
                                {/* Kenya Website Experts Logo Placeholder */}
                                <Image src={"/assets/images/keny-hosting.png"} alt="Logo" width={160} height={48}/>

                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div>
                                <div className="font-bold text-sm">Support</div>
                                <a href="mailto:support@hosting.com"
                                   className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">
                                    support@hosting.com
                                </a>
                            </div>
                            <div>
                                <div className="font-bold text-sm">Call us on</div>
                                <a href="tel:+17342224678" className="font-bold hover:text-[#00d95f] transition-colors">
                                    +1 (734) 222-4678
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Hosting Column */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Hosting</h3>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Hosting</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Hosting
                                    for WordPress</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">cPanel
                                    Hosting</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Reseller
                                    Hosting</a></li>
                            </ul>
                        </div>

                        {/* Solutions Column */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Solutions</h3>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Buy a
                                    domain</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">All
                                    domains</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Domain
                                    Transfer</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">SSL
                                    Certificates</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">VPS
                                    Hosting</a></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Customer
                                    Login</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Create
                                    New Account</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Open
                                    Support Ticket</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Report
                                    Abuse</a></li>
                                <li>
                                    <a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm flex items-center">
                                        Service Status
                                        <span className="ml-2 w-2 h-2 bg-[#00d95f] rounded-full"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">About</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Contact</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Blog</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Knowledge
                                    Base</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Affiliate
                                    Program</a></li>
                                <li><a href="#"
                                       className="text-gray-300 hover:text-[#00d95f] transition-colors text-sm">Refer a
                                    Friend</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            © 2025 hosting.com. All rights reserved.
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4">
                            <a href="#"
                               className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00d95f] transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00d95f] transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00d95f] transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00d95f] transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Legal Links */}
                        <div
                            className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-sm text-gray-400">
                            <a href="#" className="hover:text-[#00d95f] transition-colors">Privacy Manager</a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#00d95f] transition-colors">Acceptable Usage Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#00d95f] transition-colors">Accessibility Statement</a>
                            <span>|</span>
                            <a href="#" className="hover:text-[#00d95f] transition-colors">Policies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

