'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center bg-[#111111] text-white overflow-hidden pt-24">
      
      {/* 1. FULLSCREEN BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-95"
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 2. SUBTLE LIGHT GRADIENT OVERLAY (20-25% Opacity max - Video Scene Clearly Visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 z-[1]" />

      {/* 3. HERO MAIN CONTENT (Vertically Centered with Spacing below Navbar) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-6 text-left">
          
          {/* Short Glass Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider"
          >
            <ShieldCheck className="w-4 h-4 text-[#0B8F4D]" />
            ETA Option 1 & ISO Certified Fasteners
          </motion.div>

          {/* Clean Powerful Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Building the Future with <br />
            <span className="text-[#0B8F4D]">Industrial Strength</span>
          </motion.h1>

          {/* Short Paragraph (2-3 lines maximum) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl"
          >
            Keerat Electech delivers ETA Option 1 certified wedge anchors, pure epoxy injection mortars, power tools, and heavy structural fixings for major infrastructure.
          </motion.p>

          {/* 2 CTA Buttons with Liquid Water Fill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <Button
              href="/products"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Products
            </Button>

            <Button
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Contact Us
            </Button>
          </motion.div>

        </div>
      </div>

      {/* MINIMAL MOUSE SCROLL INDICATOR AT BOTTOM */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <div className="w-5 h-8 border-2 border-white/60 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#0B8F4D] rounded-full"
          />
        </div>
      </div>

    </section>
  );
};
