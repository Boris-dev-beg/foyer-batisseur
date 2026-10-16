// 9500000 → "9 500 000 FCFA"
export function formatFCFA(value: number): string {
  const digits = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  return `${digits}\u00A0FCFA`;
}
