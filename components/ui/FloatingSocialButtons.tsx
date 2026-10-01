'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/constants/data';

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export const FloatingSocialButtons: React.FC = () => {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition past hero section (~500px)
      if (window.scrollY > 450) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialItems = [
    {
      name: 'WhatsApp',
      href: COMPANY_INFO.socialLinks.whatsapp,
      icon: <WhatsAppIcon />,
    },
    {
      name: 'Instagram',
      href: COMPANY_INFO.socialLinks.instagram,
      icon: <InstagramIcon />,
    },
    {
      name: 'Facebook',
      href: COMPANY_INFO.socialLinks.facebook,
      icon: <FacebookIcon />,
    },
  ];

  return (
    <>
      {/* DESKTOP & TABLET: Vertical Stack Right Center */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3.5 pointer-events-auto">
        {socialItems.map((item, idx) => (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ scale: 1.15 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              isPastHero
                ? 'bg-white text-[#E3261E] border border-[#E5E7EB] shadow-lg hover:border-[#E3261E] hover:shadow-[#E3261E]/20'
                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-[#E3261E] shadow-md'
            }`}
            title={item.name}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* MOBILE: Compact Floating Circular Bar near Bottom Right */}
      <div className="md:hidden fixed right-4 bottom-6 z-40 flex flex-col items-center gap-3 pointer-events-auto">
        {socialItems.map((item, idx) => (
          <motion.a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isPastHero
                ? 'bg-white text-[#E3261E] border border-[#E5E7EB]'
                : 'bg-slate-900/90 backdrop-blur-md text-white border border-white/20'
            }`}
            aria-label={item.name}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </>
  );
};
