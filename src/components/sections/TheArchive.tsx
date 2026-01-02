"use client";

import { memories } from "../../data/memories";
import { SpotlightImage } from "../ui/SpotlightImage";
import { motion } from "framer-motion";

export const TheArchive = () => {
    return (
        <section className="relative px-8 md:px-20 py-40">
            <div className="max-w-7xl mx-auto flex flex-col gap-40 md:gap-80">
                {memories.map((memory, index) => {
                    // Calculate asymmetrical offsets
                    const isEven = index % 2 === 0;
                    const xOffset = isEven ? "-10%" : "10%";
                    const width = isEven ? "w-full md:w-[45%]" : "w-full md:w-[45%]";
                    const alignment = isEven ? "self-start" : "self-end";

                    return (
                        <SpotlightImage
                            key={memory.id}
                            src={memory.imageUrl}
                            reason={memory.reason}
                            className={`${width} ${alignment}`}
                        />
                    );
                })}
            </div>

            {/* Finishing Statement */}
            <footer className="py-80 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                >
                    <p className="font-serif italic text-3xl md:text-5xl text-bone-white/60 leading-relaxed mb-6">
                        That’s all I put here.
                    </p>
                    <p className="font-serif italic text-3xl md:text-5xl text-bone-white/60 leading-relaxed">
                        The rest I’ll say to you.
                    </p>
                </motion.div>
            </footer>
        </section>
    );
};
