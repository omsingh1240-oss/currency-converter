import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loader() {
  return (
    <motion.div
      className="loader"
      role="status"
      aria-live="polite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      >
        <AiOutlineLoading3Quarters
          className="loader-icon"
          size={32}
        />
      </motion.div>

      <p>Fetching live exchange rates...</p>
    </motion.div>
  );
}

export default Loader;