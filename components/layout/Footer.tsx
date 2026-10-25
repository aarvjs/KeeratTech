'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, SERVICES } from '@/constants/data';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white text-[#111111] pt-16 pb-8 border-t border-[#E5E7EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Newsletter Strip */}
        <div className="bg-[#F8FAF8] border border-[#E5E7EB] p-8 rounded-2xl mb-16 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B8F4D]">Technical Bulletins</span>
            <h3 className="text-2xl font-extrabold text-[#111111] mt-1">
              Subscribe to Fastener Technical Bulletins & Catalog Updates
            </h3>
            <p className="text-sm text-[#666666] mt-1 font-normal">
              Receive quarterly anchor calculation guidelines, technical specification updates & engineering papers.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center gap-2">
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#0B8F4D] bg-[#0B8F4D]/10 px-5 py-3 rounded-lg border border-[#0B8F4D]/20 font-semibold">
                <CheckCircle className="w-5 h-5" /> Subscribed Successfully!
              </div>
            ) : (
              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white border border-[#E5E7EB] text-[#111111] text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#0B8F4D] w-full md:w-64"
                />
                <button
                  type="submit"
                  className="bg-[#0B8F4D] hover:bg-[#086938] text-white px-5 py-3 rounded-lg font-bold text-sm transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  Subscribe <Send className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[#E5E7EB]">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-48 h-12">
                <Image
                  src="/assets/keerat-logo-horizontal.png"
                  alt="Keerat Electech Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-[#666666] leading-relaxed font-normal">
              Global manufacturer and turnkey distributor of high-load mechanical anchor fasteners, pure epoxy chemical injection mortars, power tools, and structural fixing systems.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href={COMPANY_INFO.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#0B8F4D] rounded-lg text-[#111111] hover:text-[#0B8F4D] transition-colors" title="Instagram">
                <span className="text-xs font-bold font-mono">IG</span>
              </a>
              <a href={COMPANY_INFO.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#0B8F4D] rounded-lg text-[#111111] hover:text-[#0B8F4D] transition-colors" title="Facebook">
                <span className="text-xs font-bold font-mono">FB</span>
              </a>
              <a href={COMPANY_INFO.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#F8FAF8] border border-[#E5E7EB] hover:border-[#0B8F4D] rounded-lg text-[#111111] hover:text-[#0B8F4D] transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4 text-[#0B8F4D]" />
              </a>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4 border-l-2 border-[#0B8F4D] pl-3">
              Product Systems
            </h4>
            <ul className="space-y-2.5 text-sm text-[#666666]">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products?category=${cat.id}`} className="hover:text-[#0B8F4D] transition-colors flex items-center gap-2 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B8F4D]" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4 border-l-2 border-[#0B8F4D] pl-3">
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#666666]">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link href="/services" className="hover:text-[#0B8F4D] transition-colors flex items-center gap-2 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B8F4D]" />
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Google Map */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4 border-l-2 border-[#0B8F4D] pl-3">
              Corporate Office & Location
            </h4>

            <div className="space-y-2.5 text-xs text-[#666666]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0B8F4D] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0B8F4D] shrink-0" />
                <a href="tel:+917235055577" className="text-[#111111] font-semibold hover:text-[#0B8F4D] transition-colors">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0B8F4D] shrink-0" />
                <span className="text-[#111111] font-semibold">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0B8F4D] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="relative w-full h-24 rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F8FAF8]">
              <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('/assets/images/skyscraper.png')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent flex items-center justify-center p-2 text-center">
                <a
                  href="https://maps.google.com/?q=T1,+Shree+Prabhu+Vatika,+Near+Shri+Ram+Education+Center,+Panki+B+Block,+208020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B8F4D] hover:bg-[#086938] text-white text-[11px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" /> View Office Map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName} All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-[#0B8F4D] transition-colors">About Us</Link>
            <Link href="/products" className="hover:text-[#0B8F4D] transition-colors">Products</Link>
            <Link href="/services" className="hover:text-[#0B8F4D] transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-[#0B8F4D] transition-colors">Contact & RFQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
