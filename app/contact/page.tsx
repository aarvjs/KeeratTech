'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ShieldCheck,
  Building2,
  Headphones,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '@/constants/data';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/sections/home/FAQSection';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: 'Anchor Fasteners',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /*
      CLEAN API INTEGRATION POINT FOR CRM:
      await fetch('/api/crm/contact', { method: 'POST', body: JSON.stringify(formData) });
    */
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          productInterest: 'Anchor Fasteners',
          message: '',
        });
      }, 4000);
    }, 500);
  };

  return (
    <main className="w-full bg-[#F8FAF8] min-h-screen text-[#111111] pb-24 font-sans">
      <PageHero
        badge="Direct Technical Line"
        title="Get in Touch with Our Engineering Team"
        subtitle="Request technical datasheets, site pull-out testing visits, bulk pricing, or custom anchor calculations."
        breadcrumbs={[{ name: 'Contact Us', href: '/contact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-xl shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#666666] uppercase">Headquarters</h4>
              <p className="text-xs font-semibold text-[#111111] mt-1 leading-snug">{COMPANY_INFO.address}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-xl shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#666666] uppercase">Phone & Contact</h4>
              <a href="tel:+917235055577" className="text-xs font-semibold text-[#111111] mt-1 block hover:text-[#0B8F4D] transition-colors">{COMPANY_INFO.phone}</a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-xl shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#666666] uppercase">Corporate Email</h4>
              <p className="text-xs font-semibold text-[#0B8F4D] mt-1">{COMPANY_INFO.email}</p>
              <p className="text-[11px] text-[#666666]">{COMPANY_INFO.inquiryEmail}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0B8F4D]/10 text-[#0B8F4D] rounded-xl shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#666666] uppercase">Working Hours</h4>
              <p className="text-xs font-semibold text-[#111111] mt-1">{COMPANY_INFO.workingHours}</p>
              <p className="text-[11px] text-[#666666]">24/7 Technical Site Support</p>
            </div>
          </div>
        </div>

        {/* Main Grid: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB] shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B8F4D]">
                Technical Inquiry & Commercial Quotes
              </span>
              <h2 className="text-2xl font-extrabold text-[#111111] mt-1">
                Send Us Your Project Specifications
              </h2>
              <p className="text-xs text-[#666666] mt-1 font-normal">
                Leave a message below. Our technical sales engineering department will reply within 2 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3 bg-[#F8FAF8] rounded-xl border border-[#E5E7EB] p-6">
                <div className="w-14 h-14 bg-[#0B8F4D] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111111]">Inquiry Received Successfully</h3>
                <p className="text-xs text-[#666666] max-w-xs mx-auto font-normal">
                  Thank you! Your project details have been dispatched to our chief technical desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none bg-[#F8FAF8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. L&T Construction"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none bg-[#F8FAF8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none bg-[#F8FAF8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111111] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none bg-[#F8FAF8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1">Product / Service Interest</label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none bg-[#F8FAF8] font-medium"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                    <option value="Specialized Contracting Services">Specialized Contracting Services</option>
                    <option value="On-Site Pull Testing Request">On-Site Pull Testing Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-1">Project Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify anchor sizes, load specs, estimated quantities, or jobsite location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent outline-none bg-[#F8FAF8]"
                  ></textarea>
                </div>

                <div className="p-3 bg-[#F8FAF8] rounded-xl flex items-center gap-2 text-xs text-[#666666] border border-[#E5E7EB]">
                  <ShieldCheck className="w-4 h-4 text-[#0B8F4D] shrink-0" />
                  <span>Clean API integration point ready for CRM backend connection.</span>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth icon={<Send className="w-4 h-4" />}>
                  Dispatch Technical RFQ
                </Button>
              </form>
            )}
          </div>

          {/* Map Card & Regional Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-[#111111] rounded-2xl p-6 border border-[#E5E7EB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0B8F4D] uppercase">Headquarters Location</span>
                  <h3 className="text-base font-bold text-[#111111]">Panki B Block, Kanpur</h3>
                </div>
                <Building2 className="w-5 h-5 text-[#0B8F4D]" />
              </div>

              {/* Map iFrame */}
              <div className="relative w-full h-60 rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F8FAF8]">
                <iframe
                  title="Keerat Electech Headquarters Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.342129528738!2d80.2285!3d26.4712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470a1a3617e9%3A0x8dd0b10ec689b252!2sPanki%2C%20Kanpur%2C%20Uttar%20Pradesh%20208020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="text-xs text-[#666666] space-y-1">
                <p>📍 {COMPANY_INFO.address}</p>
                <p>⚡ Express Logistics Hub for Pan-India & Export Orders</p>
              </div>
            </div>

            {/* Regional Hubs */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#0B8F4D]" /> Regional Distribution Depots
              </h4>

              <div className="space-y-2 text-xs text-[#666666]">
                <div className="p-3 bg-[#F8FAF8] rounded-xl border border-[#E5E7EB]">
                  <strong className="text-[#111111] block">Mumbai Testing Center & Logistics</strong>
                  <span>MIDC Industrial Area, Navi Mumbai • <a href="tel:+917235055577" className="hover:text-[#0B8F4D] transition-colors">{COMPANY_INFO.phone}</a></span>
                </div>
                <div className="p-3 bg-[#F8FAF8] rounded-xl border border-[#E5E7EB]">
                  <strong className="text-[#111111] block">Delhi NCR Regional Hub</strong>
                  <span>Ecotech III, Greater Noida, UP • <a href="tel:+917235055577" className="hover:text-[#0B8F4D] transition-colors">{COMPANY_INFO.phone}</a></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="mt-16">
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
