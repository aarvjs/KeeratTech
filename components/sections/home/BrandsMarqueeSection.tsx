'use client';

import React from 'react';
import { BRAND_PARTNERS } from '@/constants/data';

export const BrandsMarqueeSection: React.FC = () => {
  const brandsList = [...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section id="brands" className="py-10 bg-white border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#666666]">
          Authorized OEM Partners & Compatible Systems
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Blur Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Strip */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-14">
          {brandsList.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-[#F8FAF8] rounded-lg border border-[#E5E7EB] hover:border-[#0B8F4D] transition-colors shrink-0 group"
            >
              <div className="w-2 h-2 rounded-full bg-[#0B8F4D]" />
              <div>
                <span className="text-base font-extrabold text-[#111111] tracking-wider font-mono">
                  {brand.logoText}
                </span>
                <span className="text-[10px] text-[#666666] block font-sans font-medium">
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
