import React, { useState } from 'react';
import { motion } from 'framer-motion';

const destinations = [
    {
        id: 'amsterdam',
        name: 'Amsterdam',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 'paris',
        name: 'Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'capetown',
        name: 'Cape Town',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 'abuja',
        name: 'Abuja',
        image: 'https://images.unsplash.com/photo-1707406534088-09c4b6958cfa?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 'anywhere',
        name: 'Anywhere with you',
        image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80',
    },
];

const Destinations = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="min-h-screen py-20 px-6 bg-emerald-900 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Overlay transition based on selection */}
            {selected && (
                <motion.div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-50 transition-opacity duration-1000"
                    style={{ backgroundImage: `url(${destinations.find(d => d.id === selected)?.image})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
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

            {/* Playlist Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-20 w-full max-w-4xl flex flex-col items-center gap-8 relative z-10"
            >
                <div className="text-center space-y-4">
                    <h3 className="text-3xl md:text-5xl font-light text-emerald-200" style={{ fontFamily: "serif" }}>
                        Happy Valentine's Day Pilot
                    </h3>
                    <p className="text-emerald-400/80 font-light italic">
                        Our soundtrack...
                    </p>
                </div>

                <div className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/50 border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-sm">
                    <iframe
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        frameBorder="0"
                        height="450"
                        style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', background: 'transparent' }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.music.apple.com/nl/playlist/happy-valentines-day-pilot/pl.u-ZmblVLWTVl620l2?l=en-GB"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Destinations;
