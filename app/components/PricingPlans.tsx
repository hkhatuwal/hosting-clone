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
    <section className="py-16 md:py-24 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose your plan
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            No matter where you start, every plan delivers: NVMe storage, LiteSpeed caching, 
            unlimited MariaDB databases, advanced malware protection, and free SSL. Compare our 
            plans below to see which setup fits your site best.
          </p>

          {/* Top Feature Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12">
            {topFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-sm md:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col ${
                plan.isPopular ? 'border-[3px] border-[#1A5C3B] relative' : 'border border-gray-200'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="bg-[#1A5C3B] text-white text-center py-2 px-4">
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Plan Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Pricing Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-400 line-through">
                      Was {plan.wasPrice}
                    </span>
                    <span 
                      className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-[-2deg]"
                    >
                      {plan.discount}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.currentPrice}
                    </span>
                    <span className="text-lg text-gray-700">/month</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {plan.term}
                  </p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#1A5C3B] hover:bg-[#154a2f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-6">
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">
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

