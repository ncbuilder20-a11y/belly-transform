import { createFileRoute } from "@tanstack/react-router";
import { LegalPageEn } from "@/components/LegalPageEn";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPageEn title="Privacy Policy">
      <p><em>Last updated: 13 June 2026</em></p>
      <p>This privacy policy describes how Victoire Moreau ("we") collects, uses and protects your personal data in accordance with the General Data Protection Regulation (GDPR — EU Regulation 2016/679).</p>

      <h2>Data controller</h2>
      <p>Victoire Moreau, sole proprietor<br />
        <strong>Address:</strong> 67 Avenue Gambetta, 92400 Courbevoie, France<br />
        <strong>Email:</strong> support@vimoreau.com</p>

      <h2>Data collected</h2>
      <p>When using this site and purchasing the online program, we collect the following data:</p>
      <ul>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Payment data (processed by Stripe — we do not store card numbers)</li>
        <li>Browsing data (via the Facebook Pixel)</li>
      </ul>

      <h2>Purposes of processing</h2>
      <ul>
        <li>Order processing and access to the program</li>
        <li>Sending information related to your order</li>
        <li>Improving our services and targeted advertising (Facebook Pixel)</li>
      </ul>

      <h2>Legal basis</h2>
      <p>The processing of your data is based on the performance of the contract (purchase of the program) and, for advertising cookies, on your explicit consent.</p>

      <h2>Retention period</h2>
      <p>Your data is kept for 3 years from your last purchase, in accordance with French legal obligations.</p>

      <h2>Your rights</h2>
      <p>Under the GDPR, you have the following rights:</p>
      <ul>
        <li>Right of access to your data</li>
        <li>Right of rectification</li>
        <li>Right to erasure ("right to be forgotten")</li>
        <li>Right to object to processing</li>
        <li>Right to data portability</li>
      </ul>
      <p>To exercise these rights, contact us at: support@vimoreau.com. You also have the right to lodge a complaint with the CNIL (<a href="https://www.cnil.fr">www.cnil.fr</a>).</p>

      <h2>Facebook Pixel</h2>
      <p>This site uses the Facebook Pixel (Meta Platforms Ireland Limited) for advertising purposes. This pixel collects anonymised browsing data to measure the effectiveness of our ads. You can withdraw your consent at any time via the cookie banner on the site.</p>

      <h2>Payment — Stripe</h2>
      <p>Payments are processed by Stripe Payments Europe Ltd. We do not store any banking data. Stripe's privacy policy is available at <a href="https://stripe.com/privacy">https://stripe.com/privacy</a>.</p>
    </LegalPageEn>
  );
}
