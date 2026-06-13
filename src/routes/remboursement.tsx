import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/remboursement")({
  head: () => ({ meta: [{ title: "Politique de remboursement — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Politique de remboursement">
      <p>Chez Victoire Moreau, votre satisfaction est notre priorité absolue.</p>

      <h2>Garantie satisfait ou remboursé — 14 jours</h2>
      <p>Si pour quelque raison que ce soit le programme « Transformation du Ventre » ne vous convient pas, vous pouvez demander un remboursement intégral dans les 14 jours calendaires suivant votre achat.</p>

      <h2>Comment demander un remboursement ?</h2>
      <ol>
        <li>Envoyez un email à support@vimoreau.com</li>
        <li>Indiquez votre nom et l'adresse email utilisée lors de l'achat</li>
        <li>Aucune justification n'est nécessaire</li>
      </ol>

      <h2>Délai de traitement</h2>
      <p>Votre remboursement sera traité dans un délai de 7 jours ouvrés à compter de la réception de votre demande. Le remboursement sera effectué sur la carte bancaire utilisée lors de l'achat.</p>

      <h2>Conditions</h2>
      <p>Il n'existe aucune exception à cette politique. Tous les achats sont éligibles au remboursement dans le délai de 14 jours, sans condition ni question.</p>

      <p>Pour toute question, contactez-nous : support@vimoreau.com</p>
    </LegalPage>
  );
}
