"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface SpotlightImageProps {
    src: string;
    reason: string;
    className?: string;
}

export const SpotlightImage: React.FC<SpotlightImageProps> = ({ src, reason, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Calculate distance from center [0, 1] -> [-1, 1] then absolute
    // When yProgress is 0.5, it's in the center.
    const distance = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
    const smoothDistance = useSpring(distance, { stiffness: 100, damping: 30 });

    // Effects based on distance from center
    const opacity = useTransform(smoothDistance, [0, 0.4], [1, 0.1]);
    const scale = useTransform(smoothDistance, [0, 0.4], [1.05, 0.95]);
    const blur = useTransform(smoothDistance, [0, 0.4], ["blur(0px)", "blur(20px)"]);
    const textOpacity = useTransform(smoothDistance, [0, 0.1], [1, 0]);

    return (
        <div ref={containerRef} className={`relative flex flex-col items-center gap-8 ${className}`}>
            <motion.div
                style={{
                    opacity,
                    scale,
                    filter: blur
                }}
                className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 shadow-2xl"
            >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>

            <motion.div
                style={{ opacity: textOpacity }}
                className="max-w-md text-center"
            >
                <p className="font-serif italic text-xl md:text-2xl text-bone-white leading-relaxed">
                    {reason.startsWith("I love how") ? (
                        <>
                            <span className="opacity-30 text-lg md:text-xl block mb-1">I love how</span>
                            <span>{reason.replace("I love how ", "")}</span>
                        </>
                    ) : reason.startsWith("I love you because") ? (
                        <>
                            <span className="opacity-30 text-lg md:text-xl block mb-1">I love you because</span>
                            <span>{reason.replace("I love you because ", "")}</span>
                        </>
                    ) : (
                        reason
                    )}
                </p>
            </motion.div>
        </div>
    );
};
