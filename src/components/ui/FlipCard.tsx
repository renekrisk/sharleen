"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
    memory: {
        id: string;
        imageUrl: string;
        reason: string;
        intro: string;
        verse: string;
    };
    isFlipped: boolean;
    isInLight: boolean;
    onFlip: () => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({ memory, isFlipped, isInLight, onFlip }) => {
    const [isHovered, setIsHovered] = useState(false);
    const showDetail = isHovered || isInLight || isFlipped;

    return (
        <div
            className="relative w-full h-full perspective-1000 cursor-pointer group"
            onClick={() => isInLight && onFlip()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-sm overflow-hidden bg-zinc-900 border border-white/5"
                >
                    <motion.img
                        src={memory.imageUrl}
                        alt=""
                        animate={{
                            filter: showDetail ? "blur(0px) brightness(1.1)" : "blur(15px) brightness(0.6)",
                            scale: showDetail ? 1 : 1.05
                        }}
                        transition={{ duration: 0.7 }}
                        className="w-full h-full object-cover"
                    />
                    {/* Personal Reason Overlay */}
                    <motion.div
                        animate={{ opacity: showDetail ? 1 : 0.4 }}
                        className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
                    >
                        <p className="font-serif italic text-lg text-bone-white leading-tight">
                            {memory.reason.startsWith("I love how") ? (
                                <>
                                    <span className="opacity-30 text-xs block mb-1">I love how</span>
                                    <span>{memory.reason.replace("I love how ", "")}</span>
                                </>
                            ) : (
                                memory.reason
                            )}
                        </p>
                    </motion.div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-sm overflow-hidden bg-zinc-950 border border-luxury-gold/10 flex flex-col items-center justify-center p-8 text-center"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                    <div className="relative z-10 space-y-4">
                        <p className="text-luxury-gold/80 text-xs font-serif italic tracking-wide">
                            {memory.intro}
                        </p>
                        <div className="h-px w-6 bg-luxury-gold/20 mx-auto" />

                        <p className="font-serif italic text-base md:text-lg text-bone-white/90 leading-relaxed whitespace-pre-wrap">
                            {memory.verse.split('\n—')[0]}
                        </p>

                        {memory.verse.includes('\n—') && (
                            <p className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold/60 mt-4">
                                {memory.verse.split('\n—')[1].trim()}
                            </p>
                        )}

                        <button className="pt-8 text-[9px] tracking-[0.4em] uppercase text-bone-white/20 hover:text-bone-white/40 transition-colors">
                            Tap to return
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
