import type { Metadata } from 'next';
import { site } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Mile High Interface - Get Your App or Website Built',
  description: 'Ready to transform your idea into a successful app or website? Contact Mile High Interface for a free consultation. Expert development services for entrepreneurs and startups.',
  keywords: [
    'contact mile high interface',
    'app development consultation',
    'website development quote',
    'denver app developer contact',
    'startup development consultation',
    'mobile app development inquiry',
    'web development contact form'
  ],
  openGraph: {
    title: 'Contact Mile High Interface - Get Your App or Website Built',
    description: 'Ready to transform your idea into a successful app or website? Contact Mile High Interface for a free consultation. Expert development services for entrepreneurs and startups.',
    url: `${site.url}/contact`,
    type: 'website',
  },
  alternates: {
    canonical: `${site.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}