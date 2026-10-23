'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Wrench } from 'lucide-react';
import { SERVICES } from '@/constants/data';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { InquiryModal } from '@/components/ui/InquiryModal';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="w-full bg-white min-h-screen text-[#111111] pb-24 font-sans">
      {/* FULL-WIDTH HERO WITH BACKGROUND IMAGE EXTENDING BEHIND TRANSPARENT NAVBAR */}
      <ServicesHero />

      {/* Alternating Detailed Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="relative h-[380px] w-full rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F8FAF8] shadow-xs group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-[#111111] text-xs font-bold px-3.5 py-1 rounded-full border border-[#E5E7EB] shadow-xs">
                      Phase 0{idx + 1} Service
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B8F4D]/10 text-[#0B8F4D] text-xs font-bold uppercase">
                    <Wrench className="w-3.5 h-3.5" /> Turnkey Contracting
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-[#666666] text-sm leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#666666]">Key Capabilities:</h4>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#111111] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0B8F4D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Process Steps */}
                  <div className="bg-[#F8FAF8] p-4 rounded-xl border border-[#E5E7EB] mt-3 space-y-2">
                    <span className="text-xs font-bold text-[#666666] uppercase">Workflow Execution Process:</span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#111111]">
                      {service.processSteps.map((step, sIdx) => (
                        <div key={sIdx} className="p-2 bg-white rounded-lg border border-[#E5E7EB]">
                          <strong className="text-[#111111] block">{sIdx + 1}. {step.title}</strong>
                          <span className="text-[11px] text-[#666666] line-clamp-1 font-normal">{step.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      onClick={() => setSelectedService(service.title)}
                      variant="primary"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Book Technical Site Inspection
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Process Standards */}
      <section className="py-20 bg-[#F8FAF8] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Quality Protocol"
            title="Our 4-Step Engineering Quality Assurance"
            subtitle="Ensuring 100% compliance with EOTA guidelines, NABL test procedures, and jobsite safety norms."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {[
              { num: '01', title: 'Site Inspection & Scanning', desc: 'Ground penetrating radar (GPR) scan to locate existing rebar and conduit lines.' },
              { num: '02', title: 'Laser Alignment', desc: 'Precision digital layout setting to match structural drawing coordinates.' },
              { num: '03', title: 'Execution & Dosing', desc: 'Dust-free coring and calibrated torque or epoxy dosing.' },
              { num: '04', title: 'Proof Pull Test & Certify', desc: 'Hydraulic tension load test with official NABL certified test report.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs relative">
                <span className="text-2xl font-black text-[#0B8F4D] block mb-2">{step.num}</span>
                <h4 className="text-base font-bold text-[#111111] mb-1.5">{step.title}</h4>
                <p className="text-xs text-[#666666] leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal Popup */}
      <InquiryModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        productName={selectedService || undefined}
      />
    </main>
  );
}
