import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small teams.',
    priceMonthly: 0,
    priceYearly: 0,
    features: ['10k API requests/mo', 'Basic support', 'Standard models', '1 Team member'],
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For growing businesses and startups.',
    priceMonthly: 49,
    priceYearly: 39,
    features: ['500k API requests/mo', 'Priority support', 'Advanced models (GPT-4)', 'Unlimited team members', 'Custom domains'],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large scale deployments.',
    priceMonthly: 299,
    priceYearly: 249,
    features: ['Unlimited API requests', '24/7 Phone support', 'Fine-tuning access', 'Dedicated success manager', 'SOC2 Compliance'],
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("text-sm", !isYearly ? "text-white font-medium" : "text-gray-400")}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 rounded-full bg-gray-800 p-1 relative transition-colors border border-gray-700"
            >
              <motion.div 
                layout
                className="w-5 h-5 rounded-full bg-primary"
                initial={false}
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn("text-sm", isYearly ? "text-white font-medium" : "text-gray-400")}>
              Yearly <span className="text-primary text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass-card p-8 flex flex-col relative",
                plan.popular ? "border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-105 z-10" : "border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  ${isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="text-gray-400">/mo</span>
              </div>

              <button className={cn(
                "w-full py-3 rounded-lg font-medium transition-colors mb-8",
                plan.popular 
                  ? "bg-primary hover:bg-primary/90 text-white" 
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              )}>
                Get Started
              </button>

              <div className="flex flex-col gap-4 mt-auto">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
