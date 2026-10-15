// 9500000 → "9 500 000 FCFA" (espaces insécables : le montant ne se coupe jamais en deux lignes)
export function formatFCFA(value: number): string {
  const digits = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  return `${digits}\u00A0FCFA`;
}
