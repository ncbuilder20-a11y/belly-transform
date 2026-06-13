import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({ meta: [{ title: "Politique de confidentialité — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p><em>Dernière mise à jour : 13 juin 2026</em></p>
      <p>La présente politique de confidentialité décrit la manière dont Victoire Moreau (ci-après « nous ») collecte, utilise et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).</p>

      <h2>Responsable du traitement</h2>
      <p>Victoire Moreau, Entrepreneur individuel<br />
        <strong>Adresse :</strong> 67 Avenue Gambetta, 92400 Courbevoie, France<br />
        <strong>Email :</strong> support@vimoreau.com</p>

      <h2>Données collectées</h2>
      <p>Dans le cadre de l'utilisation de ce site et de l'achat du programme en ligne, nous collectons les données suivantes :</p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Données de paiement (traitées par Stripe — nous ne stockons pas les numéros de carte)</li>
        <li>Données de navigation (via le Pixel Facebook)</li>
      </ul>

      <h2>Finalités du traitement</h2>
      <ul>
        <li>Traitement des commandes et accès au programme</li>
        <li>Envoi d'informations relatives à votre commande</li>
        <li>Amélioration de nos services et publicités ciblées (Pixel Facebook)</li>
      </ul>

      <h2>Base légale</h2>
      <p>Le traitement de vos données repose sur l'exécution du contrat (achat du programme) et, pour les cookies publicitaires, sur votre consentement explicite.</p>

      <h2>Durée de conservation</h2>
      <p>Vos données sont conservées pendant une durée de 3 ans à compter de votre dernier achat, conformément aux obligations légales françaises.</p>

      <h2>Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d'accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement (« droit à l'oubli »)</li>
        <li>Droit d'opposition au traitement</li>
        <li>Droit à la portabilité des données</li>
      </ul>
      <p>Pour exercer ces droits, contactez-nous à : support@vimoreau.com. Vous avez également le droit de déposer une réclamation auprès de la CNIL (<a href="https://www.cnil.fr">www.cnil.fr</a>).</p>

      <h2>Pixel Facebook</h2>
      <p>Ce site utilise le Pixel Facebook (Meta Platforms Ireland Limited) à des fins publicitaires. Ce pixel collecte des données de navigation anonymisées pour mesurer l'efficacité de nos publicités. Vous pouvez retirer votre consentement à tout moment via le bandeau cookies présent sur le site.</p>

      <h2>Paiement — Stripe</h2>
      <p>Les paiements sont traités par Stripe Payments Europe Ltd. Nous ne stockons aucune donnée bancaire. La politique de confidentialité de Stripe est disponible sur <a href="https://stripe.com/fr/privacy">https://stripe.com/fr/privacy</a>.</p>
    </LegalPage>
  );
}
