import type { Range, Terrain } from "../data/terrains";
import { BUDGET_RANGES, SURFACE_RANGES } from "../data/terrains";
import type { Villa, VillaKind } from "../data/villas";

export type TerrainFilters = {
  quartier: string;
  surfaceId: string;
  budgetId: string;
};

const inRange = (value: number, range?: Range) =>
  !range || (value >= range.min && value <= range.max);

export function filterTerrains(list: Terrain[], f: TerrainFilters): Terrain[] {
  const surface = SURFACE_RANGES.find((r) => r.id === f.surfaceId);
  const budget = BUDGET_RANGES.find((r) => r.id === f.budgetId);
  return list.filter(
    (t) =>
      (!f.quartier || t.quartier === f.quartier) &&
      inRange(t.surface, surface) &&
      inRange(t.price, budget),
  );
}

export function filterVillas(list: Villa[], tab: "Toutes" | VillaKind): Villa[] {
  return tab === "Toutes" ? list : list.filter((v) => v.kind === tab);
}
