import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

const PAY_ACTION = "https://pay.vimoreau.com/connect/form";
const PAY_PARAMS: Record<string, string> = {
  site: "pay.vimoreau.com",
  amount: "249.00",
  symbol: "INR",
  vat: "0",
  riderect_success: "https://vimoreau.com/payment-failed",
  riderect_failed: "https://vimoreau.com/payment-failed",
  riderect_back: "https://vimoreau.com/in",
  billing_country: "IN",
};

export function InCheckoutPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      e.preventDefault();
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    // Notify Telegram (fire-and-forget, survives navigation via sendBeacon).
    try {
      const payload = JSON.stringify({ email: value, source: "in" });
      const blob = new Blob([payload], { type: "application/json" });
      const sent = navigator.sendBeacon?.("/api/public/lead-telegram", blob);
      if (!sent) {
        fetch("/api/public/lead-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // never block the redirect
    }

    // Fire Facebook Pixel Purchase event before redirecting to the payment page.
    try {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (!w.fbq) {
        /* eslint-disable */
        // @ts-ignore
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        // @ts-ignore
        window.fbq('init','2074805606463580');
        /* eslint-enable */
      }
      (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'Purchase', { value: 3.5, currency: 'USD' });
    } catch {
      // ignore — never block the redirect
    }

    // Defer native form submission briefly so pixel + beacon requests can leave the browser.
    e.preventDefault();
    const form = e.currentTarget;
    setTimeout(() => {
      form.submit();
    }, 350);
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

            <form
              action={PAY_ACTION}
              method="get"
              target="_top"
              onSubmit={handleSubmit}
              className="mt-6"
            >
              {Object.entries(PAY_PARAMS).map(([k, v]) => (
                <input key={k} type="hidden" name={k} value={v} />
              ))}

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
                Continue to payment →
              </button>

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
