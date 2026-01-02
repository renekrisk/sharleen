"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
    onClick?: () => void;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className, speed = 0.1, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden cursor-pointer group ${className}`}
            onClick={onClick}
        >
            <motion.img
                src={src}
                alt={alt}
                style={{ y: y }}
                className="w-full h-full object-cover transition-all duration-1000 blur-[15px] group-hover:blur-0 group-hover:brightness-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />
        </div>
    );
};
