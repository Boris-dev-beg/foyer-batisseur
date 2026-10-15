/** Tranche mensuelle = (prix − apport) / nombre de mois. Retourne 0 si les valeurs sont invalides. */
export function computeInstallment(
  price: number,
  deposit: number,
  months: number,
): number {
  if (months <= 0 || price <= 0) return 0;
  const remaining = Math.max(price - Math.max(deposit, 0), 0);
  return Math.round(remaining / months);
}
