// ? Configuration générale de la démo

export const SITE = {
  brand: "Foyer Bâtisseur",
  tagline: "Promoteur immobilier · Bafoussam",
  creator: "MANGWA Boris",
  year: 2026,

  whatsappNumber: "237698902641",
  whatsappDisplay: "+237 698 90 26 41",

  address: "Bafoussam, Région de l'Ouest, Cameroun",
  addressShort: "Bafoussam, Cameroun",
  hours: "Lundi – Samedi, 8h – 18h",
  paymentNote: "Paiement par Mobile Money ou virement bancaire.",
} as const;

// ? Préfixe ajouté à tous les messages WhatsApp 
export const DEMO_TAG = "[Démo Foyer Bâtisseur]";

export const WHATSAPP_MESSAGES = {
  // ? (hero, FAQ, navbar)
  general: `${DEMO_TAG} Bonjour, je souhaite avoir plus d'informations.`,
  // ? (section Villas)
  quote: `${DEMO_TAG} Bonjour, je souhaite un devis pour construire sur mon terrain.`,
  // ? c'est le message d'un futur CLIENT pour TOI (développeur)
  prospect:
    "Bonjour, j'ai vu la démo Foyer Bâtisseur et je souhaite un site pour mon entreprise.",
} as const;

// Bandeau fixe en haut du site 
export const DEMO_BANNER = {
  text: `Démo créée par ${SITE.creator}. Un site comme celui-ci pour votre entreprise ?`,
  cta: "Écrivez-moi sur WhatsApp",
  mention: "Démo · données fictives",
} as const;

export const FOOTER = {
  navigationTitle: "Navigation",
  contactTitle: "Contact",
  legalLeft: `© ${SITE.year} ${SITE.brand} — Démo, données fictives`,
  legalRight: `Site créé par ${SITE.creator.toUpperCase()}`,
} as const;
