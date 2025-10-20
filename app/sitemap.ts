import { site } from '@/lib/seo';

export default async function sitemap() {
  const now = new Date().toISOString();
  return [
    { url: `${site.url}/`, lastModified: now },
    { url: `${site.url}/work`, lastModified: now },
    { url: `${site.url}/services`, lastModified: now },
    { url: `${site.url}/about`, lastModified: now },
    { url: `${site.url}/contact`, lastModified: now },
  ];
}
