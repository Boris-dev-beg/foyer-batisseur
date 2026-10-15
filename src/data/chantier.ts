// Données FICTIVES du suivi de chantier (même projet partout : Modèle Azur · Tamdja).
// Images : /public/images/chantier/ — ⚠️ garde-les COHÉRENTES avec les étapes :
//   2026-03-20 : fondations seules (pas de murs)
//   2026-05-15 : murs en cours de montage, sans toit
//   2026-09-28 : murs terminés, sans toit
//   2026-10-14 : charpente en bois posée, sans tôle

export type StepStatus = "done" | "current" | "upcoming";

export type ChantierStep = {
  name: string;
  status: StepStatus;
  date: string;
};

export type ChantierPhoto = {
  date: string;
  caption: string;
  image: string;
  alt: string;
};

export const CHANTIER_SECTION = {
  title: "Suivi de chantier",
  subtitle: "Suivez l'avancement de votre construction, étape par étape.",
  progressLabel: "Avancement global",
  badge: "En cours",
  photosTitle: "Dernières photos",
  paymentTitle: "Prochain paiement",
} as const;

export const STEP_STATUS_LABEL: Record<StepStatus, string> = {
  done: "Terminé",
  current: "En cours",
  upcoming: "À venir",
};

export const CHANTIER = {
  project: "Modèle Azur · Tamdja",
  progress: 60, // pourcentage
  steps: [
    { name: "Fondations", status: "done", date: "Mars 2026" },
    { name: "Élévation des murs", status: "done", date: "Mai 2026" },
    { name: "Toiture", status: "current", date: "Octobre 2026" },
    { name: "Finitions", status: "upcoming", date: "Décembre 2026" },
    { name: "Livraison", status: "upcoming", date: "Janvier 2027" },
  ] satisfies ChantierStep[],
  photos: [
    {
      date: "14 oct. 2026",
      caption: "Charpente, façade nord",
      image: "/images/chantier/2026-10-14.webp",
      alt: "Charpente en bois posée sur les murs en parpaings, façade nord",
    },
    {
      date: "28 sept. 2026",
      caption: "Murs terminés, façade sud",
      image: "/images/chantier/2026-09-28.webp",
      alt: "Murs en parpaings terminés, sans toiture, façade sud",
    },
    {
      date: "15 mai 2026",
      caption: "Murs en cours, façade est",
      image: "/images/chantier/2026-05-15.webp",
      alt: "Murs en parpaings en cours de montage, façade est",
    },
    {
      date: "20 mars 2026",
      caption: "Fondations terminées",
      image: "/images/chantier/2026-03-20.webp",
      alt: "Fondations en parpaings terminées sur terre rouge",
    },
  ] satisfies ChantierPhoto[],
  nextPayment: {
    label: "Tranche 4 sur 6",
    amount: 3_000_000, // FCFA
    date: "30 oct. 2026",
    linkLabel: "Voir l'échéancier",
    href: "#paiement",
  },
} as const;
