import React from 'react';
import Image from 'next/image';

const VpsServices = () => {
  const services = [
    {
      id: 1,
      image: '/assets/images/vps-service-web-hosting.png',
      title: 'Web Hosting',
      description: 'Fast shared hosting with LiteSpeed, free SSL, and one-click installs. Perfect when you need simplicity without managing a server.',
      bgGradient: 'from-lime-100 via-yellow-50 to-lime-50',
    },
    {
      id: 2,
      image: '/assets/images/vps-service-managed-vps.png',
      title: 'Managed VPS Hosting',
      description: 'Same dedicated power — we handle updates, security patches, monitoring, and backups so you can focus on your product.',
      bgGradient: 'from-emerald-200 via-teal-100 to-emerald-100',
    },
    {
      id: 3,
      image: '/assets/images/vps-service-dedicated.png',
      title: 'Dedicated Servers',
      description: 'Bare-metal performance for the most demanding workloads. Full hardware control with enterprise SLA and priority support.',
      bgGradient: 'from-pink-100 via-yellow-50 to-lime-100',
    },
    {
      id: 4,
      image: '/assets/images/vps-service-cloud.png',
      title: 'Cloud Hosting',
      description: 'Elastic resources that scale on demand. Ideal for unpredictable traffic, microservices, and modern cloud-native apps.',
      bgGradient: 'from-emerald-200 via-teal-100 to-emerald-100',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-start mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-3 md:mb-4 max-w-lg">
            VPS hosting built for control & scale
          </h2>
          <p className="text-base md:text-lg text-black max-w-xl">
            Whether you need root access today or hands-off management tomorrow,
            Adlef has the infrastructure to match your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden"
            >
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

export default VpsServices;
