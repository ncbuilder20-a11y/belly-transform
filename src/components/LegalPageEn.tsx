import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPageEn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream, #faf6f1)" }}>
      <header className="border-b border-black/10">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <Link to="/en" className="font-display text-xl">Victoire Moreau</Link>
          <Link to="/en" className="text-sm underline">← Back</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-3xl md:text-4xl mb-8">{title}</h1>
        <article className="prose prose-neutral max-w-none text-[15px] leading-relaxed space-y-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:underline">
          {children}
        </article>
      </main>
      <footer className="border-t border-black/10 mt-16">
        <div className="mx-auto max-w-3xl px-6 py-6 text-xs text-black/60 flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/legal-notice" className="hover:underline">Legal notice</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy policy</Link>
          <Link to="/terms" className="hover:underline">Terms of sale</Link>
          <Link to="/refund-policy" className="hover:underline">Refund policy</Link>
        </div>
      </footer>
    </div>
  );
}
