const formatToARGMoney = new Intl.NumberFormat("es-AR", {
  useGrouping: true,
});

export function formatMoney(amountCents) {
  return `$${formatToARGMoney.format((amountCents * 100).toFixed(0))}`;
}
