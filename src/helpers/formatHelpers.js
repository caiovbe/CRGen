const currencyFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const percentageFormatter = Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatCurrency(value) {
  return currencyFormatter.format(value);
}

function formatPercentage(value) {
  return percentageFormatter.format(value);
}

export { formatCurrency, formatPercentage };
