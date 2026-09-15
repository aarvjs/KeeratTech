'use client';

import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/constants/data';

export const CTABannerSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8FAF8] rounded-3xl p-10 sm:p-16 border border-[#E5E7EB] shadow-sm text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B8F4D]/10 text-[#0B8F4D] border border-[#0B8F4D]/20 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-[#0B8F4D]" /> Engineering Technical Support
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] max-w-3xl mx-auto leading-tight">
            Need Heavy Fastening Solutions? <br />
            <span className="text-[#0B8F4D]">Let&apos;s Build Together.</span>
          </h2>

          <p className="mt-4 text-[#666666] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get custom anchor calculation reports, site pull testing scheduling, and bulk commercial proposals from our technical engineering team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Submit Technical RFQ
            </Button>

            <Button
              href="tel:+917235055577"
              variant="secondary"
              size="lg"
              icon={<PhoneCall className="w-5 h-5 text-[#0B8F4D]" />}
            >
              Call: {COMPANY_INFO.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
