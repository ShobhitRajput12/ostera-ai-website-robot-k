import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    title: '1. Input Data',
    description: 'Connect your existing data sources or upload files securely.',
    icon: Database,
  },
  {
    title: '2. Process with AI',
    description: 'Our proprietary models analyze and extract valuable insights.',
    icon: Cpu,
  },
  {
    title: '3. Output & Action',
    description: 'Get actionable results integrated directly into your workflow.',
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative z-10 bg-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            How it works
          </motion.h2>
          <p className="text-gray-400 text-lg">
            A seamless integration from data to deployed models.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mb-6 relative z-10 border-primary/30 group hover:border-primary transition-colors">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-colors"></div>
                  <step.icon className="w-10 h-10 text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
