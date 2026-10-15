// Montants FICTIFS. Cohérents avec le Modèle Azur (24 000 000 FCFA) et le suivi de chantier.
// Par défaut : (24 000 000 − 6 000 000) / 6 = 3 000 000 FCFA par tranche.

export type PaymentStatus = "paid" | "upcoming";

export type ScheduleItem = {
  label: string;
  amount: number; // FCFA
  status: PaymentStatus;
};

export const PAIEMENT_SECTION = {
  title: "Paiement échelonné",
  subtitle: "Un échéancier clair, adapté à votre budget.",
  simulatorTitle: "Simulateur",
  fields: {
    price: "Prix du bien",
    deposit: "Apport initial",
    duration: "Durée",
  },
  resultLabel: "Tranche mensuelle estimée",
  disclaimer: "Simulation indicative, non contractuelle.",
  scheduleTitle: "Exemple d'échéancier",
} as const;

export const SIMULATOR_DEFAULTS = {
  price: 24_000_000,
  deposit: 6_000_000,
  months: 6,
} as const;

// Bornes du curseur « Prix du bien » (nécessaires au fonctionnement, absentes de la maquette)
export const SIMULATOR_LIMITS = {
  priceMin: 5_000_000,
  priceMax: 60_000_000,
  priceStep: 500_000,
} as const;

// Boutons segmentés : « 6 mois », « 12 mois », « 18 mois »
export const DURATIONS = [6, 12, 18] as const;
export const durationLabel = (months: number) => `${months} mois`;

export const PAYMENT_STATUS_LABEL: Record<PaymentStatus, string> = {
  paid: "Payé",
  upcoming: "À venir",
};

// Échéancier d'exemple (statique)
export const SCHEDULE: ScheduleItem[] = [
  { label: "Apport initial", amount: 6_000_000, status: "paid" },
  { label: "Tranche 1 sur 6", amount: 3_000_000, status: "paid" },
  { label: "Tranche 2 sur 6", amount: 3_000_000, status: "paid" },
  { label: "Tranche 3 sur 6", amount: 3_000_000, status: "paid" },
  { label: "Tranche 4 sur 6", amount: 3_000_000, status: "upcoming" },
  { label: "Tranche 5 sur 6", amount: 3_000_000, status: "upcoming" },
  { label: "Tranche 6 sur 6", amount: 3_000_000, status: "upcoming" },
];

export const PAYMENT_GUARANTEES = [
  {
    number: "01",
    title: "Contrat écrit",
    text: "Les conditions sont fixées par écrit avant tout versement.",
  },
  {
    number: "02",
    title: "Reçu à chaque versement",
    text: "Chaque paiement est confirmé par un reçu.",
  },
  {
    number: "03",
    title: "Échéancier consultable",
    text: "Consultez vos échéances à tout moment, en ligne.",
  },
] as const;
