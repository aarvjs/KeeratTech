'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ShieldCheck, RefreshCw } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/constants/data';
import { Product } from '@/types';
import { PageHero } from '@/components/layout/PageHero';
import { ProductCard } from '@/components/ui/ProductCard';
import { InquiryModal } from '@/components/ui/InquiryModal';

function ProductCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.categoryId === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="w-full bg-[#F8FAF8] min-h-screen text-[#111111] pb-24 font-sans">
      <PageHero
        badge="Technical Catalog"
        title="Industrial Fasteners & Fixings Showcase"
        subtitle="Explore high-load mechanical anchors, pure epoxy injection systems, power tools, and structural channel fixings. Engineered for heavy infrastructure."
        breadcrumbs={[{ name: 'Products Catalog', href: '/products' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        {/* Search & Filter Control Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
              <input
                type="text"
                placeholder="Search anchors, epoxy, tools, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-[#F8FAF8] border border-[#E5E7EB] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#0B8F4D] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#666666] hover:text-[#111111]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Active Count & Info Badge */}
            <div className="flex items-center gap-3 text-xs text-[#666666] font-semibold w-full md:w-auto justify-between md:justify-end">
              <span className="flex items-center gap-1.5 bg-[#0B8F4D]/10 text-[#0B8F4D] px-3.5 py-1.5 rounded-full border border-[#0B8F4D]/20">
                <ShieldCheck className="w-4 h-4" /> Showcase Only (No Price / Cart)
              </span>
              <span>Showing <strong>{filteredProducts.length}</strong> Products</span>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="pt-3 border-t border-[#E5E7EB] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0B8F4D] text-white shadow-xs'
                  : 'bg-[#F8FAF8] text-[#111111] hover:bg-slate-200 border border-[#E5E7EB]'
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>

            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B8F4D] text-white shadow-xs'
                    : 'bg-[#F8FAF8] text-[#111111] hover:bg-slate-200 border border-[#E5E7EB]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquire={(prod) => setInquiryProduct(prod)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-16 text-center border border-[#E5E7EB] shadow-xs max-w-lg mx-auto">
              <RefreshCw className="w-12 h-12 text-[#666666] mx-auto mb-4 animate-spin" />
              <h3 className="text-xl font-bold text-[#111111]">No matching products found</h3>
              <p className="text-sm text-[#666666] mt-2 font-normal">
                Try adjusting your search criteria or clear active category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-6 bg-[#0B8F4D] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#086938] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Technical Inquiry Modal */}
      <InquiryModal
        isOpen={!!inquiryProduct}
        onClose={() => setInquiryProduct(null)}
        productName={inquiryProduct?.name}
      />
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center text-sm font-semibold">Loading Products Catalog...</div>}>
      <ProductCatalogContent />
    </Suspense>
  );
}
