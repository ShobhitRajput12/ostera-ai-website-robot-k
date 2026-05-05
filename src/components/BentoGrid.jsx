import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, MessageSquare, Code, Mic } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            The ultimate AI toolkit
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Everything you need to build next-generation applications in one unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Item 1: Large Col */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-card p-8 group relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary relative z-10">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 relative z-10">AI Image Generation</h3>
            <p className="text-gray-400 relative z-10 max-w-md">Create stunning, high-resolution images from text prompts in seconds. Perfect for mockups and assets.</p>
            <div className="mt-auto self-end relative z-10 w-full h-32 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
               {/* Decorative visualization */}
               <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-secondary relative z-10">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 relative z-10">Conversational AI</h3>
            <p className="text-gray-400 relative z-10">Deploy intelligent chatbots that understand context and nuance.</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 text-accent relative z-10">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 relative z-10">Code Generation</h3>
            <p className="text-gray-400 relative z-10">Accelerate development with AI-pair programming and auto-completion.</p>
          </motion.div>

          {/* Item 4: Large Col */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 glass-card p-8 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-12 w-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400 relative z-10">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 relative z-10">Voice Synthesis</h3>
            <p className="text-gray-400 relative z-10 max-w-md">Generate ultra-realistic voiceovers in 50+ languages with emotional range.</p>
             <div className="mt-6 flex items-center gap-2 relative z-10">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="w-2 bg-pink-500/50 rounded-full animate-pulse" style={{ height: `${Math.random() * 40 + 10}px`, animationDelay: `${i * 0.1}s` }}></div>
               ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
