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
                <h1 className="text-5xl md:text-8xl font-sans tracking-tight mb-8 text-bone-white">
                    For Sharleen.
                </h1>

                <div className="space-y-2 mb-12">
                    <p className="text-xl md:text-2xl text-bone-white/80 font-serif italic">
                        I put your photos here.
                    </p>
                    <p className="text-xl md:text-2xl text-bone-white/80 font-serif italic">
                        Behind each one is something I notice.
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
