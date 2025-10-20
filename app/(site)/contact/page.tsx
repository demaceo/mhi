'use client';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10)
});

export default function ContactPage() {
  const [state, setState] = useState<'idle'|'submitting'|'sent'|'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form) as Record<string, string>;
    const parse = schema.safeParse(payload);
    if (!parse.success) {
      setError('Please fill out all fields correctly.');
      return;
    }
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parse.data),
      });
      if (!res.ok) throw new Error('Request failed');
      setState('sent');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setState('error');
      setError('Something went wrong. Please try again later.');
    }
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-neutral-600 mb-6">
        Tell us briefly about your project. We usually reply within 1–2 business days.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" className="mt-1 w-full rounded-xl border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" className="mt-1 w-full rounded-xl border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={6} className="mt-1 w-full rounded-xl border px-3 py-2" required />
        </div>
        <button
          disabled={state==='submitting'}
          className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium bg-black text-white"
        >
          {state==='submitting' ? 'Sending…' : 'Send message'}
        </button>
        {state==='sent' && <p className="text-green-600">Thanks! Your message has been sent.</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </section>
  );
}
