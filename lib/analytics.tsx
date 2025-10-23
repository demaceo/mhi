'use client';

import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function Plausible() {
  const domain = process.env['NEXT_PUBLIC_PLAUSIBLE_DOMAIN'];
  if (!domain) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  );
}

export function VercelAnalytics() {
  return (
    <>
      {/* Vercel Analytics - Provides page views, visitor data, and performance metrics */}
      <Analytics />
      {/* Vercel Speed Insights - Tracks Core Web Vitals and performance metrics */}
      <SpeedInsights />
    </>
  );
}

// Helper function to track custom events (optional)
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // For Vercel Analytics, custom events are automatically tracked
  // You can use this function for custom tracking if needed
  if (typeof window !== 'undefined') {
    // Custom event tracking logic can be added here
    console.log('Event tracked:', eventName, properties);
  }
}
