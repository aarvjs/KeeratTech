'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Wrench } from 'lucide-react';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full h-[68vh] min-h-[500px] max-h-[620px] flex items-center justify-center bg-[#111111] text-white overflow-hidden pt-24 border-b border-[#E5E7EB]">
      
      {/* 1. FULL-WIDTH BACKGROUND CONSTRUCTION IMAGE (LIGHT & CLEARLY VISIBLE) */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 6, ease: 'linear' }}
        className="absolute inset-0 w-full h-full z-0 filter brightness-95"
      >
        <Image
          src="/assets/images/core_cutting.png"
          alt="Keerat Electech Services"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* 2. LIGHT OVERLAY (20-25% Opacity max - Background image clearly visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/20 z-[1]" />

      {/* 3. CENTERED MINIMAL CONTENT (Max width 650px - Zero Overflow / Overlap) */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-4">
        
        {/* Small Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200"
        >
          <Link href="/" className="hover:text-[#E3261E] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#E3261E] font-bold">Services</span>
        </motion.nav>

        {/* Small Glass Badge */}
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-extrabold uppercase tracking-wider"
          >
            <Wrench className="w-3.5 h-3.5 text-[#E3261E]" />
            ENGINEERING SERVICES
          </motion.span>
        </div>

        {/* Large Heading with Brand Red Highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
        >
          Turnkey Contracting & <br />
          <span className="text-[#E3261E]">Keerat Electech</span> Technical Field Support
        </motion.h1>

        {/* Short Description (STRICT 2-LINE MAXIMUM) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl mx-auto line-clamp-2"
        >
          Specialized diamond core drilling, chemical rebar doweling, and site load proof testing executed by certified engineers.
        </motion.p>

      </div>

    </section>
  );
};
