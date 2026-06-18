import { createFileRoute } from "@tanstack/react-router";
import { LegalPageEn } from "@/components/LegalPageEn";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Sale — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPageEn title="Terms and Conditions of Sale">
      <p><em>Last updated: 13 June 2026</em></p>

      <h2>Article 1 — Seller identification</h2>
      <p>Victoire Moreau, sole proprietor<br />
        <strong>SIREN:</strong> 899 736 226<br />
        <strong>Address:</strong> 67 Avenue Gambetta, 92400 Courbevoie, France<br />
        <strong>VAT:</strong> FR96899736226<br />
        <strong>Email:</strong> support@vimoreau.com</p>

      <h2>Article 2 — Product</h2>
      <p><strong>Program name:</strong> Belly Transformation — 14-day online program<br />
        <strong>Description:</strong> 14-day digital program made up of videos covering massage techniques, breathing exercises and functional movement to refine the waist and improve digestive wellbeing.<br />
        <strong>Format:</strong> Online access via a personal member area<br />
        <strong>Access duration:</strong> 30 days from the purchase date, with extension available on request<br />
        <strong>Bonus included:</strong> "Anti-Stress Breathing" audio meditation (worth €39), offered upon registration</p>

      <h2>Article 3 — Price</h2>
      <p>The price of the program is €9.99 incl. tax as a launch price. The applicable VAT is the one in force in France at the time of order.</p>

      <h2>Article 4 — Payment terms</h2>
      <p>Payment is made exclusively by credit card (Visa, Mastercard, American Express) via the secure Stripe platform. Full payment is required at the time of order. Access to the program is opened immediately after payment confirmation.</p>

      <h2>Article 5 — Access to the program</h2>
      <p>After payment is validated, you will receive an email at the address provided when ordering containing your login details for your personal member area. If you do not receive this email within 24 hours, please check your spam folder or contact: support@vimoreau.com</p>

      <h2>Article 6 — Right of withdrawal and refund</h2>
      <p>In accordance with article L221-18 of the French Consumer Code, you have 14 calendar days from the date of purchase to exercise your right of withdrawal, without having to justify your request.</p>
      <p>To request a refund, send an email to support@vimoreau.com indicating your name and the email address used for the purchase. The refund will be issued within 7 working days of receipt of your request, using the same payment method used for the purchase.</p>
      <p>No condition is required to obtain a refund. All purchases are eligible, without exception.</p>

      <h2>Article 7 — Intellectual property</h2>
      <p>All content of the program (videos, audios, texts, methods) is the exclusive property of Victoire Moreau and is protected by copyright. Any reproduction, distribution or resale is strictly prohibited.</p>

      <h2>Article 8 — Liability</h2>
      <p>The results presented in connection with the program are individual testimonials and do not constitute a guarantee of results. Victoire Moreau cannot be held responsible for the results obtained by each participant.</p>
      <p>This program is intended for healthy individuals. In case of a medical condition, consult a healthcare professional before starting.</p>

      <h2>Article 9 — Applicable law</h2>
      <p>These terms are governed by French law. In the event of a dispute, the competent courts are those of the seller's registered office, unless legal provisions provide otherwise.</p>
      <p>In accordance with articles L611-1 et seq. of the French Consumer Code, you may use consumer mediation free of charge. Competent mediator: CM2C — <a href="https://www.cm2c.net">www.cm2c.net</a></p>
    </LegalPageEn>
  );
}
