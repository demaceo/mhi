import { notFound } from 'next/navigation';
import Image from 'next/image';
import { caseStudies } from '@/lib/data/case-studies';

export function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find(c => c.slug === params.slug);
  if (!cs) return notFound();
  return (
    <article className="prose max-w-none">
      <h1>{cs.title}</h1>
      <p>{cs.summary}</p>
      {cs.cover && (
        <div className="not-prose relative aspect-[16/10] rounded-2xl overflow-hidden border my-6">
          <Image src={cs.cover} alt={cs.title} fill className="object-cover p-6 bg-neutral-950" />
        </div>
      )}
      <h2>Problem</h2>
      <p>Terse description of the problem statement and constraints.</p>
      <h2>Approach</h2>
      <p>Key decisions, architecture, and design tradeoffs.</p>
      <h2>Outcome</h2>
      <p>Measurable results, screenshots, and reflections.</p>
    </article>
  );
}
