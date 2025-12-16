import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { LoadingScreen } from "./components/LoadingScreen";
import { useEffect, useState } from "react";
import About from "./components/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div
          key="page"
          className="min-h-screen bg-slate-950"
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Header />
          <Hero />
          <About />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

