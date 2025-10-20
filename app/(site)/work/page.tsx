import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/lib/data/case-studies';

export default function WorkPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Selected Work</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map(cs => (
          <Link key={cs.slug} href={`/work/${cs.slug}`} className="group rounded-2xl border overflow-hidden">
            <div className="relative aspect-[16/10] bg-neutral-100">
              {cs.cover && (
                <Image src={cs.cover} alt={cs.title} fill className="object-cover p-6 bg-neutral-950" />
              )}
            </div>
            <div className="p-4">
              <h2 className="font-medium group-hover:underline">{cs.title}</h2>
              <p className="text-sm text-neutral-600 mt-1">{cs.summary}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {cs.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-neutral-100 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
