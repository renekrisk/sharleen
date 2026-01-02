"use client";

import { memories } from "../../data/memories";
import { ParallaxImage } from "../ui/ParallaxImage";
import { motion } from "framer-motion";

export const EditorialGrid = ({ onOpen }: { onOpen: (index: number) => void }) => {
    // Grouping memories into clusters for better visual rhythm
    const chunks = [];
    for (let i = 0; i < memories.length; i += 4) {
        chunks.push(memories.slice(i, i + 4));
    }

    return (
        <section className="px-8 md:px-20 py-20">
            {chunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="mb-32">
                    {/* Subtle separator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.1 }}
                        viewport={{ once: true }}
                        className="h-px w-full bg-bone-white mb-20"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {chunk[0] && (
                            <ParallaxImage
                                src={chunk[0].imageUrl}
                                alt=""
                                className="md:col-span-7 h-[400px] md:h-[600px] rounded-sm"
                                onClick={() => onOpen(chunkIndex * 4)}
                            />
                        )}
                        <div className="md:col-span-5 flex flex-col gap-8">
                            {chunk[1] && (
                                <ParallaxImage
                                    src={chunk[1].imageUrl}
                                    alt=""
                                    className="h-[300px] md:h-[350px] rounded-sm"
                                    speed={0.05}
                                    onClick={() => onOpen(chunkIndex * 4 + 1)}
                                />
                            )}
                            {chunk[2] && (
                                <div className="flex gap-4">
                                    <ParallaxImage
                                        src={chunk[2].imageUrl}
                                        alt=""
                                        className="flex-1 h-[200px] md:h-[250px] rounded-sm"
                                        speed={-0.05}
                                        onClick={() => onOpen(chunkIndex * 4 + 2)}
                                    />
                                    {chunk[3] && (
                                        <ParallaxImage
                                            src={chunk[3].imageUrl}
                                            alt=""
                                            className="flex-1 h-[200px] md:h-[250px] rounded-sm translate-y-8"
                                            speed={0.1}
                                            onClick={() => onOpen(chunkIndex * 4 + 3)}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Finishing padding */}
            <div className="h-40" />
        </section>
    );
};
