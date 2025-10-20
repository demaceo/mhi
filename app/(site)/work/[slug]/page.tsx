import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/data/case-studies';
import CaseStudyContent from './CaseStudyContent';

export function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = caseStudies.find(c => c.slug === slug);
  
  if (!cs) return notFound();
  
  return <CaseStudyContent caseStudy={cs} />;
}
