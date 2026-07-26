'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificateMockupCard } from '@/components/ui/CertificateMockupCard';

export const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: 'ISO 9001:2015 Quality Management',
      subtitle: 'TÜV Rheinland International Quality Standard Certification',
      code: 'ISO-9001-QUAL-2024',
      issuedTo: 'Keerat Electech Solutions Pvt. Ltd.',
      sealText: 'ISO 9001',
      date: 'Valid Thru 2028',
    },
    {
      title: 'ETA Option 1 Cracked Concrete',
      subtitle: 'European Organisation for Technical Assessment Approval',
      code: 'ETA-19/0421-CRACKED',
      issuedTo: 'Keerat Wedge & Pure Epoxy Systems',
      sealText: 'ETA OPT 1',
      date: 'EOTA Certified',
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
          badge="Verified ISO Compliance"
          title="Certified & Approved for Structural Engineering"
          subtitle="Four decades of rigorous international testing under European, ISO, and NABL accredited structural standards."
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
