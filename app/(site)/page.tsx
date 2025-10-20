import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <section className="py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Design‑forward software engineering for products that matter.
          </h1>
          <p className="text-lg text-neutral-600">
            Mile High Interface partners with teams to ship fast, accessible, and delightful interfaces —
            from civic tech and data viz to developer tooling.
          </p>
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/contact">Start a project</Link>
            </Button>
            <Link className="underline underline-offset-4" href="/work">See our work →</Link>
          </div>
        </div>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border">
          <Image
            src="/brand/logo.svg"
            alt="Mile High Interface hero art"
            fill
            className="object-cover p-8 bg-neutral-950"
          />
        </div>
      </div>
    </section>
  );
}
