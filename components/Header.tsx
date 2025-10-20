'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="Mile High Interface" width={36} height={12} />
          <span className="font-semibold">Mile High Interface</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-2 py-1 rounded-md hover:bg-neutral-100",
                pathname === l.href && "bg-neutral-900 text-white hover:bg-neutral-900"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
