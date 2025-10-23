import type { Metadata } from 'next';
import { site } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Mile High Interface - Denver App & Website Development',
  description: 'Learn about Mile High Interface, a Colorado-based app and website development company helping entrepreneurs and startups transform their ideas into successful digital products.',
  keywords: [
    'about mile high interface',
    'denver app developer',
    'colorado web development company',
    'app development team',
    'startup development company',
    'mobile app development colorado',
    'web development denver'
  ],
  openGraph: {
    title: 'About Mile High Interface - Denver App & Website Development',
    description: 'Learn about Mile High Interface, a Colorado-based app and website development company helping entrepreneurs and startups transform their ideas into successful digital products.',
    url: `${site.url}/about`,
    type: 'website',
  },
  alternates: {
    canonical: `${site.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}