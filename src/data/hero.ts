import { Camera, ShieldCheck, Wallet, type LucideIcon } from "lucide-react";

export const HERO = {
  badge: "Promoteur immobilier · Bafoussam",
  title: "Terrains titrés et construction clé en main à Bafoussam",
  subtitle:
    "De l'achat du terrain à la remise des clés, suivez votre chantier en photos, même depuis l'étranger.",
  primaryCta: { label: "Voir les terrains", href: "#terrains" },
  secondaryCtaLabel: "Écrire sur WhatsApp",
  image: {
    src: "/images/hero/chantier-hero.webp",
    alt: "Chantier d'une maison en parpaings avec murs et dalle, terre rouge au sol",
  },
  trust: [
    {
      icon: ShieldCheck,
      title: "Terrains titrés",
      text: "Statut foncier indiqué sur chaque terrain.",
    },
    {
      icon: Wallet,
      title: "Paiement échelonné",
      text: "Un échéancier clair, payable en plusieurs tranches.",
    },
    {
      icon: Camera,
      title: "Suivi de chantier en ligne",
      text: "Des photos datées de l'avancement de votre projet.",
    },
  ] satisfies { icon: LucideIcon; title: string; text: string }[],
} as const;
