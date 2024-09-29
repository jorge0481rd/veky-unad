export const formatCurrency = (amount, includeCurrency = true) => {
  const options = includeCurrency
    ? {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    : { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 };

  return new Intl.NumberFormat("en-US", options).format(amount);
};
