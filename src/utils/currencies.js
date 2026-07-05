export const currencies = [
  {
    value: "USD",
    label: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
  },
  {
    value: "EUR",
    label: "Euro",
    symbol: "€",
    flag: "🇪🇺",
  },
  {
    value: "GBP",
    label: "British Pound",
    symbol: "£",
    flag: "🇬🇧",
  },
  {
    value: "INR",
    label: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
  },
  {
    value: "JPY",
    label: "Japanese Yen",
    symbol: "¥",
    flag: "🇯🇵",
  },
  {
    value: "AUD",
    label: "Australian Dollar",
    symbol: "A$",
    flag: "🇦🇺",
  },
  {
    value: "CAD",
    label: "Canadian Dollar",
    symbol: "C$",
    flag: "🇨🇦",
  },
  {
    value: "CHF",
    label: "Swiss Franc",
    symbol: "CHF",
    flag: "🇨🇭",
  },
  {
    value: "CNY",
    label: "Chinese Yuan",
    symbol: "¥",
    flag: "🇨🇳",
  },
  {
    value: "SGD",
    label: "Singapore Dollar",
    symbol: "S$",
    flag: "🇸🇬",
  },
  {
    value: "AED",
    label: "UAE Dirham",
    symbol: "د.إ",
    flag: "🇦🇪",
  },
  {
    value: "NZD",
    label: "New Zealand Dollar",
    symbol: "NZ$",
    flag: "🇳🇿",
  },
  {
    value: "HKD",
    label: "Hong Kong Dollar",
    symbol: "HK$",
    flag: "🇭🇰",
  },
  {
    value: "SEK",
    label: "Swedish Krona",
    symbol: "kr",
    flag: "🇸🇪",
  },
  {
    value: "NOK",
    label: "Norwegian Krone",
    symbol: "kr",
    flag: "🇳🇴",
  },
  {
    value: "DKK",
    label: "Danish Krone",
    symbol: "kr",
    flag: "🇩🇰",
  },
  {
    value: "ZAR",
    label: "South African Rand",
    symbol: "R",
    flag: "🇿🇦",
  },
  {
    value: "BRL",
    label: "Brazilian Real",
    symbol: "R$",
    flag: "🇧🇷",
  },
  {
    value: "MXN",
    label: "Mexican Peso",
    symbol: "$",
    flag: "🇲🇽",
  },
  {
    value: "KRW",
    label: "South Korean Won",
    symbol: "₩",
    flag: "🇰🇷",
  },
];

export const currencyOptions = currencies.map((currency) => ({
  value: currency.value,
  label: `${currency.flag} ${currency.label} (${currency.value})`,
}));