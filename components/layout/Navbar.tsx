'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu as MenuIcon,
  X,
  Phone,
  ArrowRight,
  ShieldAlert,
  FlaskConical,
  Wrench,
  Disc,
  Droplet,
  Grid,
  Nut,
  MessageCircle,
} from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '@/constants/data';
import { Button } from '@/components/ui/Button';

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages with transparent hero header extending behind navbar
  const isTransparentHeroPage = pathname === '/' || pathname === '/about' || pathname === '/services';
  const isTransparent = isTransparentHeroPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products', hasMegaMenu: true },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-[#0B8F4D]" />;
      case 'FlaskConical': return <FlaskConical className="w-4 h-4 text-[#0B8F4D]" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-[#0B8F4D]" />;
      case 'Disc': return <Disc className="w-4 h-4 text-[#0B8F4D]" />;
      case 'Droplet': return <Droplet className="w-4 h-4 text-[#0B8F4D]" />;
      case 'Grid': return <Grid className="w-4 h-4 text-[#0B8F4D]" />;
      default: return <Nut className="w-4 h-4 text-[#0B8F4D]" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/50 via-black/25 to-transparent text-white py-5'
          : 'bg-white text-[#111111] shadow-sm py-4 border-b border-[#E5E7EB]'
      }`}
    >
      {/* Top Bar - Desktop */}
      <div className={`hidden lg:block transition-colors duration-300 pb-2 mb-2 text-xs border-b ${
        isTransparent ? 'border-white/15 text-slate-200' : 'border-[#E5E7EB] text-[#666666]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917235055577" className="flex items-center gap-1.5 hover:text-[#0B8F4D] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#0B8F4D]" />
              Call: <strong className={isTransparent ? 'text-white' : 'text-[#111111]'}>{COMPANY_INFO.phone}</strong>
            </a>
            <span>|</span>
            <span>High-Performance Structural Fasteners Manufacturer</span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <span className="text-[#0B8F4D] font-bold">25+ Cities Presence</span>
            <Link href="/contact" className="hover:underline text-[#0B8F4D] font-semibold">
              Request Site Technical Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* LOGO - KEERAT ELECTECH */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`relative w-48 sm:w-56 h-12 sm:h-14 transition-all duration-200 ${
            isTransparent
              ? 'bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/40'
              : ''
          }`}>
            <Image
              src="/assets/keerat-logo-horizontal.png"
              alt="Keerat Electech Logo"
              fill
              className={`object-contain ${isTransparent ? 'object-center p-0.5' : 'object-left'} group-hover:scale-[1.02] transition-transform duration-200`}
              priority
            />
          </div>
        </Link>

        {/* MENU CENTER (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasMegaMenu) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 py-2 font-semibold text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-[#0B8F4D]'
                        : isTransparent
                        ? 'text-white hover:text-[#0B8F4D]'
                        : 'text-[#111111] hover:text-[#0B8F4D]'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Mega Menu Dropdown with hover bridge */}
                  {megaMenuOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="w-[720px] bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] p-6 text-[#111111] animate-fade-in">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E7EB]">
                          <div>
                            <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                              Product Systems & Fasteners
                            </h4>
                            <p className="text-xs text-[#666666]">Authorized Systems: Fischer, Hilti & Keerat Heavy Fixings</p>
                          </div>
                          <Link
                            href="/products"
                            onClick={() => setMegaMenuOpen(false)}
                            className="text-xs font-bold text-[#0B8F4D] hover:underline flex items-center gap-1"
                          >
                            All Products <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* INDIVIDUAL HOVER ANIMATION FOR EACH ITEM INDEPENDENTLY */}
                        <div className="grid grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1">
                          {PRODUCT_CATEGORIES.map((cat) => {
                            const isTopBrand = cat.id === 'fischer' || cat.id === 'hilti';
                            return (
                              <Link
                                key={cat.id}
                                href={`/products?category=${cat.id}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 text-left group/cat ${
                                  isTopBrand
                                    ? 'bg-gradient-to-br from-[#0B8F4D]/5 to-white hover:from-[#0B8F4D]/10 hover:to-[#F8FAF8] border border-[#0B8F4D]/30 hover:border-[#0B8F4D] shadow-xs'
                                    : 'bg-white hover:bg-[#F8FAF8] border border-transparent hover:border-[#0B8F4D] shadow-2xs hover:shadow-xs'
                                }`}
                              >
                                <div className={`p-2 rounded-lg shrink-0 transition-colors duration-200 ${
                                  isTopBrand
                                    ? 'bg-[#0B8F4D] text-white group-hover/cat:bg-[#087238]'
                                    : 'bg-[#0B8F4D]/10 text-[#0B8F4D] group-hover/cat:bg-[#0B8F4D] group-hover/cat:text-white'
                                }`}>
                                  {getCategoryIcon(cat.iconName)}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-sm font-bold text-[#111111] group-hover/cat:text-[#0B8F4D] transition-colors duration-200 flex items-center justify-between gap-1">
                                    <span className="truncate">{cat.name}</span>
                                    {isTopBrand && (
                                      <span className="text-[9px] font-black uppercase tracking-wider bg-[#0B8F4D] text-white px-1.5 py-0.5 rounded-full shrink-0">
                                        Brand
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-[#666666] line-clamp-1 mt-0.5 font-normal">
                                    {cat.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 font-semibold text-sm transition-colors duration-200 relative ${
                  isActive
                    ? 'text-[#0B8F4D]'
                    : isTransparent
                    ? 'text-white hover:text-[#0B8F4D]'
                    : 'text-[#111111] hover:text-[#0B8F4D]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B8F4D] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Inquire Now
          </Button>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`md:hidden p-2 rounded-lg ${
            isTransparent ? 'text-white hover:bg-white/10' : 'text-[#111111] hover:bg-[#F8FAF8]'
          }`}
          aria-label="Open side drawer"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* MOBILE SIDE DRAWER (SLIDES FROM LEFT) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide Drawer from LEFT */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] z-50 bg-white text-[#111111] shadow-2xl flex flex-col justify-between p-6 border-r border-[#E5E7EB]"
            >
              <div>
                {/* Glass Drawer Header with Logo & Close button */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5E7EB]">
                  <div className="relative w-44 h-11">
                    <Image
                      src="/assets/keerat-logo-horizontal.png"
                      alt="Keerat Electech Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-[#F8FAF8] text-[#111111] hover:bg-slate-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links Stack with Active Page Indicator */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <div key={link.name} className="space-y-1.5">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                            isActive
                              ? 'bg-[#0B8F4D]/10 text-[#0B8F4D] border border-[#0B8F4D]/20'
                              : 'text-[#111111] hover:bg-[#F8FAF8]'
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive && <span className="w-2 h-2 rounded-full bg-[#0B8F4D]" />}
                        </Link>

                        {/* Direct Brand Links for Mobile */}
                        {link.hasMegaMenu && (
                          <div className="pl-3 pr-1 grid grid-cols-2 gap-2 pt-0.5 pb-1">
                            <Link
                              href="/products?category=fischer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-bold px-3 py-2 rounded-lg bg-emerald-50 text-[#0B8F4D] border border-emerald-200/70 hover:bg-emerald-100 flex items-center justify-between shadow-2xs"
                            >
                              <span>Fischer</span>
                              <span className="text-[9px] font-black uppercase bg-[#0B8F4D] text-white px-1.5 py-0.5 rounded-full">Brand</span>
                            </Link>
                            <Link
                              href="/products?category=hilti"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-bold px-3 py-2 rounded-lg bg-emerald-50 text-[#0B8F4D] border border-emerald-200/70 hover:bg-emerald-100 flex items-center justify-between shadow-2xs"
                            >
                              <span>Hilti</span>
                              <span className="text-[9px] font-black uppercase bg-[#0B8F4D] text-white px-1.5 py-0.5 rounded-full">Brand</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions & Social Icons */}
              <div className="pt-6 border-t border-[#E5E7EB] space-y-5">
                <Button
                  href="/contact"
                  variant="primary"
                  fullWidth
                  size="md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us & Inquiry
                </Button>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href={COMPANY_INFO.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F8FAF8] hover:bg-[#0B8F4D] hover:text-white text-[#0B8F4D] rounded-full border border-[#E5E7EB] transition-colors shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F8FAF8] hover:bg-[#0B8F4D] hover:text-white text-[#111111] rounded-full border border-[#E5E7EB] transition-colors shadow-xs"
                    title="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F8FAF8] hover:bg-[#0B8F4D] hover:text-white text-[#111111] rounded-full border border-[#E5E7EB] transition-colors shadow-xs"
                    title="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
