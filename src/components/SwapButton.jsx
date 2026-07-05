import { motion } from "framer-motion";
import { HiArrowsRightLeft } from "react-icons/hi2";

function SwapButton({ onClick }) {
  return (
    <motion.button
      type="button"
      className="swap-btn"
      onClick={onClick}
      aria-label="Swap currencies"
      title="Swap currencies"
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.92,
        rotate: 180,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <HiArrowsRightLeft size={22} />
    </motion.button>
  );
}

export default SwapButton;