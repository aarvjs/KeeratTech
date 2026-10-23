import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark'; // Supported for back-compat, defaults to clean bright light
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B8F4D]/10 text-[#0B8F4D] border border-[#0B8F4D]/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B8F4D]" />
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-base text-[#666666] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-16 bg-[#0B8F4D] rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
};
