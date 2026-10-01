'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      title: 'Commercial Buildings',
      image: '/assets/images/skyscraper.png',
      heightClass: 'h-80 lg:h-[380px]', // Tall masonry height
    },
    {
      title: 'Airports & Terminals',
      image: '/assets/images/core_cutting.png',
      heightClass: 'h-64 lg:h-[280px]',
    },
    {
      title: 'Metro Projects',
      image: '/assets/images/hero_fasteners.png',
      heightClass: 'h-72 lg:h-[340px]',
    },
    {
      title: 'Warehouses & Logistics',
      image: '/assets/images/chemical_epoxy.png',
      heightClass: 'h-64 lg:h-[290px]',
    },
    {
      title: 'Factories & Industrial Plants',
      image: '/assets/images/power_drill.png',
      heightClass: 'h-80 lg:h-[360px]',
    },
    {
      title: 'Residential Towers',
      image: '/assets/images/engineer_worker.png',
      heightClass: 'h-72 lg:h-[310px]',
    },
  ];

  return (
    <section className="py-20 bg-white text-[#111111] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Sectors & Applications"
          title="Industries We Serve Across Asia Pacific"
          subtitle="Engineered fastening systems trusted in critical commercial skyscrapers, rapid transit metro networks, airports, and heavy industrial plants."
        />

        {/* Pinterest-Style Masonry Grid: 3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-10">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-[#F8FAF8] border border-[#E5E7EB]"
            >
              <div className={`relative w-full ${ind.heightClass}`}>
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Small Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-opacity duration-300" />

                {/* Industry Name Overlay at Bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="w-6 h-0.5 bg-[#E3261E] block mb-2 group-hover:w-10 transition-all duration-300" />
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {ind.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
