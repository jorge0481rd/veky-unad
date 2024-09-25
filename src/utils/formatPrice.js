export const formatPrice = (amount, includeCurrency = true) => {
  const options = includeCurrency
    ? { style: "currency", currency: "USD" }
    : { style: "decimal" };

  return new Intl.NumberFormat("en-US", options).format(amount);
};
