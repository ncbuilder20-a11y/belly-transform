import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({ meta: [{ title: "Mentions légales — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Mentions légales">
      <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

      <h2>Éditeur du site</h2>
      <p>
        <strong>Nom :</strong> Victoire Moreau<br />
        <strong>Forme juridique :</strong> Entrepreneur individuel<br />
        <strong>SIREN :</strong> 899 736 226<br />
        <strong>SIRET :</strong> 899 736 226 00016<br />
        <strong>Code APE :</strong> 58.11Z — Édition de livres<br />
        <strong>Numéro de TVA intracommunautaire :</strong> FR96899736226<br />
        <strong>Adresse :</strong> 67 Avenue Gambetta, 92400 Courbevoie, France<br />
        <strong>Email :</strong> support@vimoreau.com
      </p>

      <h2>Hébergement</h2>
      <p>
        <strong>Hébergeur :</strong> Vercel Inc.<br />
        <strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
        <strong>Site web :</strong> <a href="https://vercel.com">https://vercel.com</a>
      </p>
      <p>Les données des utilisateurs résidant en France sont stockées sur des serveurs situés en France, conformément au Règlement Général sur la Protection des Données (RGPD).</p>

      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble du contenu du présent site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable écrite de Victoire Moreau.</p>

      <h2>Responsabilité</h2>
      <p>Victoire Moreau s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.</p>
    </LegalPage>
  );
}
