export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-50/50 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="rounded-t-2xl bg-gradient-to-r from-mountain-teal/80 to-mountain-emerald/80 px-8 py-10 text-center shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Privacy Policy</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">Your privacy is important to us. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
        </header>
        <section className="prose max-w-none bg-white dark:bg-brand-900 rounded-b-2xl shadow-xl px-8 py-10 mt-0 dark:prose-invert">
          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Analytics:</strong> We use privacy-friendly analytics to understand site usage. No personally identifiable information is collected.</li>
            <li><strong>Contact Forms:</strong> If you contact us, we collect your name, email, and message for the purpose of responding to your inquiry.</li>
          </ul>

          <h2>2. Cookies</h2>
          <p>
            We use only essential cookies for site functionality and minimal analytics. You can disable cookies in your browser settings.
          </p>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To respond to your inquiries</li>
            <li>To improve our website and services</li>
            <li>To analyze site usage (in aggregate, non-identifiable form)</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties, except as required by law.
          </p>

          <h2>5. Your Rights</h2>
          <ul>
            <li>You may request to view, update, or delete your personal data by contacting us.</li>
            <li>You may opt out of analytics tracking at any time.</li>
          </ul>

          <h2>6. Contact</h2>
          <p>
            For privacy-related questions, please email{' '}
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
