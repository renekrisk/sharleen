"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MidnightGallery } from "./components/sections/MidnightGallery";
import { Hero } from "./components/sections/Hero";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading state...
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen text-bone-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[500] bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-px bg-luxury-gold/40 animate-pulse" />
              <p className="text-[10px] tracking-[0.5em] uppercase text-luxury-gold/60">
                Finding the light
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Hero />
            <MidnightGallery />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
