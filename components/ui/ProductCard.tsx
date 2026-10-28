'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Product } from '@/types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onInquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onInquire }) => {
  return (
    <div className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#0B8F4D] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-white p-3 border-b border-[#E5E7EB] flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/95 text-[#111111] text-[11px] font-bold px-3 py-1 rounded-full border border-[#E5E7EB] shadow-xs">
          {product.category}
        </div>
        {product.isFeatured && (
          <div className="absolute top-3 right-3 bg-[#0B8F4D] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
            Heavy Duty
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#0B8F4D] transition-colors duration-200 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-xs font-bold text-[#0B8F4D] uppercase tracking-wider mt-1 mb-2.5">
          {product.tagline}
        </p>

        <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-5 font-normal">
          {product.description}
        </p>

        {/* Applications */}
        <div className="mt-auto space-y-1.5 pt-4 border-t border-[#E5E7EB] mb-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">Approved Applications:</p>
          {product.applications.slice(0, 2).map((app, idx) => (
            <div key={idx} className="flex items-center text-xs text-[#111111] gap-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0B8F4D] shrink-0" />
              <span className="truncate">{app}</span>
            </div>
          ))}
        </div>

        {/* Actions Bar - STRICTLY Showcase & Request Quote ONLY */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            href={`/products/${product.id}`}
            variant="outline"
            size="sm"
            className="w-full text-xs"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            View Details
          </Button>

          <Button
            onClick={() => onInquire && onInquire(product)}
            variant="primary"
            size="sm"
            className="w-full text-xs"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
