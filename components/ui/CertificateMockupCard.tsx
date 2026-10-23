'use client';

import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

interface CertificateMockupProps {
  title: string;
  subtitle: string;
  code: string;
  issuedTo: string;
  sealText: string;
  date: string;
}

export const CertificateMockupCard: React.FC<CertificateMockupProps> = ({
  title,
  subtitle,
  code,
  issuedTo,
  sealText,
  date,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-[#0B8F4D] shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between h-full">
      {/* Thin Green Border Frame */}
      <div className="border border-[#0B8F4D]/30 p-5 rounded-xl bg-white relative">
        
        {/* Top Audit Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0B8F4D] text-white flex items-center justify-center font-bold text-[10px]">
              KE
            </div>
            <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
              ISO Audit
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#0B8F4D] bg-[#0B8F4D]/10 px-2 py-0.5 rounded font-semibold">
            {code}
          </span>
        </div>

        {/* Certificate Title */}
        <div className="text-center py-2 space-y-1">
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#0B8F4D] block">
            CERTIFICATE OF COMPLIANCE
          </span>
          <h4 className="text-base font-bold text-[#111111] leading-snug">
            {title}
          </h4>
          <p className="text-[11px] text-[#666666] font-normal leading-tight">
            {subtitle}
          </p>
        </div>

        {/* Issued To */}
        <div className="my-4 pt-3 border-t border-dashed border-[#E5E7EB] text-center">
          <span className="text-[9px] uppercase text-[#666666] font-semibold block">Issued To</span>
          <span className="text-xs font-bold text-[#111111] block mt-0.5">{issuedTo}</span>
        </div>

        {/* Bottom Row: Embossed Gold Seal & Signature */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
          {/* Gold Seal Graphic */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-0.5 shadow-sm flex items-center justify-center text-slate-950 font-black text-[9px] text-center uppercase shrink-0 border border-amber-200">
              <div className="w-full h-full rounded-full border border-amber-700/30 flex items-center justify-center p-0.5 font-bold">
                {sealText}
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-[10px] font-bold text-[#0B8F4D] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#0B8F4D]" /> Verified
              </span>
            </div>
          </div>

          {/* Signature */}
          <div className="text-right">
            <div className="font-serif italic text-xs text-[#111111] font-bold">
              Shobhit Shukla
            </div>
            <span className="text-[9px] text-[#666666] block font-medium">Director of Quality</span>
            <span className="text-[9px] font-mono text-[#666666]">{date}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
