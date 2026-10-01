import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingSocialButtons } from '@/components/ui/FloatingSocialButtons';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Keerat Electech | Premium Industrial Fasteners & Building Solutions',
  description: 'Leading manufacturer and supplier of ETA Option 1 mechanical wedge anchors, chemical injection mortars, power tools, and concrete diamond drilling solutions.',
  icons: {
    icon: '/assets/logo-official.svg',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111] selection:bg-[#E3261E] selection:text-white relative">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <FloatingSocialButtons />
        <Footer />
      </body>
    </html>
  );
}
