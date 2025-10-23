import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site, generateStructuredData } from '@/lib/seo';
import { Plausible, VercelAnalytics } from '@/lib/analytics';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s · ${site.name}`,
    default: `${site.name} — Professional App & Website Development`
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
  creator: site.author,
  publisher: site.author,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} — Professional App & Website Development`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: '/brand/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mile High Interface Logo - Professional App & Website Development',
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Professional App & Website Development`,
    description: site.description,
    images: ['/brand/logo.png'],
    creator: '@milehighinterface',
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env['GOOGLE_SITE_VERIFICATION'],
  },
  category: 'technology',
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData('home');
  
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="canonical" href={site.url} />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="application-name" content={site.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={site.name} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        <Plausible />
        <VercelAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
