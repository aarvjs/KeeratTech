'use client';

import React from 'react';
import { Shield, Award, Users, Truck, Clock, Headphones } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhyChooseUsSection: React.FC = () => {
  const steps = [
    {
      icon: <Award className="w-6 h-6 text-[#0B8F4D]" />,
      title: 'ETA Option 1 Certified Quality',
      desc: 'All mechanical and chemical anchors undergo rigorous testing for cracked concrete, fire exposure (R120), and C1/C2 seismic load categories.',
      year: '01',
    },
    {
      icon: <Users className="w-6 h-6 text-[#0B8F4D]" />,
      title: 'Expert Structural Engineering Team',
      desc: 'Our in-house team assists with anchor calculation software (PROFIS / AnchorDesign), 3D Revit BIM family objects, and site design validation.',
      year: '02',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#0B8F4D]" />,
      title: 'NABL Accredited On-Site Pull Testing',
      desc: 'Mobile proof testing crews deliver third-party certified load test reports up to 500 kN directly on your active jobsite.',
      year: '03',
    },
    {
      icon: <Truck className="w-6 h-6 text-[#0B8F4D]" />,
      title: 'Rapid 24-Hour Jobsite Dispatch',
      desc: 'With central warehouses across 25+ cities, we guarantee rapid turnaround to keep major EPC project schedules moving without delay.',
      year: '04',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0B8F4D]" />,
      title: '40+ Years Industry Legacy',
      desc: 'Established in 1984, our fixings have supported over 2,500 landmark infrastructure projects across Asia Pacific.',
      year: '05',
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#0B8F4D]" />,
      title: '24/7 Technical Site Support',
      desc: 'Dedicated technical engineers provide site crew safety training, tool calibration, and real-time troubleshooting.',
      year: '06',
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Industry Leaders Trust Us"
          title="The TitanFast Standard of Engineering Excellence"
          subtitle="A disciplined step-by-step commitment to safety, precision, and reliable supply chain execution."
        />

        <div className="relative mt-16">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0B8F4D] via-emerald-400 to-slate-200 -translate-x-1/2" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Content Box */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0B8F4D] hover:shadow-xl transition-all duration-300 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-[#0B8F4D]/10 rounded-xl">
                          {step.icon}
                        </div>
                        <span className="text-3xl font-black text-slate-200">
                          {step.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle Marker */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0B8F4D] text-white font-extrabold items-center justify-center shadow-lg shadow-[#0B8F4D]/30 border-4 border-white shrink-0 z-20">
                    {idx + 1}
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
