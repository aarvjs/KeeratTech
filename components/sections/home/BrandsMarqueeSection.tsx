'use client';

import React from 'react';
import Image from 'next/image';
import { BRAND_PARTNERS } from '@/constants/data';

export const BrandsMarqueeSection: React.FC = () => {
  const brandsList = [...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section id="brands" className="py-8 sm:py-10 bg-white border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#666666]">
          Enterprise & Major Infrastructure Network
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Blur Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Strip */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {brandsList.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2.5 bg-[#F8FAF8] rounded-xl border border-[#E5E7EB] hover:border-[#0B8F4D] hover:shadow-xs transition-all duration-200 shrink-0 group"
            >
              <div className="relative w-12 h-9 sm:w-14 sm:h-10 bg-white rounded-lg border border-[#E5E7EB] flex items-center justify-center p-1 overflow-hidden shrink-0">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="60px"
                  unoptimized
                  className="object-contain p-1"
                />
              </div>
              <div className="min-w-0">
                <span className="text-sm font-extrabold text-[#111111] tracking-wide block font-sans whitespace-nowrap group-hover:text-[#0B8F4D] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#666666] block font-sans font-medium whitespace-nowrap">
                  {brand.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
