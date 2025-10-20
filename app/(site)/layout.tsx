import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/seo';
import { Plausible } from '@/lib/analytics';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s · ${site.name}`,
    default: `${site.name} — ${site.description}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Plausible />
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
