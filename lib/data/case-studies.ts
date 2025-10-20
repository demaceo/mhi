export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pinpoint-civic-engagement',
    title: 'Pinpoint — Civic Engagement Platform',
    summary: 'Data visualization + AI messaging to help constituents reach officials.',
    tags: ['civic-tech', 'd3', 'nextjs'],
    cover: '/brand/logo.svg'
  },
  {
    slug: 'moody-tunes',
    title: 'Moody Tunes — Emotion-based Music Recs',
    summary: 'Spotify-powered recommendations conditioned on mood & era.',
    tags: ['react-native', 'spotify', 'ml'],
    cover: '/brand/logo.svg'
  }
];
