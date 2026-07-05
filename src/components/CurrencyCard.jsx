import { useState } from "react";

import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton";
import Result from "./Result";
import Loader from "./Loader";

import { getExchangeRate } from "../services/currencyApi";

function CurrencyCard() {
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");

  const [toCurrency, setToCurrency] = useState("INR");

  const [convertedAmount, setConvertedAmount] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleSwapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    setConvertedAmount(null);
    setError("");
  }

  async function handleConvertCurrency() {
    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount.");
      setConvertedAmount(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const rate = await getExchangeRate(
        fromCurrency,
        toCurrency
      );

      setConvertedAmount(Number(amount) * rate);
    } catch (error) {
      setError(
        error.message || "Something went wrong."
      );
      setConvertedAmount(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="converter-card">
      <div className="input-group">
        <label htmlFor="amount">
          Amount
        </label>

        <input
          id="amount"
          className="amount-input"
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleConvertCurrency();
            }
          }}
        />
      </div>

      <div className="currency-row">
        <CurrencySelect
          label="From"
          value={fromCurrency}
          onChange={setFromCurrency}
        />

        <SwapButton
          onClick={handleSwapCurrencies}
        />

        <CurrencySelect
          label="To"
          value={toCurrency}
          onChange={setToCurrency}
        />
      </div>

      <button
        className="convert-btn"
        onClick={handleConvertCurrency}
        disabled={loading}
      >
        {loading
          ? "Converting..."
          : "Convert Currency"}
      </button>

      {loading ? (
        <Loader />
      ) : (
        <Result
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          convertedAmount={convertedAmount}
        />
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </section>
  );
}

export default CurrencyCard;