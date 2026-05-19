import React from 'react';
import Image from 'next/image';

const HostingServices = () => {
  const services = [
    {
      id: 1,
      image: '/assets/images/vps-hosting.png',
      title: 'VPS Hosting',
      description: 'Need more power and flexibility? VPS Hosting gives you dedicated resources, root access and the freedom to handle high-traffic sites or custom setups.',
      bgGradient: 'from-lime-100 via-yellow-50 to-lime-50',
    },
    {
      id: 2,
      image: '/assets/images/managed-vps-hosting.png',
      title: 'Managed VPS Hosting',
      description: 'Need more power but don\'t want to manage everything yourself? Managed VPS hosting gives you dedicated resources and flexibility.',
      bgGradient: 'from-emerald-200 via-teal-100 to-emerald-100',
    },
    {
      id: 3,
      image: '/assets/images/managed-hosting-wordpress.png',
      title: 'Managed Hosting for WordPress',
      description: 'Get all the benefits of our optimized WordPress hosting, plus more hands-on management tools.',
      bgGradient: 'from-pink-100 via-yellow-50 to-lime-100',
    },
    {
      id: 4,
      image: '/assets/images/hosting-for-wordpress.png',
      title: 'Hosting for WordPress',
      description: 'We built our WordPress hosting on high-performance infrastructure to deliver exactly that. It\'s speed you can feel, and uptime you can count on.',
      bgGradient: 'from-emerald-200 via-teal-100 to-emerald-100',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-start mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-3 md:mb-4 max-w-lg">
            Website hosting built for success
          </h2>
          <p className="text-base md:text-lg text-black max-w-xl">
            The Adlef hosting services you need to build a fast and successful website. 
            Get started with web hosting in just minutes.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl overflow-hidden"
            >
              {/* Image Container with Fixed Height */}
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

              {/* Content Section */}
              <div className="py-3 px-2 flex flex-col min-h-[240px] md:min-h-[260px] lg:min-h-[280px]">
                <h3 className="text-lg md:text-xl text-black mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-black mb-4 md:mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Read More Button */}
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

export default HostingServices;

