'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section className="py-20 bg-white text-[#111111] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Client Endorsements"
          title="Trusted by Chief Engineers & EPC Project Managers"
          subtitle="Discover why top construction conglomerates rely on Keerat Electech for critical anchoring and structural fixes."
        />

        <div className="max-w-3xl mx-auto relative mt-10">
          {/* Card */}
          <div className="bg-[#F8FAF8] rounded-2xl p-8 sm:p-10 text-[#111111] border border-[#E5E7EB] shadow-xs relative">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#E3261E]/10 pointer-events-none" />

            <div className="flex items-center gap-1 mb-5">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>

            <p className="text-base sm:text-xl font-medium leading-relaxed italic text-[#111111] mb-6">
              &quot;{activeTestimonial.content}&quot;
            </p>

            <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-5">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E3261E]">
                  <Image
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.clientName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">{activeTestimonial.clientName}</h4>
                  <p className="text-xs text-[#E3261E] font-bold">{activeTestimonial.role}</p>
                  <p className="text-xs text-[#666666]">{activeTestimonial.company}</p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 bg-white border border-[#E5E7EB] text-[#111111] hover:border-[#E3261E] hover:text-[#E3261E] rounded-full transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 bg-white border border-[#E5E7EB] text-[#111111] hover:border-[#E3261E] hover:text-[#E3261E] rounded-full transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
