"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { memories } from "../../data/memories";
import { FlipCard } from "../ui/FlipCard";

const GalleryItem = ({ memory, index, spotlightX, spotlightY, activeCardId, handleInteraction }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInLight, setIsInLight] = useState(false);
    const [proximity, setProximity] = useState(0); // 0 = dark, 1 = focal point

    useEffect(() => {
        const updateProximity = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const dist = Math.sqrt(
                    Math.pow(centerX - spotlightX.get(), 2) +
                    Math.pow(centerY - spotlightY.get(), 2)
                );

                // Sharpen range: 350px
                setIsInLight(dist < 350);

                // Proximity range for opacity (fades out over 600px)
                const p = Math.max(0, 1 - dist / 600);
                setProximity(p);
            }
        };

        const interval = setInterval(updateProximity, 50);
        return () => clearInterval(interval);
    }, [spotlightX, spotlightY]);

    return (
        <div
            ref={ref}
            className={`relative aspect-[3/4] md:aspect-[4/5] ${index % 2 === 0 ? 'md:translate-y-8' : ''} ${index % 3 === 0 ? 'lg:scale-105' : 'lg:scale-95'}`}
            style={{ opacity: proximity > 0.1 ? proximity : 0 }}
        >
            <FlipCard
                memory={memory}
                isFlipped={activeCardId === memory.id}
                isInLight={isInLight}
                onFlip={() => handleInteraction(memory.id)}
            />
        </div>
    );
};

export const MidnightGallery = () => {
    const [activeCardId, setActiveCardId] = useState<string | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const spotlightY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        const handleInput = (e: MouseEvent) => {
            if (!isMobile) {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }
        };

        const handleScroll = () => {
            if (isMobile) {
                mouseX.set(window.innerWidth / 2);
                mouseY.set(window.innerHeight / 2);
            }
        };

        if (isMobile) {
            handleScroll(); // Init mobile position
            window.addEventListener("scroll", handleScroll);
        } else {
            window.addEventListener("mousemove", handleInput);
        }

        return () => {
            window.removeEventListener("mousemove", handleInput);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleInteraction = (id: string) => {
        setActiveCardId(id === activeCardId ? null : id);
    };

    return (
        <div className="relative min-h-screen bg-background overflow-hidden selection:bg-luxury-gold/20 pb-64">
            {/* The Spotlight Mask Overlay */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply"
                style={{
                    background: `radial-gradient(circle 350px at ${spotlightX}px ${spotlightY}px, transparent 0%, rgba(5, 5, 5, 1) 100%)`
                }}
            />

            {/* Ambient Grain Layer */}
            <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]" />

            <section className="relative z-10 px-6 py-20 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24">
                    {memories.map((memory, index) => (
                        <GalleryItem
                            key={memory.id}
                            memory={memory}
                            index={index}
                            spotlightX={spotlightX}
                            spotlightY={spotlightY}
                            activeCardId={activeCardId}
                            handleInteraction={handleInteraction}
                        />
                    ))}
                </div>

                {/* Ending Screen Trigger */}
                <div className="mt-64 text-center border-t border-white/5 pt-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        <p className="font-serif italic text-2xl md:text-3xl text-bone-white/60">
                            That’s all I put here.
                        </p>
                        <p className="font-serif italic text-2xl md:text-3xl text-bone-white/60">
                            The rest I’ll say to you.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
