"use client";

import { useState, useEffect } from "react";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { GrainOverlay } from "./components/ui/GrainOverlay";
import { Hero } from "./components/sections/Hero";
import { ScatteredIntro } from "./components/sections/ScatteredIntro";
import { EditorialGrid } from "./components/sections/EditorialGrid";
import { RevealModal } from "./components/ui/RevealModal";
import { memories } from "./data/memories";
import { motion } from "framer-motion";

function App() {
  const [selectedMemoryIndex, setSelectedMemoryIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewedCount, setViewedCount] = useState<Set<number>>(new Set());
  const [showEnding, setShowEnding] = useState(false);

  // Sync viewed count with state
  const markAsViewed = (index: number) => {
    setViewedCount((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  useEffect(() => {
    if (viewedCount.size >= 80) {
      // Small delay before showing ending after last closure
      if (!isModalOpen) {
        setShowEnding(true);
      }
    }
  }, [viewedCount, isModalOpen]);

  const handleOpen = (index: number) => {
    setSelectedMemoryIndex(index);
    setIsModalOpen(true);
    markAsViewed(index);
  };

  const handleNext = () => {
    // Pick a random unviewed memory if possible, else pick any random
    let nextIndex;
    const unviewed = Array.from({ length: 80 }, (_, i) => i).filter(i => !viewedCount.has(i));

    if (unviewed.length > 0) {
      nextIndex = unviewed[Math.floor(Math.random() * unviewed.length)];
    } else {
      nextIndex = Math.floor(Math.random() * 80);
    }

    setSelectedMemoryIndex(nextIndex);
    markAsViewed(nextIndex);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (showEnding) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center p-8 text-center z-[300]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <p className="font-serif italic text-3xl md:text-5xl text-bone-white/90 leading-relaxed mb-6">
            That’s all I put here.
          </p>
          <p className="font-serif italic text-3xl md:text-5xl text-bone-white/90 leading-relaxed">
            The rest I’ll say to you.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="relative isolate min-h-screen bg-background">
        <GrainOverlay />

        {/* Dynamic Ambiance */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-luxury-gold/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-luxury-blue/5 blur-[120px] rounded-full" />
        </div>

        <Hero />

        <ScatteredIntro onOpen={handleOpen} />

        <EditorialGrid onOpen={handleOpen} />

        <RevealModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onNext={handleNext}
          memory={selectedMemoryIndex !== null ? memories[selectedMemoryIndex] : null}
        />

      </div>
    </SmoothScroll>
  );
}

export default App;
