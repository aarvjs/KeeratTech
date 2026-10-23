'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Compass, Award, ShieldCheck, CheckCircle2, HeartHandshake, Lightbulb } from 'lucide-react';
import { AboutHeroCarousel } from '@/components/sections/about/AboutHeroCarousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificatesSection } from '@/components/sections/home/CertificatesSection';
import { CTABannerSection } from '@/components/sections/home/CTABannerSection';
import { TEAM_MEMBERS } from '@/constants/data';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  const milestones = [
    { year: '1984', title: 'Company Founded', desc: 'Established machine workshop producing structural bolts & threaded rods.' },
    { year: '1998', title: 'Chemical Epoxy R&D', desc: 'Pioneered pure epoxy formulation laboratory for post-installed rebar doweling.' },
    { year: '2008', title: 'ETA Option 1 Certification', desc: 'Achieved first European Technical Assessment approval for cracked concrete wedge anchors.' },
    { year: '2016', title: 'NABL Accredited Lab', desc: 'Built in-house structural testing laboratory with 500 kN hydraulic load cell rigs.' },
    { year: '2024+', title: 'Pan-Asia Expansion', desc: 'Operating across 25+ cities delivering turnkey fixings for skyscrapers, metros, and airports.' },
  ];

  const coreValues = [
    {
      title: 'Uncompromising Integrity',
      desc: 'Zero tolerance for structural defect. All products tested for extreme wind shear, R120 fire resistance, and C1/C2 seismic loading.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0B8F4D]" />,
    },
    {
      title: 'Engineering Innovation',
      desc: 'Continuous R&D in high-tensile metallurgy and low-VOC pure epoxy mortars for 100-year design life.',
      icon: <Lightbulb className="w-6 h-6 text-[#0B8F4D]" />,
    },
    {
      title: 'Client Partnership',
      desc: 'On-site technical support engineers assist contractors with Revit 3D BIM models and onsite pull load testing.',
      icon: <HeartHandshake className="w-6 h-6 text-[#0B8F4D]" />,
    },
  ];

  return (
    <main className="w-full bg-white text-[#111111] font-sans">
      {/* FULL WIDTH HERO WITH BACKGROUND IMAGE CAROUSEL BEHIND NAVBAR */}
      <AboutHeroCarousel />

      {/* Company Story */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                badge="Our Legacy"
                title="Four Decades of Engineering Excellence in Structural Fixings"
                subtitle="Founded in 1984, Keerat Electech grew from a specialized fastener forging facility into an international powerhouse for complete structural fixing solutions."
              />

              <p className="text-[#666666] text-sm leading-relaxed font-normal">
                Modern mega-structures demand fixings that resist unpredictable wind shear, seismic shocks, and severe corrosion. Our engineering philosophy centers on absolute load-bearing reliability—tested down to the micro-millimeter under EOTA and ISO directives.
              </p>

              <p className="text-[#666666] text-sm leading-relaxed font-normal">
                Whether supplying 50,000 wedge anchors for a commercial airport terminal or executing high-precision post-installed rebar injection in a metro tunnel, Keerat Electech engineers work directly alongside contractor site crews to ensure perfection.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111]">ETA Option 1</h4>
                    <p className="text-[11px] text-[#666666]">Cracked Concrete Rated</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111]">ISO 9001:2015</h4>
                    <p className="text-[11px] text-[#666666]">TÜV Certified Quality</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-white">
                <Image
                  src="/assets/images/engineer_worker.png"
                  alt="Keerat Electech Engineering"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F8FAF8] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Strategic Direction"
            title="Our Core Vision & Purpose"
            subtitle="Guiding every product line, chemical formulation, and technical site service."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-xs relative group hover:border-[#0B8F4D] transition-colors">
              <div className="w-12 h-12 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Our Corporate Vision</h3>
              <p className="text-[#666666] text-sm leading-relaxed font-normal">
                To be the undisputed Asia-Pacific reference brand in structural fasteners, chemical anchoring, and concrete drilling solutions—setting global benchmarks for safety margin performance, zero-defect manufacturing, and sustainable engineering.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-xs relative group hover:border-[#0B8F4D] transition-colors">
              <div className="w-12 h-12 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-xl flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Our Engineering Mission</h3>
              <p className="text-[#666666] text-sm leading-relaxed font-normal">
                To empower EPC contractors, consultants, and builders with certified hardware and expert on-site technical guidance that accelerates construction timelines while guaranteeing absolute structural safety for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Company Philosophy"
            title="Core Values Driving Keerat Electech"
            subtitle="The fundamental pillars behind our 40 years of continuous growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-[#F8FAF8] p-7 rounded-2xl border border-[#E5E7EB] hover:border-[#0B8F4D] transition-colors shadow-xs">
                <div className="p-3 bg-white border border-[#E5E7EB] rounded-xl inline-block mb-4">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-[#111111] mb-2">{val.title}</h4>
                <p className="text-xs text-[#666666] leading-relaxed font-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#F8FAF8] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Historical Growth"
            title="Milestones of Innovation & Achievement"
            subtitle="How we evolved over 40 years of continuous growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#0B8F4D] transition-all">
                <div className="text-2xl font-black text-[#0B8F4D] mb-1">{item.year}</div>
                <h4 className="text-sm font-bold text-[#111111] mb-1.5">{item.title}</h4>
                <p className="text-xs text-[#666666] leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Executive Leadership"
            title="Guided by Senior Structural Engineers & Industry Veterans"
            subtitle="Decades of combined experience in mechanical engineering, metallurgy, and heavy construction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-[#F8FAF8] rounded-2xl border border-[#E5E7EB] overflow-hidden group shadow-xs hover:shadow-lg transition-all flex flex-col">
                <div className="relative h-64 w-full bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B8F4D] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#111111]">{member.name}</h3>
                  <p className="text-xs font-bold text-[#0B8F4D] uppercase mt-0.5 mb-2">{member.role}</p>
                  <p className="text-xs text-[#666666] leading-relaxed font-normal">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certificates */}
      <CertificatesSection />

      {/* CTA Banner */}
      <CTABannerSection />
    </main>
  );
}
