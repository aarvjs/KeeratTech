'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Button } from '@/components/ui/Button';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAF8] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Realistic Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[450px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-white">
              <Image
                src="/assets/images/engineer_worker.png"
                alt="Keerat Electech Site Engineering"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white bg-white/95 backdrop-blur-md p-5 rounded-xl border border-[#E5E7EB] text-[#111111] shadow-md">
                <span className="text-xs font-bold text-[#0B8F4D] uppercase tracking-wider">Engineering Compliance</span>
                <h4 className="text-base font-bold text-[#111111] mt-0.5">Heavy Structural Engineering Approved</h4>
                <p className="text-xs text-[#666666] mt-1">Certified for cracked concrete, R120 fire resistance, and C1/C2 seismic loading.</p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 bg-white text-[#111111] p-4 rounded-xl shadow-lg border border-[#E5E7EB]">
              <div className="p-2 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">NABL Accredited</div>
                <div className="text-xs font-extrabold text-[#111111]">In-House Test Laboratory</div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              badge="About Keerat Electech"
              title="10+ Years of Engineering Excellence in Structural Fixings"
              subtitle="We deliver high-load chemical injection mortars, heavy wedge anchors, power tools, and specialized diamond coring services for major EPC infrastructure projects."
            />

            <div className="space-y-3">
              {[
                'Full compliance with EOTA EAD 330232 & 330087 structural codes',
                'In-house engineering team supporting 3D BIM & Revit design',
                'NABL certified hydraulic proof pull testing up to 500 kN on site',
                '24-hour turnaround for emergency site deliveries across 25+ cities',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-md shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-[#111111]">{point}</span>
                </div>
              ))}
            </div>

            {/* 4 Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E7EB]">
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] text-center shadow-xs">
                <div className="text-2xl font-black text-[#0B8F4D]">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="text-[11px] font-bold text-[#666666] uppercase mt-0.5">Years Experience</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] text-center shadow-xs">
                <div className="text-2xl font-black text-[#111111]">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-[11px] font-bold text-[#666666] uppercase mt-0.5">Products</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] text-center shadow-xs">
                <div className="text-2xl font-black text-[#0B8F4D]">
                  <AnimatedCounter end={2500} suffix="+" />
                </div>
                <div className="text-[11px] font-bold text-[#666666] uppercase mt-0.5">Clients</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] text-center shadow-xs">
                <div className="text-2xl font-black text-[#111111]">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-[11px] font-bold text-[#666666] uppercase mt-0.5">Cities</div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Read Company Profile
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
