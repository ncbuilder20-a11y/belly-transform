import { createFileRoute } from "@tanstack/react-router";

import { InCheckoutPage } from "@/components/InCheckoutPage";

export const Route = createFileRoute("/in/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Waist Transformation | Victoire Moreau" },
      { name: "description", content: "Enter your email to access the 14-day program for ₹249." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: InCheckoutPage,
});