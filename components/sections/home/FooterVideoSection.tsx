'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const FooterVideoSection: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-[#111111] text-white overflow-hidden my-12 border-y border-[#E5E7EB]">
      
      {/* 1. CINEMATIC VIDEO BACKGROUND (User Video: 6957872-uhd_4096_2160_25fps.mp4) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-95"
      >
        <source src="/assets/videos/footer-video.mp4" type="video/mp4" />
      </video>

      {/* 2. LIGHT OVERLAY (Video remains clearly visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/45 z-[1]" />

      {/* 3. CENTERED MINIMAL LUXURY CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-extrabold uppercase tracking-wider"
        >
          <ShieldCheck className="w-4 h-4 text-[#E3261E]" />
          Keerat Electech Site Engineering
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Built for Megastructures. <br />
          <span className="text-[#E3261E]">Certified for Safety.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          Partnering with India&apos;s largest EPC contractors for high-load anchoring, diamond core drilling, and site load proof testing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-2 flex justify-center"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Request Commercial Quote
          </Button>
        </motion.div>
      </div>

    </section>
  );
};
