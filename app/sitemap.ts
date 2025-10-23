import { site } from '@/lib/seo';

export default async function sitemap() {
  const now = new Date().toISOString();
  
  // Static pages with priorities and change frequencies
  const staticPages = [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${site.url}/services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${site.url}/work`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Dynamic case study pages
  const caseStudies = [
    'pinpoint-civic-engagement',
    'moody-tunes'
  ];

  const caseStudyPages = caseStudies.map(slug => ({
    url: `${site.url}/work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages];
}
