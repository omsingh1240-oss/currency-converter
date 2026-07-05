import { motion } from "framer-motion";

import CurrencyCard from "./components/CurrencyCard";

import "./App.css";

function App() {
  return (
    <main className="app">
      <div className="grid-background"></div>

      <div className="glow glow-one"></div>

      <div className="glow glow-two"></div>

      <motion.div
        className="app-content"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <header className="hero">
          <span className="hero-badge">
            Live Exchange Rates
          </span>

          <h1>
            Live Currency Converter
          </h1>

          <p>
            Fast, accurate and real-time currency
            conversion powered by live exchange
            rates.
          </p>
        </header>

        <CurrencyCard />
      </motion.div>
    </main>
  );
}

export default App;