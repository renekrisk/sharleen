"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface RevealModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    memory: {
        imageUrl: string;
        reason: string;
    } | null;
}

export const RevealModal: React.FC<RevealModalProps> = ({ isOpen, onClose, onNext, memory }) => {
    if (!memory) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center p-4 md:p-8"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-bone-white/40 hover:text-bone-white transition-colors p-2"
                    >
                        <span className="text-xs tracking-widest uppercase">close</span>
                    </button>

                    <div className="w-full max-w-4xl flex flex-col items-center gap-12">
                        {/* Full Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full h-[60vh] md:h-[70vh] rounded-sm overflow-hidden bg-zinc-900"
                        >
                            <img
                                src={memory.imageUrl}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Reason Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="max-w-2xl text-center"
                        >
                            <p className="font-serif italic text-2xl md:text-3xl text-bone-white/90 leading-relaxed">
                                {memory.reason}
                            </p>
                        </motion.div>

                        {/* Navigation */}
                        <div className="flex items-center gap-12 pt-8">
                            <button
                                onClick={onNext}
                                className="flex items-center gap-3 text-luxury-gold/60 hover:text-luxury-gold transition-colors"
                            >
                                <span className="text-xs tracking-[0.4em] uppercase">next</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
