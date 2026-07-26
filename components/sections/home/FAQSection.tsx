'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/constants/data';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#F8FAF8] text-[#111111] border-t border-[#E5E7EB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Technical Engineering & Ordering Guidance"
          subtitle="Answers to common queries regarding ETA approvals, site load testing, BIM families, and ordering terms."
        />

        <div className="space-y-3 mt-10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0B8F4D] shadow-xs'
                    : 'border-[#E5E7EB] hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base text-[#111111] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#0B8F4D]' : 'text-[#666666]'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#666666] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0B8F4D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-[#E5E7EB]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
