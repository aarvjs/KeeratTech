'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      title: 'Commercial Skyscrapers',
      image: '/assets/images/india_construction_highrise.png',
      heightClass: 'h-80 lg:h-[380px]',
    },
    {
      title: 'Airports and Terminals',
      image: '/assets/images/india_airport_terminal.png',
      heightClass: 'h-64 lg:h-[280px]',
    },
    {
      title: 'Metro Rail Networks',
      image: '/assets/images/kanpur_metro.png',
      heightClass: 'h-72 lg:h-[340px]',
    },
    {
      title: 'Warehouses and Logistics Hubs',
      image: '/assets/images/india_industrial_plant.png',
      heightClass: 'h-64 lg:h-[290px]',
    },
    {
      title: 'Automotive and Heavy Industry',
      image: '/assets/images/eicher_motors_factory.png',
      heightClass: 'h-80 lg:h-[360px]',
    },
    {
      title: 'Infrastructure and EPC Projects',
      image: '/assets/images/india_metro_construction.png',
      heightClass: 'h-72 lg:h-[310px]',
    },
  ];

  return (
    <section className="py-20 bg-white text-[#111111] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Sectors and Applications"
          title="Industries We Serve Across Pan India"
          subtitle="Engineered fastening systems trusted in critical commercial skyscrapers, rapid transit metro networks, airports, and heavy industrial plants - serving clients Pan India."
        />

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="w-6 h-0.5 bg-[#0B8F4D] block mb-2 group-hover:w-10 transition-all duration-300" />
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