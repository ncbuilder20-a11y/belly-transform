import { createFileRoute, Link } from "@tanstack/react-router";
import { XCircle, Mail, RefreshCw, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/paiement-echoue")({
  head: () => ({
    meta: [
      { title: "Paiement non abouti — Victoire Moreau" },
      { name: "description", content: "Votre paiement n'a pas pu être traité. En cas de débit, le montant sera automatiquement remboursé sur votre carte." },
      { name: "robots", content: "noindex, nofollow" },
    ],
    scripts: [
      {
        children: `if (typeof fbq === 'function') { fbq('track', 'Purchase', { value: 9.99, currency: 'EUR' }); }`,
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
          <Link to="/" className="font-display text-xl">Victoire Moreau</Link>
          <Link to="/" className="text-sm underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Retour
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
            Votre paiement n'a pas abouti
          </h1>
          <p className="text-base md:text-lg text-black/70 leading-relaxed mb-10">
            Nous n'avons pas pu traiter votre paiement. Aucun accès au programme n'a été ouvert.
          </p>

          <div
            className="rounded-2xl p-6 md:p-8 text-left mb-8 border"
            style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="flex gap-4 items-start mb-6">
              <RefreshCw className="w-5 h-5 mt-1 shrink-0" style={{ color: "#523400" }} />
              <div>
                <h2 className="font-display text-lg mb-1">En cas de débit sur votre carte</h2>
                <p className="text-sm text-black/70 leading-relaxed">
                  Si un montant a été temporairement prélevé, il sera automatiquement remboursé
                  sur votre carte bancaire sous 3 à 10 jours ouvrés, sans aucune démarche de votre part.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="w-5 h-5 mt-1 shrink-0" style={{ color: "#523400" }} />
              <div>
                <h2 className="font-display text-lg mb-1">Besoin d'aide ?</h2>
                <p className="text-sm text-black/70 leading-relaxed">
                  Notre équipe est à votre disposition :{" "}
                  <a href="mailto:support@vimoreau.com" className="underline">
                    support@vimoreau.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors"
              style={{ background: "#523400", color: "#fffceb" }}
            >
              Réessayer le paiement
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border transition-colors"
              style={{ borderColor: "rgba(0,0,0,0.2)", color: "#000" }}
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-3xl px-6 py-6 text-xs text-black/60 flex flex-wrap gap-x-5 gap-y-2 justify-center">
          <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
          <Link to="/confidentialite" className="hover:underline">Confidentialité</Link>
          <Link to="/cgv" className="hover:underline">CGV</Link>
          <Link to="/remboursement" className="hover:underline">Remboursement</Link>
        </div>
      </footer>
    </div>
  );
}
