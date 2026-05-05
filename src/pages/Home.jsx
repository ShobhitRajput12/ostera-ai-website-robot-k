import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundCanvas from '../components/BackgroundCanvas';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BentoGrid from '../components/BentoGrid';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-white selection:bg-primary/30 font-body relative">
      <BackgroundCanvas />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <BentoGrid />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
