"use client";

import React from "react";
import { memories } from "../../data/memories";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScatteredMomentProps {
    memoryIndex: number;
    onOpen: (index: number) => void;
    className?: string;
    speed?: number;
}

const ScatteredMoment: React.FC<ScatteredMomentProps> = ({ memoryIndex, onOpen, className, speed = 0.05 }) => {
    const memory = memories[memoryIndex] || memories[0];
    const containerRef = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 200}px`, `${speed * 200}px`]);

    return (
        <motion.div
            ref={containerRef}
            style={{ y }}
            whileHover={{ scale: 0.98 }}
            className={`group cursor-pointer relative ${className}`}
            onClick={() => onOpen(memoryIndex)}
        >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 border border-white/5 shadow-2xl">
                <img
                    src={memory.imageUrl}
                    alt=""
                    className="w-full h-full object-cover filter blur-[15px] group-hover:blur-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
        </motion.div>
    );
};

export const ScatteredIntro = ({ onOpen }: { onOpen: (index: number) => void }) => {
    return (
        <section className="relative px-8 md:px-20 py-40 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-12 md:gap-y-20 items-end">
                    {/* Top Row */}
                    <ScatteredMoment memoryIndex={0} onOpen={onOpen} className="md:translate-y-20" speed={0.08} />
                    <ScatteredMoment memoryIndex={1} onOpen={onOpen} className="md:-translate-y-10" speed={0.04} />
                    <ScatteredMoment memoryIndex={2} onOpen={onOpen} className="md:translate-y-10" speed={0.06} />
                    <ScatteredMoment memoryIndex={3} onOpen={onOpen} className="md:-translate-y-20" speed={0.02} />

                    {/* Bottom Row */}
                    <ScatteredMoment memoryIndex={4} onOpen={onOpen} className="md:-translate-y-40" speed={0.05} />
                    <ScatteredMoment memoryIndex={5} onOpen={onOpen} className="md:translate-y-10" speed={0.07} />
                    <ScatteredMoment memoryIndex={6} onOpen={onOpen} className="md:-translate-y-10" speed={0.03} />
                    <ScatteredMoment memoryIndex={7} onOpen={onOpen} className="md:translate-y-20" speed={0.09} />
                </div>
            </div>
        </section>
    );
};
