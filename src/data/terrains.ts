
export type Terrain = {
  id: string;
  surface: number;
  quartier: string;
  price: number;
  titled: boolean;
  image: string;
  alt: string;
};

export type Range = {
  id: string;
  label: string;
  min: number;
  max: number;
};

export const TERRAINS_SECTION = {
  title: "Terrains disponibles",
  subtitle: "Filtrez par quartier, surface et budget.",
  allQuartiers: "Tous les quartiers",
  allSurfaces: "Toutes les surfaces",
  allBudgets: "Tous les budgets",
  filterButton: "Filtrer",
  titledBadge: "Titré",
  cardCta: "Je suis intéressé",
  moreCta: "Voir tous les terrains",
} as const;

export const TERRAINS: Terrain[] = [
  {
    id: "t1",
    surface: 400,
    quartier: "Tamdja",
    price: 9_500_000,
    titled: true,
    image: "/images/terrains/terrain-01.webp",
    alt: "Terrain plat en terre rouge avec une route en terre au fond",
  },
  {
    id: "t2",
    surface: 500,
    quartier: "Djeleng",
    price: 12_000_000,
    titled: true,
    image: "/images/terrains/terrain-02.webp",
    alt: "Terrain légèrement en pente avec des bananiers au fond",
  },
  {
    id: "t3",
    surface: 600,
    quartier: "Banengo",
    price: 15_000_000,
    titled: true,
    image: "/images/terrains/terrain-03.webp",
    alt: "Terrain nu avec des bornes en béton",
  },
  {
    id: "t4",
    surface: 450,
    quartier: "Kamkop",
    price: 8_500_000,
    titled: true,
    image: "/images/terrains/terrain-04.webp",
    alt: "Terrain plat à la végétation basse",
  },
  {
    id: "t5",
    surface: 800,
    quartier: "Tamdja",
    price: 22_000_000,
    titled: true,
    image: "/images/terrains/terrain-05.webp",
    alt: "Grand terrain en terre rouge avec des maisons au loin",
  },
  {
    id: "t6",
    surface: 350,
    quartier: "Djeleng",
    price: 7_500_000,
    titled: true,
    image: "/images/terrains/terrain-06.webp",
    alt: "Terrain d'angle entre deux routes en terre",
  },
];

export const terrainTitle = (t: Terrain) => `Terrain ${t.surface} m²`;

// ? Liste des quartiers
export const QUARTIERS: string[] = [
  ...new Set(TERRAINS.map((t) => t.quartier)),
].sort((a, b) => a.localeCompare(b, "fr"));

// ? Les libellés des tranches nécessaires pour que les filtres fonctionnent.
export const SURFACE_RANGES: Range[] = [
  { id: "s1", label: "Jusqu'à 400 m²", min: 0, max: 400 },
  { id: "s2", label: "De 401 à 600 m²", min: 401, max: 600 },
  { id: "s3", label: "Plus de 600 m²", min: 601, max: Infinity },
];

export const BUDGET_RANGES: Range[] = [
  { id: "b1", label: "Moins de 10 000 000 FCFA", min: 0, max: 9_999_999 },
  { id: "b2", label: "De 10 à 15 millions FCFA", min: 10_000_000, max: 15_000_000 },
  { id: "b3", label: "Plus de 15 000 000 FCFA", min: 15_000_001, max: Infinity },
];
