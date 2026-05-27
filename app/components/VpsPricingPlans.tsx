import React from 'react';
import { Check } from 'lucide-react';
import PurchasePlanButton from '@/app/components/PurchasePlanButton';

export default function VpsPricingPlans() {
  const topFeatures = [
    "Free VPS migration",
    "30-day money-back guarantee",
    "DDoS protection included",
    "99.9% uptime SLA",
    "Full root access on every plan"
  ];

  const plans = [
    {
      name: "VPS Starter",
      description: "Ideal for developers, staging environments, and small applications.",
      wasPrice: "$39.99",
      discount: "75% OFF",
      currentPrice: "$9.99",
      term: "For a 1-year term. Pay $119.88 today, then $479.88 on renewal.",
      buttonText: "Buy Now",
      isPopular: false,
      features: [
        "2 vCPU cores",
        "4 GB RAM",
        "80 GB NVMe SSD",
        "4 TB bandwidth",
        "1 dedicated IPv4",
        "Full root access",
        "Choice of Linux OS",
        "Weekly automated backups",
        "DDoS protection",
        "Free SSL (Let's Encrypt)",
        "Snapshot support",
        "24/7/365 support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    },
    {
      name: "VPS Business",
      description: "Balanced power for growing apps, eCommerce, and production workloads.",
      wasPrice: "$59.99",
      discount: "72% OFF",
      currentPrice: "$16.99",
      term: "For a 1-year term. Pay $203.88 today, then $719.88 on renewal.",
      buttonText: "Buy Now",
      isPopular: true,
      features: [
        "4 vCPU cores",
        "8 GB RAM",
        "160 GB NVMe SSD",
        "6 TB bandwidth",
        "1 dedicated IPv4",
        "Full root access",
        "cPanel or CyberPanel optional",
        "Daily automated backups",
        "DDoS protection",
        "Free SSL (Let's Encrypt)",
        "Snapshot support",
        "24/7/365 priority support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    },
    {
      name: "VPS Pro",
      description: "High-performance VPS for APIs, SaaS, and resource-intensive sites.",
      wasPrice: "$89.99",
      discount: "68% OFF",
      currentPrice: "$28.99",
      term: "For a 1-year term. Pay $347.88 today, then $1,079.88 on renewal.",
      buttonText: "Get started",
      isPopular: false,
      features: [
        "6 vCPU cores",
        "16 GB RAM",
        "320 GB NVMe SSD",
        "8 TB bandwidth",
        "2 dedicated IPv4",
        "Full root access",
        "cPanel or CyberPanel optional",
        "Daily automated backups",
        "Advanced DDoS protection",
        "Free SSL (Let's Encrypt)",
        "Snapshot & restore",
        "24/7/365 priority support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    },
    {
      name: "VPS Enterprise",
      description: "Maximum resources for enterprise apps, databases, and multi-site hosting.",
      wasPrice: "$129.99",
      discount: "65% OFF",
      currentPrice: "$44.99",
      term: "For a 1-year term. Pay $539.88 today, then $1,559.88 on renewal.",
      buttonText: "Get started",
      isPopular: false,
      features: [
        "8 vCPU cores",
        "32 GB RAM",
        "640 GB NVMe SSD",
        "12 TB bandwidth",
        "3 dedicated IPv4",
        "Full root access",
        "Managed options available",
        "Daily automated backups",
        "Advanced DDoS protection",
        "Free SSL (Let's Encrypt)",
        "Snapshot & restore",
        "24/7/365 dedicated support",
        "Global data centers",
        "30-day money-back guarantee**"
      ]
    }
  ];

  return (
    <section id="vps-pricing" className="py-12 md:py-16 lg:py-24 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Choose your VPS plan
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-10 leading-relaxed">
            Every VPS includes dedicated resources on AMD EPYC with NVMe storage,
            full root access, DDoS protection, and snapshots. Pick the plan that
            matches your workload — upgrade anytime as you grow.
          </p>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col ${
                plan.isPopular ? 'border-[3px] border-[#1A5C3B] relative' : 'border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-[#1A5C3B] text-white text-center py-2 px-4">
                  <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{plan.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {plan.description}
                </p>

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

                <PurchasePlanButton className="w-full bg-[#1A5C3B] hover:bg-[#154a2f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 mb-4 md:mb-6 text-sm md:text-base">
                  {plan.buttonText}
                </PurchasePlanButton>

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
