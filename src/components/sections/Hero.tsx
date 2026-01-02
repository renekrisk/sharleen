"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative h-[80vh] flex flex-col justify-center px-8 md:px-20 pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeIn" }}
                className="max-w-2xl"
            >
                <h1 className="text-3xl md:text-5xl font-serif italic mb-6 text-bone-white leading-tight">
                    Princess, I made all of this for you and compiled your photos into something fun. I hope love it.
                </h1>

                <div className="space-y-4 mb-12">
                    <p className="text-xl md:text-2xl font-serif italic text-luxury-gold/60">
                        To you, Sharleen
                    </p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="text-xs tracking-[0.3em] uppercase text-bone-white"
                >
                    Click slowly.
                </motion.p>
            </motion.div>
        </section>
    );
};
