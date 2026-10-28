'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  Send,
  ArrowRight,
  FileText,
  Award,
} from 'lucide-react';
import { PRODUCTS } from '@/constants/data';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { InquiryModal } from '@/components/ui/InquiryModal';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  const [activeImage, setActiveImage] = useState<string>(product?.image || '');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categoryId === product.categoryId
  ).slice(0, 3);

  const imagesList = product.gallery && product.gallery.length > 0
    ? [product.image, ...product.gallery]
    : [product.image];

  return (
    <main className="w-full bg-white min-h-screen text-[#111111] pb-24 font-sans">
      <PageHero
        badge={product.category}
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={[
          { name: 'Products', href: '/products' },
          { name: product.name, href: `/products/${product.id}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white p-6 shadow-xs flex items-center justify-center">
              <Image
                src={activeImage || product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-[#0B8F4D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                Heavy Duty Rated
              </div>
            </div>

            {/* Thumbnails */}
            {imagesList.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer bg-white p-1 ${
                      (activeImage || product.image) === img
                        ? 'border-[#0B8F4D] scale-105'
                        : 'border-[#E5E7EB] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumb ${idx}`} fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-4 bg-[#F8FAF8] rounded-xl border border-[#E5E7EB] flex items-center justify-between text-xs text-[#666666]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B8F4D]" />
                <span>Fire Rated R120 & Seismic C1/C2</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0B8F4D]" />
                <span>NABL Lab Verified</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B8F4D]">
                Category: {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-1 leading-tight">
                {product.name}
              </h1>
              <p className="text-[#0B8F4D] font-bold text-xs uppercase tracking-wider mt-1">
                {product.tagline}
              </p>
            </div>

            <p className="text-[#666666] text-sm leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-2 bg-[#F8FAF8] p-5 rounded-xl border border-[#E5E7EB]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#666666] mb-3">Key Product Features:</h4>
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#111111] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0B8F4D] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Box - STRICTLY NO PRICE / BUY BUTTON */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#666666] font-semibold uppercase">Supply Mode</span>
                  <p className="text-sm font-bold text-[#111111]">Direct EPC Project Supply & Technical RFQ</p>
                </div>
                <span className="bg-[#0B8F4D]/10 text-[#0B8F4D] border border-[#0B8F4D]/20 text-xs font-bold px-3 py-1 rounded-full">
                  Showcase Only
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  onClick={() => setIsInquiryOpen(true)}
                  variant="primary"
                  fullWidth
                  icon={<Send className="w-4 h-4" />}
                >
                  Request Technical RFQ
                </Button>

                <a
                  href={`https://wa.me/917235055577?text=${encodeURIComponent(
                    `*Product Inquiry - Keerat Electech*\n\nHello, I would like to inquire about *${product.name}* (${product.tagline}). Please share pricing and technical specifications.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-center shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.825zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.63 0-3.149-.508-4.408-1.378l-.316-.218-2.955.775.789-2.88-.237-.344C3.947 14.805 3.4 13.456 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
                  </svg>
                  Instant WhatsApp Inquiry
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-16">
          <h3 className="text-xl font-extrabold text-[#111111] mb-5 border-l-4 border-[#0B8F4D] pl-3">
            Technical Specifications Table
          </h3>

          <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAF8] text-[#111111] text-xs uppercase font-bold tracking-wider border-b border-[#E5E7EB]">
                  <th className="py-3.5 px-6">Specification Parameter</th>
                  <th className="py-3.5 px-6">Certified Value / Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs sm:text-sm">
                {product.specs.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAF8]/50'}>
                    <td className="py-3.5 px-6 font-bold text-[#111111]">{spec.label}</td>
                    <td className="py-3.5 px-6 text-[#666666] font-mono font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#F8FAF8] p-7 rounded-xl border border-[#E5E7EB]">
            <h4 className="text-base font-bold text-[#111111] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0B8F4D]" />
              Approved Jobsite Applications
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#111111]">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B8F4D] shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FAF8] p-7 rounded-xl border border-[#E5E7EB]">
            <h4 className="text-base font-bold text-[#111111] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0B8F4D]" />
              Engineering Advantages & Benefits
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#111111]">
              {product.benefits.map((ben, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B8F4D] shrink-0 mt-0.5" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#0B8F4D] uppercase tracking-wider">Complementary Systems</span>
                <h3 className="text-2xl font-extrabold text-[#111111]">Related Products</h3>
              </div>
              <Link href="/products" className="text-xs font-bold text-[#0B8F4D] hover:underline flex items-center gap-1">
                View All Products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} onInquire={() => setIsInquiryOpen(true)} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Inquiry Modal Popup */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productName={product.name}
      />
    </main>
  );
}
