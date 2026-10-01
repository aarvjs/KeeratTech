'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/constants/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ProductCategoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Core Categories"
          title="Engineered Fixing & Fastening Systems"
          subtitle="Explore our complete technical product catalog built for high-load structural steel, cracked concrete, and seismic installations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#E3261E] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full border border-slate-200">
                  {category.itemCount}+ SKUs
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E3261E] transition-colors duration-200 flex items-center justify-between">
                    {category.name}
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#E3261E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#E3261E]">
                  <span>View Category Products</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
