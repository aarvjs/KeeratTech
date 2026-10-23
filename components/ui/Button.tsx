'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  icon,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-400 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group shadow-md';

  // Base background & text styles for variants
  const variants = {
    primary:
      'bg-[#0F172A] text-white border border-[#0B8F4D]/40 focus:ring-[#0B8F4D]',
    secondary:
      'bg-white text-slate-900 border border-slate-200 focus:ring-[#0B8F4D]',
    outline:
      'bg-transparent text-[#0B8F4D] border-2 border-[#0B8F4D] focus:ring-[#0B8F4D]',
    dark:
      'bg-slate-950 text-white border border-white/20 focus:ring-slate-900',
    ghost:
      'bg-transparent text-slate-700 hover:text-[#0B8F4D] focus:ring-slate-300',
  };

  // Water fill layer colors per variant
  const fillColors = {
    primary: 'bg-[#0B8F4D]',
    secondary: 'bg-[#0B8F4D]',
    outline: 'bg-[#0B8F4D]',
    dark: 'bg-[#0B8F4D]',
    ghost: 'bg-[#0B8F4D]/10',
  };

  // Hover text colors when water fills
  const textHoverColors = {
    primary: 'group-hover:text-white',
    secondary: 'group-hover:text-white',
    outline: 'group-hover:text-white',
    dark: 'group-hover:text-white',
    ghost: 'group-hover:text-[#0B8F4D]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-6 py-3.5 text-sm gap-2.5',
    lg: 'px-8 py-4 text-base gap-3 font-extrabold',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const buttonInner = (
    <>
      {/* Liquid Water Fill Layer (Fills from Bottom to Top) */}
      <span
        className={cn(
          'absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-0 pointer-events-none',
          fillColors[variant]
        )}
      />

      {/* Button Content Text & Icon */}
      <span
        className={cn(
          'relative z-10 flex items-center justify-center gap-2 transition-colors duration-400',
          textHoverColors[variant]
        )}
      >
        <span>{children}</span>
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {buttonInner}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {buttonInner}
    </button>
  );
};
