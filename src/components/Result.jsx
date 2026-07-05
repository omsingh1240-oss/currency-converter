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
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -15,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <h2>Ready to Convert</h2>

          <p>
            Enter an amount, choose your currencies
            and click <strong>Convert Currency</strong>.
          </p>
        </motion.div>
      ) : (
        <motion.div
          key={`${amount}-${fromCurrency}-${toCurrency}-${convertedAmount}`}
          className="result"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
        >
          <h2>
            {amount} {fromCurrency}
          </h2>

          <h3>⇩</h3>

          <h1>
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