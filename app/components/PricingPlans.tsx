import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPlans() {
  const topFeatures = [
    "Free website migration",
    "30-day money-back guarantee",
    "Advanced security & malware protection",
    "99.9% uptime SLA",
    "Free domain with select plans"
  ];

  const plans = [
    {
      name: "Starter",
      description: "Everything you need to start your online project.",
      wasPrice: "$11.99",
      discount: "83% OFF",
      currentPrice: "$1.99",
      term: "For a 1-year term. Pay $23.88 today, then $143.88 on renewal.",
      buttonText: "Buy Now",
      isPopular: false,
      features: [
        "1 website",
        "15GB disk space",
        "2GB virtual memory & 2vCPU cores",
        "10 email accounts",
        "Unlimited MariaDB databases",
        "Unlimited bandwidth",
        "LiteSpeed servers",
        "Unlimited mail space",
        "Advanced malware protection",
        "Free SSL certificate",
        "Daily backups",
        "Free migrations",
        "1 free domain*",
        "24/7/365 support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    },
    {
      name: "Plus",
      description: "Upgraded/Advanced package offering more room for growth.",
      wasPrice: "$14.99",
      discount: "87% OFF",
      currentPrice: "$1.99",
      term: "For a 1-year term. Pay $23.89 today, then $179.88 on renewal.",
      buttonText: "Buy Now",
      isPopular: true,
      features: [
        "2 websites",
        "30GB disk space",
        "3GB virtual memory & 2 vCPU cores",
        "10 email accounts",
        "Unlimited MariaDB databases",
        "Unlimited bandwidth",
        "LiteSpeed servers",
        "Unlimited mail space",
        "Advanced malware protection",
        "Free SSL certificate",
        "Daily backups",
        "Free migrations",
        "1 free domain*",
        "24/7/365 support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    },
    {
      name: "Pro",
      description: "Best for all your online endeavors, lots of space and resources to run your apps.",
      wasPrice: "$22.99",
      discount: "70% OFF",
      currentPrice: "$6.99",
      term: "For a 1-year term. Pay $83.87 today, then $275.88 on renewal.",
      buttonText: "Get started",
      isPopular: false,
      features: [
        "10 websites",
        "50GB disk space",
        "6GB virtual memory & 4 vCPU cores",
        "20 email accounts",
        "Unlimited MariaDB databases",
        "Unlimited bandwidth",
        "LiteSpeed servers",
        "Unlimited mail space",
        "Advanced malware protection",
        "Free SSL certificate",
        "Daily backups",
        "Free migrations",
        "1 free domain*",
        "24/7/365 support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    },
    {
      name: "Max",
      description: "Expert package for high performance multi-site hosting.",
      wasPrice: "$27.99",
      discount: "68% OFF",
      currentPrice: "$8.99",
      term: "For a 1-year term. Pay $107.88 today, then $335.88 on renewal.",
      buttonText: "Get started",
      isPopular: false,
      features: [
        "100 websites",
        "100GB disk space",
        "8GB virtual memory & 4 vCPU cores",
        "40 email accounts",
        "Unlimited MariaDB databases",
        "Unlimited bandwidth",
        "LiteSpeed servers",
        "Unlimited mail space",
        "Advanced malware protection",
        "Free SSL certificate",
        "Daily backups",
        "Free migrations",
        "1 free domain*",
        "24/7/365 support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Choose your plan
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-10 leading-relaxed">
            No matter where you start, every plan delivers: NVMe storage, LiteSpeed caching, 
            unlimited MariaDB databases, advanced malware protection, and free SSL. Compare our 
            plans below to see which setup fits your site best.
          </p>

          {/* Top Feature Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-3 md:gap-y-4 mb-8 md:mb-12">
            {topFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-xs md:text-sm lg:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col ${
                plan.isPopular ? 'border-[3px] border-[#1A5C3B] relative' : 'border border-gray-200'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="bg-[#1A5C3B] text-white text-center py-2 px-4">
                  <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                {/* Plan Title & Description */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{plan.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Pricing Section */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <span className="text-xs md:text-sm text-gray-400 line-through">
                      Was {plan.wasPrice}
                    </span>
                    <span 
                      className="bg-green-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full transform rotate-[-2deg]"
                    >
                      {plan.discount}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      {plan.currentPrice}
                    </span>
                    <span className="text-base md:text-lg text-gray-700">/month</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">
                    {plan.term}
                  </p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#1A5C3B] hover:bg-[#154a2f] text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 mb-4 md:mb-6 text-sm md:text-base">
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="space-y-2 md:space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

