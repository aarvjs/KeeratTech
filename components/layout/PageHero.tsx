'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; href: string }[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <section className="relative pt-32 pb-16 bg-[#F8FAF8] text-[#111111] border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-5">
          <Link href="/" className="hover:text-[#0B8F4D] transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link
                href={crumb.href}
                className={idx === breadcrumbs.length - 1 ? 'text-[#0B8F4D] font-bold' : 'hover:text-[#0B8F4D] transition-colors'}
              >
                {crumb.name}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B8F4D]/10 text-[#0B8F4D] border border-[#0B8F4D]/20 mb-4">
            {badge}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            {title}
          </h1>

          <p className="mt-3 text-base text-[#666666] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
