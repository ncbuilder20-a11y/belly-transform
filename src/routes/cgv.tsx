import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cgv")({
  head: () => ({ meta: [{ title: "Conditions Générales de Vente — Victoire Moreau" }] }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Conditions Générales de Vente (CGV)">
      <p><em>Dernière mise à jour : 13 juin 2026</em></p>

      <h2>Article 1 — Identification du vendeur</h2>
      <p>Victoire Moreau, Entrepreneur individuel<br />
        <strong>SIREN :</strong> 899 736 226<br />
        <strong>Adresse :</strong> 67 Avenue Gambetta, 92400 Courbevoie, France<br />
        <strong>TVA :</strong> FR96899736226<br />
        <strong>Email :</strong> support@vimoreau.com</p>

      <h2>Article 2 — Produit</h2>
      <p><strong>Nom du programme :</strong> Transformation du Ventre — Programme en ligne 14 jours<br />
        <strong>Description :</strong> Programme numérique de 14 jours composé de vidéos de techniques de massage, de respiration et d'exercices fonctionnels pour affiner la taille et améliorer le bien-être digestif.<br />
        <strong>Format :</strong> Accès en ligne via espace membre personnel<br />
        <strong>Durée d'accès :</strong> 30 jours à compter de la date d'achat, avec possibilité de prolongation sur demande<br />
        <strong>Bonus inclus :</strong> Méditation audio « Respiration Anti-Stress » (valeur 39 €), offerte lors de l'inscription</p>

      <h2>Article 3 — Prix</h2>
      <p>Le prix du programme est de 9,99 € TTC (toutes taxes comprises) au titre du prix de lancement. La TVA applicable est celle en vigueur en France au moment de la commande.</p>

      <h2>Article 4 — Modalités de paiement</h2>
      <p>Le paiement s'effectue exclusivement par carte bancaire (Visa, Mastercard, American Express) via la plateforme sécurisée Stripe. Le paiement est exigé en totalité au moment de la commande. L'accès au programme est ouvert immédiatement après confirmation du paiement.</p>

      <h2>Article 5 — Accès au programme</h2>
      <p>Après validation du paiement, vous recevrez un email à l'adresse fournie lors de la commande contenant vos identifiants d'accès à votre espace membre personnel. En cas de non-réception de cet email dans les 24 heures, veuillez vérifier vos spams ou contacter : support@vimoreau.com</p>

      <h2>Article 6 — Droit de rétractation et remboursement</h2>
      <p>Conformément à l'article L221-18 du Code de la consommation, vous disposez d'un délai de 14 jours calendaires à compter de la date d'achat pour exercer votre droit de rétractation, sans avoir à justifier votre demande.</p>
      <p>Pour demander un remboursement, envoyez un email à support@vimoreau.com en précisant votre nom et votre adresse email d'achat. Le remboursement sera effectué dans un délai de 7 jours ouvrés à compter de la réception de votre demande, via le même moyen de paiement utilisé lors de l'achat.</p>
      <p>Aucune condition n'est requise pour obtenir le remboursement. Tous les achats sont éligibles, sans exception.</p>

      <h2>Article 7 — Propriété intellectuelle</h2>
      <p>L'ensemble des contenus du programme (vidéos, audios, textes, méthodes) sont la propriété exclusive de Victoire Moreau et sont protégés par le droit d'auteur. Toute reproduction, diffusion ou revente est strictement interdite.</p>

      <h2>Article 8 — Responsabilité</h2>
      <p>Les résultats présentés dans le cadre du programme sont des témoignages individuels et ne constituent pas une garantie de résultats. Victoire Moreau ne saurait être tenue responsable des résultats obtenus par chaque participant.</p>
      <p>Ce programme est destiné à des personnes en bonne santé. En cas de problème médical, consultez un professionnel de santé avant de débuter.</p>

      <h2>Article 9 — Droit applicable</h2>
      <p>Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux compétents sont ceux du ressort du siège social du vendeur, sauf disposition légale contraire.</p>
      <p>Conformément aux articles L611-1 et suivants du Code de la consommation, vous pouvez recourir gratuitement à la médiation de la consommation. Médiateur compétent : CM2C — <a href="https://www.cm2c.net">www.cm2c.net</a></p>
    </LegalPage>
  );
}
