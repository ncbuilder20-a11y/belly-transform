import { createFileRoute } from "@tanstack/react-router";
import { LegalPageEn } from "@/components/LegalPageEn";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({ meta: [{ title: "Legal Notice — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPageEn title="Legal Notice">
      <p>In accordance with the provisions of French Act No. 2004-575 of 21 June 2004 on confidence in the digital economy, users of the site are informed of the identity of the various parties involved in its creation and monitoring.</p>

      <h2>Site publisher</h2>
      <p>
        <strong>Name:</strong> Victoire Moreau<br />
        <strong>Legal form:</strong> Sole proprietorship (Entrepreneur individuel)<br />
        <strong>SIREN:</strong> 899 736 226<br />
        <strong>SIRET:</strong> 899 736 226 00016<br />
        <strong>APE code:</strong> 58.11Z — Book publishing<br />
        <strong>Intra-community VAT number:</strong> FR96899736226<br />
        <strong>Address:</strong> 67 Avenue Gambetta, 92400 Courbevoie, France<br />
        <strong>Email:</strong> support@vimoreau.com
      </p>

      <h2>Hosting</h2>
      <p>
        <strong>Host:</strong> Vercel Inc.<br />
        <strong>Address:</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA<br />
        <strong>Website:</strong> <a href="https://vercel.com">https://vercel.com</a>
      </p>
      <p>Data of users residing in the European Union is stored on servers located in the EU, in accordance with the General Data Protection Regulation (GDPR).</p>

      <h2>Intellectual property</h2>
      <p>All content on this site (texts, images, videos, logos) is protected by copyright. Any reproduction, representation, modification, publication or adaptation of all or part of the elements of the site, by any means or process, is prohibited without the prior written authorisation of Victoire Moreau.</p>

      <h2>Liability</h2>
      <p>Victoire Moreau strives to ensure the accuracy and up-to-date nature of the information published on this site. However, no guarantee can be given as to the accuracy, precision or completeness of the information made available on this site.</p>
    </LegalPageEn>
  );
}
