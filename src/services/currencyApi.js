const BASE_URL = "https://open.er-api.com/v6/latest";

export async function getExchangeRate(fromCurrency, toCurrency) {
  try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`);

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate.");
    }

    const data = await response.json();

    const rate = data.rates[toCurrency];

    if (!rate) {
      throw new Error("Currency not found.");
    }

    return rate;
  } catch (error) {
    throw new Error(error.message);
  }
}