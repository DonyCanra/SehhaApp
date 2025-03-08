const formatPrice = (amount, currency = "USD", locale = "en-US") => {
  if (isNaN(amount)) return "Invalid price";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

// Using the function
// console.log(formatPrice(1000)); // $1,000.00 (Default: USD)
// console.log(formatPrice(1000, "IDR")); // Rp1.000,00 (Indonesian Rupiah)
// console.log(formatPrice(1000, "EUR")); // €1,000.00 (Euro)
// console.log(formatPrice(1000, "JPY")); // ¥1,000 (Yen tanpa desimal)
// console.log(formatPrice("abc")); // Invalid price

export default formatPrice;
