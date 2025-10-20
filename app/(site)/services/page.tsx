export default function ServicesPage() {
  const services = [
    { title: 'Product & UI Engineering', desc: 'React / Next.js, TypeScript, design systems, accessibility, performance.' },
    { title: 'Data Visualization', desc: 'D3.js, interactive maps/graphs, story-driven dashboards.' },
    { title: 'Civic & Public-Interest Tech', desc: 'APIs for open data, advocacy tooling, privacy-first architectures.' },
    { title: 'Prototyping & Experiments', desc: 'Rapid concept validation, UX research support, motion & micro‑interactions.' },
  ];
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Services</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map(s => (
          <li key={s.title} className="rounded-2xl border p-6">
            <h2 className="font-medium">{s.title}</h2>
            <p className="text-sm text-neutral-600 mt-2">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
