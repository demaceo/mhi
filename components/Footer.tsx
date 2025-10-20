export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm text-neutral-600 flex flex-wrap items-center justify-between gap-2">
        <p>© 2025 Mile High Interface LLC. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="/privacy">Privacy</a>
          <a className="hover:underline" href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
