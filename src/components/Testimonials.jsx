import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Ostera AI completely transformed our development speed. We shipped our MVP in 2 weeks instead of 2 months.",
    name: "Sarah Jenkins",
    role: "CTO, NextGen Start",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The voice synthesis API is indistinguishable from human voices. It's the best on the market right now.",
    name: "David Chen",
    role: "Product Lead, AudioTech",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Integrating the AI chat took literally 5 minutes. The enterprise security features made it an easy sell to our board.",
    name: "Emily Rodriguez",
    role: "VP Engineering, CloudScale",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Loved by builders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col"
            >
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-8 italic flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border border-gray-700" />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
