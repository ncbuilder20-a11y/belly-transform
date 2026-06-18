import { createFileRoute } from "@tanstack/react-router";
import { LegalPageEn } from "@/components/LegalPageEn";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [{ title: "Refund Policy — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPageEn title="Refund Policy">
      <p>At Victoire Moreau, your satisfaction is our absolute priority.</p>

      <h2>14-day satisfaction guarantee</h2>
      <p>If for any reason the "Belly Transformation" program does not suit you, you can request a full refund within 14 calendar days of your purchase.</p>

      <h2>How to request a refund</h2>
      <ol>
        <li>Send an email to support@vimoreau.com</li>
        <li>Include your name and the email address used at the time of purchase</li>
        <li>No justification is required</li>
      </ol>

      <h2>Processing time</h2>
      <p>Your refund will be processed within 7 working days of receipt of your request. The refund will be made to the credit card used for the purchase.</p>

      <h2>Conditions</h2>
      <p>There are no exceptions to this policy. All purchases are eligible for a refund within the 14-day window, with no conditions and no questions asked.</p>

      <p>For any questions, contact us: support@vimoreau.com</p>
    </LegalPageEn>
  );
}
