import React from "react";
import Image from "next/image";

const WordpressServices = () => {
  const services = [
    {
      id: 1,
      image: "/assets/images/wordpress-service-blog.png",
      title: "WordPress for Blogs",
      description:
        "Perfect for creators, bloggers, and personal brands. Fast LiteSpeed stack, free SSL, and one-click WordPress install so you can publish in minutes.",
    },
    {
      id: 2,
      image: "/assets/images/wordpress-service-woocommerce.png",
      title: "WooCommerce Hosting",
      description:
        "Sell online with confidence. Optimized PHP, NVMe storage, and caching tuned for WooCommerce carts, checkout, and product catalogs.",
    },
    {
      id: 3,
      image: "/assets/images/wordpress-service-agency.png",
      title: "Agency & Multi-site",
      description:
        "Host multiple client sites from one account. Staging clones, WP-CLI, and resource isolation keep every project fast and secure.",
    },
    {
      id: 4,
      image: "/assets/images/wordpress-service-managed.png",
      title: "Managed WordPress",
      description:
        "We handle updates, security hardening, and performance tuning. You focus on content and growth while our team manages the stack.",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-3 md:mb-4 max-w-lg">
            WordPress hosting built for every stage
          </h2>
          <p className="text-base md:text-lg text-black max-w-xl">
            From your first blog post to a high-traffic WooCommerce store, Adlef
            gives you the speed, tools, and support WordPress deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden">
              <div className="relative h-48 md:h-56 lg:h-48">
                <div className="relative w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover lg:object-contain"
                  />
                </div>
              </div>

              <div className="py-3 px-2 flex flex-col min-h-[240px] md:min-h-[260px] lg:min-h-[280px]">
                <h3 className="text-lg md:text-xl text-black mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-black mb-4 md:mb-6 flex-grow">
                  {service.description}
                </p>

                <div>
                  <button className="inline bg-gradient-to-r to-lime-400 from-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-teal-950 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordpressServices;
