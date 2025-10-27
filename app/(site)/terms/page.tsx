export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-50/50 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="rounded-t-2xl bg-gradient-to-r from-mountain-teal/80 to-mountain-emerald/80 px-8 py-10 text-center shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Terms of Service</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">By using this website, you agree to the following terms and conditions. Please read them carefully.</p>
        </header>
        <section className="prose max-w-none bg-white rounded-b-2xl shadow-xl px-8 py-10 mt-0">
          <h2>1. Use of Site</h2>
          <ul>
            <li>You agree to use this site for lawful purposes only.</li>
            <li>You may not use the site to transmit harmful, offensive, or illegal content.</li>
          </ul>

          <h2>2. Intellectual Property</h2>
          <ul>
            <li>All content, trademarks, and designs on this site are the property of Mile High Interface or its licensors.</li>
            <li>You may not reproduce, distribute, or create derivative works without permission.</li>
          </ul>

          <h2>3. Limitation of Liability</h2>
          <p>
            This site is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the site.
          </p>

          <h2>4. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the site constitutes acceptance of the new terms.
          </p>

          <h2>5. Contact</h2>
          <p>
            For questions about these terms, please email{' '}
            <a
              href="mailto:hello@milehighinterface.com"
              className="text-mountain-teal hover:underline font-semibold"
            >
              hello@milehighinterface.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
