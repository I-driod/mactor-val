import React from 'react';
import { motion } from 'framer-motion';

const EmotionalLines = () => {

    const lines = [
        "You make ordinary days feel rare.",
        "You make love feel safe.",
        "You make me better."
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-emerald-950 px-6 text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-emerald-400/60 text-lg md:text-xl uppercase tracking-widest mb-20"
            >
                If I could see myself through your eyes...
            </motion.h2>

            <div className="space-y-12">
                {lines.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, delay: index * 0.5 }}
                        className="text-2xl md:text-4xl font-light text-emerald-50"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </section>
    );
};

export default EmotionalLines;
