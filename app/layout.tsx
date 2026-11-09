
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingSocialButtons } from '@/components/ui/FloatingSocialButtons';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Keerat Electech | Premium Industrial Fasteners & Building Solutions',
  description:
    'Leading manufacturer and supplier of heavy-duty mechanical wedge anchors, chemical injection mortars, power tools, and concrete diamond drilling solutions.',
  icons: {
    icon: '/assets/keerat-logo-icon.png',
  },
  keywords: [
    'Keerat Electech',
    'Industrial Fasteners',
    'Anchor Fasteners',
    'Chemical Fasteners',
    'Construction Chemicals',
    'Power Tools',
    'Drilling Solutions',
    'Wedge Anchors',
    'Rebar Doweling',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111] selection:bg-[#0B8F4D] selection:text-white relative">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <FloatingSocialButtons />
        <Footer />
      </body>
    </html>
  );
}
