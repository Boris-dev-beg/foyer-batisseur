export type VillaKind = "Plain-pied" | "À étage";

export type Villa = {
  id: string;
  name: string;
  kind: VillaKind;
  bedrooms: number;
  surface: number;
  priceFrom: number;
  image: string;
  alt: string;
};

export const VILLAS_SECTION = {
  title: "Villas clé en main",
  subtitle: "Choisissez un modèle, nous construisons.",
  allTab: "Toutes",
  cardCta: "Voir le modèle",
  priceLabel: "À partir de",
  banner: {
    title: "Vous avez déjà un terrain ?",
    text: "Nous construisons la villa de votre choix sur votre terrain.",
    cta: "Demander un devis",
  },
} as const;

// ? Onglets de filtre
export const VILLA_TABS: ("Toutes" | VillaKind)[] = [
  "Toutes",
  "Plain-pied",
  "À étage",
];

export const VILLAS: Villa[] = [
  {
    id: "v1",
    name: "Modèle Ébène",
    kind: "Plain-pied",
    bedrooms: 3,
    surface: 120,
    priceFrom: 18_000_000,
    image: "/images/villas/ebene.jpg",
    alt: "Villa de plain-pied en parpaings enduits avec toit en tôle et petit jardin",
  },
  {
    id: "v2",
    name: "Modèle Azur",
    kind: "Plain-pied",
    bedrooms: 4,
    surface: 150,
    priceFrom: 24_000_000,
    image: "/images/villas/azur.jpg",
    alt: "Villa de plain-pied avec véranda, murs enduits et jardin",
  },
  {
    id: "v3",
    name: "Modèle Savane",
    kind: "À étage",
    bedrooms: 5,
    surface: 210,
    priceFrom: 38_000_000,
    image: "/images/villas/savane.jpg",
    alt: "Villa à étage avec balcon, murs enduits et toit en tôle",
  },
];

// ? Subtilte
export const villaSubtitle = (v: Villa) => `${v.kind} · ${v.bedrooms} chambres`;
