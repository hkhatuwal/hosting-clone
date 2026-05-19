'use client';

import Image from "next/image";
import {CircleUser, ShoppingCart, Phone, ChevronDown, ArrowUpRight, Menu, X} from "lucide-react";
import {Facebook, Linkedin, Instagram} from "lucide-react";
import { Globe, Server, HardDrive, Database, Shield, FileText, Video, HelpCircle, Users, Lock, Cloud, RefreshCw, Palette, Box, LucideIcon } from "lucide-react";
import BadgeNew from "@/app/components/BadgeNew";
import { useState, useRef } from "react";

// Dropdown content for each menu item
const dropdownContent = {
    hosting: {
        columns: [
            {
                title: "Shared Hosting",
                items: [
                    {
                        title: "Web Hosting",
                        description: "Feature-rich cPanel & one-click tools",
                        icon: Globe
                    },
                    {
                        title: "Hosting for WordPress",
                        description: "Optimized WordPress hosting for growth",
                        icon: Box
                    },
                    {
                        title: "Reseller Hosting",
                        description: "Launch your own hosting business",
                        icon: Users
                    }
                ]
            },
            {
                title: "VPS Hosting",
                items: [
                    {
                        title: "Managed VPS Hosting",
                        description: "Zero server hassle, 100% managed for you",
                        icon: Server
                    },
                    {
                        title: "VPS Hosting (root access)",
                        description: "Full root access, full control",
                        icon: Database
                    }
                ]
            },
            {
                title: "Dedicated",
                items: [
                    {
                        title: "Managed VDS Hosting",
                        description: "Dedicated-level power",
                        icon: HardDrive
                    },
                    {
                        title: "Dedicated Servers",
                        description: "Full control on your hardware",
                        icon: Server
                    }
                ]
            }
        ],
        cta: {
            title: "Talk to sales team",
            description: "Get in touch with our expert sales team to find the best solution for you"
        }
    },
    wordpress: {
        columns: [
            {
                title: "WordPress Solutions",
                items: [
                    {
                        title: "Managed WordPress",
                        description: "Optimized for speed and security",
                        icon: Box
                    },
                    {
                        title: "WordPress Pro",
                        description: "Advanced features for professionals",
                        icon: Shield
                    }
                ]
            },
            {
                title: "WordPress Tools",
                items: [
                    {
                        title: "WordPress Migration",
                        description: "Free site migration service",
                        icon: RefreshCw
                    },
                    {
                        title: "WordPress Themes",
                        description: "Premium themes included",
                        icon: Palette
                    }
                ]
            }
        ],
        cta: {
            title: "WordPress Support",
            description: "24/7 expert WordPress support team ready to help you"
        }
    },
    services: {
        columns: [
            {
                title: "Domain Services",
                items: [
                    {
                        title: "Domain Registration",
                        description: "Register your perfect domain name",
                        icon: Globe
                    },
                    {
                        title: "Domain Transfer",
                        description: "Easy domain transfer process",
                        icon: RefreshCw
                    }
                ]
            },
            {
                title: "Security Services",
                items: [
                    {
                        title: "SSL Certificates",
                        description: "Secure your website with SSL",
                        icon: Lock
                    },
                    {
                        title: "Site Backup",
                        description: "Automated daily backups",
                        icon: Cloud
                    }
                ]
            }
        ],
        cta: {
            title: "Custom Solutions",
            description: "Need something specific? Our team can create a custom solution for you"
        }
    },
    resources: {
        columns: [
            {
                title: "Learning",
                items: [
                    {
                        title: "Documentation",
                        description: "Comprehensive guides and tutorials",
                        icon: FileText
                    },
                    {
                        title: "Video Tutorials",
                        description: "Step-by-step video guides",
                        icon: Video
                    }
                ]
            },
            {
                title: "Support",
                items: [
                    {
                        title: "Help Center",
                        description: "Find answers to common questions",
                        icon: HelpCircle
                    },
                    {
                        title: "Community Forum",
                        description: "Connect with other users",
                        icon: Users
                    }
                ]
            }
        ],
        cta: {
            title: "Need Help?",
            description: "Our support team is available 24/7 to assist you with any questions"
        }
    }
};

export default function  Navbar()  {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (dropdown: string) => {
        // Clear any pending timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        // Set a delay before closing the dropdown
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150); // 150ms delay
    };

    return (
        <>
          <div className="flex flex-col items-center w-full ">
              {/* Promotional Banner */}
              <div className="w-full bg-black text-white text-center py-3 md:py-5 px-4 text-xs md:text-sm ">
                  <p className="container m-auto">
                      It's Black Friday! Try{" "}
                      <a href="/hosting" className="underline hover:text-gray-300">
                          Adlef Managed WordPress Hosting
                      </a>{" "}
                      for just $1
                  </p>
              </div>

              {/* Utility Bar - Hidden on mobile */}
              <div className="w-full bg-gray-100 border-b border-gray-200 hidden md:block">
                  <div className="flex justify-between items-center px-4 lg:px-12 py-4 text-sm container m-auto">
                      {/* Social Media Icons */}
                      <div className="flex gap-4 items-center">
                          <a href="/hosting" className="hover:text-gray-600 transition-colors">
                              <Facebook size={18} />
                          </a>
                          <a href="/hosting" className="hover:text-gray-600 transition-colors">
                              <Linkedin size={18} />
                          </a>
                          <a href="/hosting" className="hover:text-gray-600 transition-colors">
                              <Instagram size={18} />
                          </a>
                          <a href="/hosting" className="hover:text-gray-600 transition-colors">
                              <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="inline-block"
                              >
                                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                              </svg>
                          </a>
                      </div>

                      {/* Country Selector and Phone */}
                      <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600">
                              <span className="text-lg">🇺🇸</span>
                              <span>US</span>
                              <ChevronDown size={14} />
                          </div>
                          <div className="h-4 w-px bg-gray-300"></div>
                          <a href="tel:+17342224678" className="flex items-center gap-2 hover:text-gray-600">
                              <Phone size={16} />
                              <span>+1 (734) 222-4678</span>
                          </a>
                      </div>
                  </div>
              </div>

              {/* Main Navbar */}
              <div className="w-full relative">
                  <ul className="flex justify-between items-center flex-wrap w-full p-4 px-4 lg:px-12 container m-auto">
                      <li className="log flex justify-center items-center">
                          <Image src={"/assets/images/adlef-logo.png"} width={160} height={48} alt="Adlef - Fast. Reliable. Secure Hosting." className="h-8 md:h-10 w-auto" />
                      </li>

                      {/* Desktop Navigation */}
                      <li className={"links hidden lg:block"}>
                          <ul className="flex gap-6">
                              <li 
                                  className="cursor-pointer relative py-2 hover:text-gray-600 transition-colors"
                                  onMouseEnter={() => handleMouseEnter('hosting')}
                                  onMouseLeave={handleMouseLeave}
                              >
                                  Hosting
                              </li>
                              <li 
                                  className="flex justify-center items-center gap-1 cursor-pointer relative py-2 hover:text-gray-600 transition-colors"
                                  onMouseEnter={() => handleMouseEnter('wordpress')}
                                  onMouseLeave={handleMouseLeave}
                              >
                                  WordPress <span className="scale-75"><BadgeNew/></span>
                              </li>
                              <li 
                                  className="cursor-pointer relative py-2 hover:text-gray-600 transition-colors"
                                  onMouseEnter={() => handleMouseEnter('services')}
                                  onMouseLeave={handleMouseLeave}
                              >
                                  Services
                              </li>
                              <li 
                                  className="cursor-pointer relative py-2 hover:text-gray-600 transition-colors"
                                  onMouseEnter={() => handleMouseEnter('resources')}
                                  onMouseLeave={handleMouseLeave}
                              >
                                  Resources
                              </li>
                          </ul>
                      </li>

                      {/* Desktop Actions */}
                      <li className="action hidden lg:flex gap-6" >
                          <ShoppingCart className="cursor-pointer hover:text-gray-600 transition-colors" />
                          <CircleUser className="cursor-pointer hover:text-gray-600 transition-colors" />
                      </li>

                      {/* Mobile Menu Button */}
                      <li className="lg:hidden">
                          <button 
                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              aria-label="Toggle menu"
                          >
                              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                          </button>
                      </li>
                  </ul>

                  {/* Mobile Menu */}
                  {mobileMenuOpen && (
                      <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-200 z-50">
                          <div className="p-6 space-y-4">
                              <a href="/hosting" className="block py-3 text-lg hover:text-gray-600 transition-colors border-b">
                                  Hosting
                              </a>
                              <a href="/hosting" className="flex items-center gap-2 py-3 text-lg hover:text-gray-600 transition-colors border-b">
                                  WordPress <span className="scale-75"><BadgeNew/></span>
                              </a>
                              <a href="/hosting" className="block py-3 text-lg hover:text-gray-600 transition-colors border-b">
                                  Services
                              </a>
                              <a href="/hosting" className="block py-3 text-lg hover:text-gray-600 transition-colors border-b">
                                  Resources
                              </a>
                              <div className="flex gap-6 pt-4">
                                  <ShoppingCart className="cursor-pointer hover:text-gray-600 transition-colors" />
                                  <CircleUser className="cursor-pointer hover:text-gray-600 transition-colors" />
                              </div>
                          </div>
                      </div>
                  )}

                  {/* Dropdown Menu - Desktop Only */}
                  {activeDropdown && (
                      <div 
                          className="hidden lg:block absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-200 z-50 container m-auto"
                          onMouseEnter={() => handleMouseEnter(activeDropdown)}
                          onMouseLeave={handleMouseLeave}
                      >
                          <div className="px-4 lg:px-12 py-8">
                              <div className="grid grid-cols-4 gap-6">
                                  {/* Hosting Categories Columns */}
                                  {dropdownContent[activeDropdown as keyof typeof dropdownContent].columns.map((column, idx) => (
                                      <div key={idx} className="space-y-4">
                                          <h3 className="font-bold text-gray-800 text-sm mb-3">{column.title}</h3>
                                          <div className="space-y-3">
                                              {column.items.map((item, itemIdx) => {
                                                  const IconComponent = item.icon;
                                                  return (
                                                      <a 
                                                          key={itemIdx}
                                                          href="/hosting" 
                                                          className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-200 transition-colors group"
                                                      >
                                                          <div className="flex items-start gap-3">
                                                              {/* Icon with black background */}
                                                              <div className="bg-black rounded-lg p-2.5 flex-shrink-0">
                                                                  <IconComponent size={20} className="text-white" />
                                                              </div>
                                                              {/* Content */}
                                                              <div className="flex-1 min-w-0">
                                                                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                                                                      {item.title}
                                                                  </h4>
                                                                  <p className="text-xs text-gray-500 leading-relaxed">
                                                                      {item.description}
                                                                  </p>
                                                              </div>
                                                              {/* Arrow icon */}
                                                              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-gray-600 flex-shrink-0 mt-1" />
                                                          </div>
                                                      </a>
                                                  );
                                              })}
                                          </div>
                                      </div>
                                  ))}

                                  {/* Call to Action Panel */}
                                  <div className="bg-emerald-800 rounded-lg p-6 text-white flex flex-col justify-between relative overflow-hidden">
                                      <div>
                                          <h3 className="font-bold text-lg mb-3 leading-tight">
                                              {dropdownContent[activeDropdown as keyof typeof dropdownContent].cta.title}
                                          </h3>
                                          <p className="text-sm text-emerald-100 leading-relaxed">
                                              {dropdownContent[activeDropdown as keyof typeof dropdownContent].cta.description}
                                          </p>
                                      </div>
                                      <div className="flex justify-end mt-4">
                                          <ArrowUpRight size={24} className="text-white" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </div>
        </>
    )
}