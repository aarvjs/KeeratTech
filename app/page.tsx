import React from 'react';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { BrandsMarqueeSection } from '@/components/sections/home/BrandsMarqueeSection';
import { AboutPreviewSection } from '@/components/sections/home/AboutPreviewSection';
import { ProductCategoriesSection } from '@/components/sections/home/ProductCategoriesSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { IndustriesSection } from '@/components/sections/home/IndustriesSection';
import { CinematicVideoSection } from '@/components/sections/home/CinematicVideoSection';
import { WhyChooseUsSection } from '@/components/sections/home/WhyChooseUsSection';
import { CertificatesSection } from '@/components/sections/home/CertificatesSection';
import { ProjectGallerySection } from '@/components/sections/home/ProjectGallerySection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { FAQSection } from '@/components/sections/home/FAQSection';
import { FooterVideoSection } from '@/components/sections/home/FooterVideoSection';
import { CTABannerSection } from '@/components/sections/home/CTABannerSection';

export const metadata = {
  title: 'Keerat Electech | High Performance Industrial Fasteners & Building Solutions',
  description: 'Global manufacturer of ETA Option 1 wedge anchors, pure epoxy injection mortars, power tools, and concrete diamond coring services for major EPC infrastructure projects.',
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: BRAND PARTNERS LOGO MARQUEE */}
      <BrandsMarqueeSection />

      {/* SECTION 3: ABOUT PREVIEW */}
      <AboutPreviewSection />

      {/* SECTION 4: PRODUCT CATEGORIES */}
      <ProductCategoriesSection />

      {/* SECTION 5: SERVICES */}
      <ServicesSection />

      {/* SECTION 6: INDUSTRIES WE SERVE (PINTEREST MASONRY GRID) */}
      <IndustriesSection />

      {/* FULL WIDTH VIDEO SECTION BELOW INDUSTRIES */}
      <CinematicVideoSection />

      {/* SECTION 7: WHY CHOOSE US TIMELINE */}
      <WhyChooseUsSection />

      {/* SECTION 8: CERTIFICATES */}
      <CertificatesSection />

      {/* SECTION 9: PROJECT GALLERY */}
      <ProjectGallerySection />

      {/* SECTION 10: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 11: FAQS */}
      <FAQSection />

      {/* SECTION 12: USER VIDEO SHOWCASE RIGHT ABOVE FOOTER (6957872-uhd_4096_2160_25fps.mp4) */}
      <FooterVideoSection />

      {/* SECTION 13: CTA BANNER */}
      <CTABannerSection />
    </main>
  );
}
