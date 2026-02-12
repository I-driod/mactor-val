import React from 'react';
import { motion } from 'framer-motion';

const MemoryLane = () => {
    return (
        <section className="py-24 px-6 bg-emerald-950 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-12 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-5xl font-light text-emerald-100 italic leading-relaxed">
                        "Take a trip down memory lane..."
                    </h2>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <a
                        href="https://drive.google.com/file/d/1DKKZ3MniQPxP-0osT_cH3go_3-L61GUW/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-emerald-900/50 hover:bg-emerald-800/80 text-emerald-100 rounded-full transition-all duration-500 shadow-lg hover:shadow-emerald-500/20 flex items-center gap-4 border border-emerald-700/50 backdrop-blur-sm"
                    >
                        <span className="text-lg font-light tracking-wide">Watch Our Video</span>
                        <div className="bg-emerald-500/20 p-2 rounded-full group-hover:bg-emerald-500/30 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 pt-10 border-t border-emerald-900/30 flex flex-col items-center"
                >
                    <p className="text-emerald-400/60 text-xs uppercase tracking-[0.3em] mb-4">To my dearest Pilot</p>
                    <div className="relative">
                        <span className="font-serif text-5xl md:text-6xl text-emerald-200/90" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>
                            Mactor
                        </span>
                        <motion.span
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rounded-full"
                        ></motion.span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MemoryLane;
