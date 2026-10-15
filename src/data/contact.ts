import { SITE } from "./site";
import type { IconName } from "./types";

export const CONTACT_SECTION = {
  title: "Contactez-nous",
  text: "Une question sur un terrain ou une villa ? Écrivez-nous.",
} as const;

// Les 3 lignes à gauche du formulaire (icône + texte)
export const CONTACT_INFO: { icon: IconName | "WhatsApp"; text: string }[] = [
  { icon: "WhatsApp", text: SITE.whatsappDisplay },
  { icon: "MapPin", text: SITE.address },
  { icon: "Clock", text: SITE.hours },
];

export const CONTACT_FORM = {
  fields: {
    name: "Nom complet",
    phone: "Téléphone ou WhatsApp",
    interest: "Je suis intéressé par",
    message: "Message",
  },
  submit: "Envoyer",
} as const;

export const INTEREST_OPTIONS = [
  "Un terrain",
  "Une villa clé en main",
  "Le suivi de chantier",
  "Autre",
] as const;
