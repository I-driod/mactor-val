import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 2.5, // Slow pace between lines
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.5, ease: 'easeOut' },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800 text-white px-6">

            {/* Background Particles/Glow */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-10"
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px] opacity-10"></div>
            </div>

            <motion.div
                className="text-center z-10 max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="text-xl md:text-2xl font-light text-emerald-100/90 mb-8" variants={itemVariants}>
                    2025 brought you to me.
                </motion.p>

                <motion.p className="text-2xl md:text-3xl font-light text-white mb-8" variants={itemVariants}>
                    Thank you for all that you are, <span className="border-b border-emerald-400/50 pb-1 inline-block">Pilot</span>.
                </motion.p>

                <motion.p className="text-xl md:text-2xl font-light text-emerald-100/80 mb-16" variants={itemVariants}>
                    The next valentine is going to be anywhere you want.
                </motion.p>

                <motion.h1
                    className="text-5xl md:text-7xl font-sans tracking-tight text-white drop-shadow-lg"
                    variants={itemVariants}
                >
                    Happy Valentine's Day.
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className="mt-24 animate-bounce text-emerald-200/50 text-sm"
                >
                    Scroll to explore
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
