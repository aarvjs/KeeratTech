'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '@/constants/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAF8] text-[#111111] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Engineering Field Services"
          title="On-Site Contracting & Technical Testing"
          subtitle="Beyond hardware supply, our certified field engineers execute diamond core cutting, deep hole drilling, pull load testing, and structural CFRP wrapping."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#0B8F4D] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#111111] text-[11px] font-bold px-3 py-1 rounded-full border border-[#E5E7EB] shadow-xs">
                    Contracting Service
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#0B8F4D] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-[#666666] text-sm mt-2.5 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Features */}
                <div className="mt-4 space-y-2 pt-4 border-t border-[#E5E7EB]">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#111111] font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B8F4D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <Link
                  href="/services"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B8F4D] hover:underline gap-1.5 transition-all"
                >
                  Explore Service Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
