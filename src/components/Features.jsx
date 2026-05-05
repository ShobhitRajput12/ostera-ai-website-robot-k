import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe, Cpu, Layers } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast AI',
    description: 'Process millions of data points in milliseconds with our optimized infrastructure.',
    icon: Zap,
    color: 'text-yellow-400',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and SOC2 compliance to keep your data safe.',
    icon: Shield,
    color: 'text-green-400',
  },
  {
    title: 'Advanced Analytics',
    description: 'Deep insights and predictive modeling to drive your business forward.',
    icon: BarChart3,
    color: 'text-primary',
  },
  {
    title: 'Global Edge Network',
    description: 'Deploy your AI agents to the edge for zero-latency responses worldwide.',
    icon: Globe,
    color: 'text-accent',
  },
  {
    title: 'Custom Models',
    description: 'Train and deploy fine-tuned models specific to your industry needs.',
    icon: Cpu,
    color: 'text-secondary',
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your existing tools through our extensive API ecosystem.',
    icon: Layers,
    color: 'text-pink-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 pt-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Supercharge your workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to build, deploy, and scale AI applications without the headache.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="glass-card p-8 group hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
