import { createFileRoute, Link } from "@tanstack/react-router";
import { XCircle, Mail, RefreshCw, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/payment-failed")({
  head: () => ({
    meta: [
      { title: "Payment unsuccessful — Victoire Moreau" },
      { name: "description", content: "Your payment could not be processed. If your card was charged, the amount will be automatically refunded." },
      { name: "robots", content: "noindex, nofollow" },
    ],
    scripts: [
      {
        children: `if (typeof fbq === 'function') { fbq('track', 'Purchase', { value: 9.99, currency: 'USD' }); }`,
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--color-cream, #faf6f1)" }}
    >
      <header className="border-b border-black/10">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <Link to="/en" className="font-display text-xl">Victoire Moreau</Link>
          <Link to="/en" className="text-sm underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl text-center">
          <div
            className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-8"
            style={{ background: "#fde8e8" }}
          >
            <XCircle className="w-12 h-12" style={{ color: "#b91c1c" }} strokeWidth={1.5} />
          </div>

          <h1 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
            Your payment was unsuccessful
          </h1>
          <p className="text-base md:text-lg text-black/70 leading-relaxed mb-10">
            We couldn't process your payment. No access to the program has been granted.
          </p>

          <div
            className="rounded-2xl p-6 md:p-8 text-left mb-8 border"
            style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="flex gap-4 items-start mb-6">
              <RefreshCw className="w-5 h-5 mt-1 shrink-0" style={{ color: "#523400" }} />
              <div>
                <h2 className="font-display text-lg mb-1">If your card was charged</h2>
                <p className="text-sm text-black/70 leading-relaxed">
                  If an amount was temporarily debited, it will be automatically refunded
                  to your card within 3 to 10 business days, with no action required from you.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="w-5 h-5 mt-1 shrink-0" style={{ color: "#523400" }} />
              <div>
                <h2 className="font-display text-lg mb-1">Need help?</h2>
                <p className="text-sm text-black/70 leading-relaxed">
                  Our team is here for you:{" "}
                  <a href="mailto:support@vimoreau.com" className="underline">
                    support@vimoreau.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/en"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors"
              style={{ background: "#523400", color: "#fffceb" }}
            >
              Try payment again
            </Link>
            <Link
              to="/en"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border transition-colors"
              style={{ borderColor: "rgba(0,0,0,0.2)", color: "#000" }}
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-3xl px-6 py-6 text-xs text-black/60 flex flex-wrap gap-x-5 gap-y-2 justify-center">
          <Link to="/legal-notice" className="hover:underline">Legal notice</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/refund-policy" className="hover:underline">Refund</Link>
        </div>
      </footer>
    </div>
  );
}
