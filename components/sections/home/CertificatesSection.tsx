'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificateMockupCard } from '@/components/ui/CertificateMockupCard';

export const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: 'Structural Quality Management',
      subtitle: 'TÜV Rheinland International Standard Certification',
      code: 'QMS-QUAL-2024',
      issuedTo: 'Keerat Electech Solutions Pvt. Ltd.',
      sealText: 'VERIFIED',
      date: 'Valid Thru 2028',
    },
    {
      title: 'Heavy Cracked Concrete Approval',
      subtitle: 'European Organisation Technical Assessment Standards',
      code: 'CERT-19/0421-CRACKED',
      issuedTo: 'Keerat Wedge & Pure Epoxy Systems',
      sealText: 'CONCRETE',
      date: 'Approved',
    },
    {
      title: 'Authorized Global OEM Distributor',
      subtitle: 'Direct Technical & Commercial Tier-1 Authorization',
      code: 'DIST-OEM-AUTH-889',
      issuedTo: 'Keerat Electech Heavy Hardware Systems',
      sealText: 'TIER-1 OEM',
      date: 'Global Network',
    },
    {
      title: 'Safety & Seismic R120 Excellence',
      subtitle: 'NABL Accredited Structural & Fire Resistance Compliance',
      code: 'NABL-LAB-SEISMIC-C2',
      issuedTo: 'Keerat Electech Quality Lab',
      sealText: 'R120 SAFE',
      date: 'NABL Accredited',
    },
  ];

  return (
    <section className="py-20 bg-white text-[#111111] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Verified Quality Compliance"
          title="Certified & Approved for Structural Engineering"
          subtitle="Over 10+ years of rigorous international testing under European and NABL accredited structural standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certificates.map((cert, idx) => (
            <CertificateMockupCard
              key={idx}
              title={cert.title}
              subtitle={cert.subtitle}
              code={cert.code}
              issuedTo={cert.issuedTo}
              sealText={cert.sealText}
              date={cert.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
