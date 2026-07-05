import { motion, AnimatePresence } from "framer-motion";

function Result({
  amount,
  fromCurrency,
  toCurrency,
  convertedAmount,
}) {
  return (
    <AnimatePresence mode="wait">
      {convertedAmount === null ? (
        <motion.div
          key="empty"
          className="result"
          aria-live="polite"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Ready to Convert</h2>

          <p>
            Enter an amount, select your currencies,
            and click <strong>Convert Currency</strong>.
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="result"
          className="result"
          aria-live="polite"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <h2>
            {amount} {fromCurrency}
          </h2>

          <p className="equals-text">equals</p>

          <h1 className="converted-value">
            {new Intl.NumberFormat(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(convertedAmount)}{" "}
            {toCurrency}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Result;