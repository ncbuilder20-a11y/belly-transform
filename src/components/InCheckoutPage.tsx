import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

const PAY_URL = "https://pay.vimoreau.com/connect/form";
const PAY_PARAMS: Record<string, string> = {
  site: "pay.vimoreau.com",
  amount: "249",
  symbol: "INR",
  vat: "0",
  riderect_success: "https://vimoreau.com/payment-failed",
  riderect_failed: "https://vimoreau.com/payment-failed",
  riderect_back: "https://vimoreau.com/in",
  billing_country: "IN",
};

function buildPayUrl(email: string, orderId: string) {
  const params = new URLSearchParams({ ...PAY_PARAMS, order_id: orderId, billing_email: email });
  return `${PAY_URL}?${params.toString()}`;
}

export function InCheckoutPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);
  const orderIdRef = useRef<string>(`${Date.now()}${Math.floor(Math.random() * 1000)}`);

  useEffect(() => {
    if (!orderIdRef.current) {
      orderIdRef.current = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    }
  }, []);

  const notifyLead = (value: string) => {
    try {
      const payload = JSON.stringify({ email: value, source: "in" });
      const blob = new Blob([payload], { type: "application/json" });
      const sent = typeof navigator !== "undefined" && navigator.sendBeacon
        ? navigator.sendBeacon("/api/public/lead-telegram", blob)
        : false;
      if (!sent) {
        fetch("/api/public/lead-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch { /* never block redirect */ }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      e.preventDefault();
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitting(true);
    const orderId = orderIdRef.current || `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const payUrl = buildPayUrl(value, orderId);
    setFallbackUrl(payUrl);
    notifyLead(value);
  };

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--color-bg)" }}>
      <header className="border-b border-[rgba(193,122,90,0.12)]">
        <div className="mx-auto max-w-3xl px-5 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <Link to="/in" className="font-display text-base md:text-xl tracking-tight" style={{ color: "var(--color-ink)" }}>
            Victoire Moreau
          </Link>
          <Link to="/in" className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
            ← Back
          </Link>
        </div>
      </header>

      <section className="flex-1 flex items-start sm:items-center justify-center px-5 py-10 md:py-16">
        <div className="w-full max-w-md bg-white shadow-sm border" style={{ borderColor: "rgba(193,122,90,0.15)" }}>
          <div className="p-6 sm:p-8">
            <p className="label-eyebrow" style={{ color: "var(--color-terra)" }}>Almost there</p>
            <h1 className="mt-2 font-display text-2xl sm:text-[1.7rem] leading-tight">
              Enter your email to continue
            </h1>
            <p className="mt-3 text-sm" style={{ color: "var(--color-ink-muted)" }}>
              Next step is a secure payment of ₹249. Right after, you'll receive an email with
              access to your personal cabinet, the schedule of live classes and Victoire's free bonuses.
            </p>

            <form onSubmit={handleSubmit} action={PAY_URL} method="get" target="_top" className="mt-6">
              {Object.entries(PAY_PARAMS).map(([k, v]) => (
                <input key={k} type="hidden" name={k} value={v} />
              ))}
              <input type="hidden" name="order_id" value={orderIdRef.current || ""} />

              <label htmlFor="checkout-email" className="label-eyebrow">Email address</label>
              <div className="mt-2">
                <input
                  id="checkout-email"
                  name="billing_email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-12 px-3 text-base border bg-white outline-none focus:border-[var(--color-terra)]"
                  style={{ borderColor: "var(--input)" }}
                />
              </div>
              {error && <p className="mt-2 text-sm" style={{ color: "var(--color-terra-dark)" }}>{error}</p>}

              <div className="mt-5 p-3 border flex items-baseline gap-2" style={{ background: "var(--color-surface)", borderColor: "rgba(193,122,90,0.25)" }}>
                <span className="font-display text-2xl" style={{ color: "var(--color-terra)" }}>₹249</span>
                <span className="text-sm line-through" style={{ color: "var(--color-ink-muted)" }}>₹2499</span>
                <span className="ml-auto text-xs" style={{ color: "var(--color-ink-muted)" }}>One-time · Instant access</span>
              </div>

              <button type="submit" className="btn-primary btn-primary-hover w-full mt-5 justify-center">
                {submitting ? "Redirecting…" : "Continue to payment →"}
              </button>

              {fallbackUrl && (
                <p className="mt-4 text-center text-sm">
                  <a href={fallbackUrl} target="_top" rel="noopener" className="underline font-medium" style={{ color: "var(--color-terra)" }}>
                    Click here if the payment page didn't open →
                  </a>
                </p>
              )}

              <p className="mt-3 text-xs text-center" style={{ color: "var(--color-ink-muted)" }}>
                🔒 Secure payment · 14-day money-back guarantee
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}