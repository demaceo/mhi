import type { Metadata } from 'next';
import { site, generateStructuredData } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'App & Website Development Services - Mile High Interface',
  description: 'Comprehensive app and website development services for entrepreneurs and startups. From MVP development to full-scale applications, we bring your ideas to life.',
  keywords: [
    'app development services',
    'website development services', 
    'mobile app development',
    'MVP development',
    'startup app development',
    'business website creation',
    'React development',
    'Next.js development',
    'UI/UX design services',
    'software consulting',
    'Denver app development'
  ],
  openGraph: {
    title: 'App & Website Development Services - Mile High Interface',
    description: 'Comprehensive app and website development services for entrepreneurs and startups. From MVP development to full-scale applications, we bring your ideas to life.',
    url: `${site.url}/services`,
    type: 'website',
  },
  alternates: {
    canonical: `${site.url}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData('services');
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}