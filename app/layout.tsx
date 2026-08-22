import type { Metadata } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap', weight: ['300','400','500','600','700','800','900'] });
const inter  = Inter({ subsets: ['latin'], variable: '--font-inter',  display: 'swap' });
const mono   = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400','500','700'] });

export const metadata: Metadata = {
  title: 'Spryzen+ | The Autonomous Future of Web & AI Defense',
  description: 'Sub-microsecond WAF with eBPF kernel filtering, self-healing AI (Ouroboros), hardware-bound identity (Spryzen ID), post-quantum cryptography, and zero-knowledge deep packet inspection. By Team Spryzen.',
  keywords: ['WAF', 'eBPF', 'XDP', 'AI security', 'zero-day', 'Ouroboros', 'Spryzen ID', 'post-quantum', 'ZK-DPI', 'web application firewall'],
  authors: [{ name: 'Team Spryzen' }],
  openGraph: {
    type: 'website',
    title: 'Spryzen+ | The Autonomous Future of Web & AI Defense',
    description: 'Sub-microsecond WAF with self-healing AI, hardware passports, and post-quantum cryptography.',
    siteName: 'Spryzen+',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
