import React, { useState } from 'react';
import { motion } from 'framer-motion';

const destinations = [
    {
        id: 'paris',
        name: 'Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', // Paris
    },
    {
        id: 'santorini',
        name: 'Santorini',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4c2ce5f5e?auto=format&fit=crop&w=800&q=80', // Santorini
    },
    {
        id: 'maldives',
        name: 'Maldives',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80', // Maldives
    },
    {
        id: 'tokyo',
        name: 'Tokyo',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80', // Tokyo
    },
    {
        id: 'anywhere',
        name: 'Anywhere with you',
        image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80', // Abstract Nature/Couple
    },
];

const Destinations = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="min-h-screen py-20 px-6 bg-emerald-900 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Overlay transition based on selection */}
            {selected && (
                <motion.div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-20 blur-sm transition-opacity duration-1000"
                    style={{ backgroundImage: `url(${destinations.find(d => d.id === selected)?.image})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                />
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl text-white font-light text-center mb-16 z-10"
            >
                Where do you want next Valentine’s to be?
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full z-10">
                {destinations.map((dest) => (
                    <motion.div
                        key={dest.id}
                        onClick={() => setSelected(dest.id)}
                        className={`relative group cursor-pointer overflow-hidden rounded-xl h-80 ${selected === dest.id ? 'ring-2 ring-emerald-400' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Image */}
                        <img
                            src={dest.image}
                            alt={dest.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                            <h3 className="text-2xl font-light text-white mb-2">{dest.name}</h3>
                            {selected === dest.id && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-emerald-500/20 backdrop-blur-md px-4 py-1 rounded-full text-emerald-200 text-sm border border-emerald-400/30"
                                >
                                    Booked.
                                </motion.span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
