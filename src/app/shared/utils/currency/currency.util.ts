export function rupiahCurrency(amount: string | number): string {
  const isString = typeof amount === "string";
  const validAmount = isString ? Number(amount) : amount;

  return `Rp${validAmount.toLocaleString("id-ID")}`;
}
