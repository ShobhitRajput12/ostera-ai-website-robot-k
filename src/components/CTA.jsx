import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="pt-24 pb-[28rem] md:pb-[36rem] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/20 filter blur-[100px] rounded-full"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight"
          >
            Ready to build the future?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of developers and companies building the next generation of AI-powered applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Start Building Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors">
              Talk to Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
