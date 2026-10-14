export const whatsappUrl =
  "https://wa.me/?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

export const navigationLinks = [
  { label: "Accueil", href: "#accueil", current: true },
  { label: "Terrains", href: "#terrains", current: false },
  { label: "Villas", href: "#villas", current: false },
  { label: "Suivi de chantier", href: "#suivi", current: false },
  { label: "Paiement", href: "#paiement", current: false },
  { label: "Contact", href: "#contact", current: false },
] as const;

export const heroBenefits = [
  {
    id: "title",
    title: "Terrains titrés",
    description: "Statut foncier indiqué sur chaque terrain.",
  },
  {
    id: "payment",
    title: "Paiement échelonné",
    description: "Un échéancier clair, payable en plusieurs tranches.",
  },
  {
    id: "tracking",
    title: "Suivi du chantier en ligne",
    description: "Des photos datées à l’avancement de votre projet.",
  },
] as const;
