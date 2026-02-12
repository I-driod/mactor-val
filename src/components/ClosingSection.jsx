import React from 'react';
import { motion } from 'framer-motion';

const ClosingSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-emerald-900 to-emerald-950 px-6 text-center relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="w-[600px] h-[600px] bg-emerald-600 rounded-full opacity-5 blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="z-10 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-12 text-6xl md:text-8xl text-emerald-500/20"
                >
                    ❤
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-light text-white mb-4"
                >
                    Thank you for choosing me in 2025.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-3xl md:text-4xl font-medium text-emerald-200 mb-16"
                >
                    I’m choosing you in every year after.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="text-emerald-400/60 text-lg"
                >
                    – With love, <span className="font-serif italic text-emerald-200">Mactor</span>
                </motion.div>
            </div>
        </section>
    );
};

export default ClosingSection;
