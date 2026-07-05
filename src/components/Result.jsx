import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLongDown } from "react-icons/hi2";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
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
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <motion.h2
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            {amount} {fromCurrency}
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: [0, 8, 0],
            }}
            transition={{
              duration: 0.6,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "12px 0",
            }}
          >
            <HiArrowLongDown size={34} />
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            {new Intl.NumberFormat(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(convertedAmount)}{" "}
            {toCurrency}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Result;