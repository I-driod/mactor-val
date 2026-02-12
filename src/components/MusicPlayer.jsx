import React from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/50 bg-emerald-900/20 backdrop-blur-sm"
      >
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="175"
          style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/song/pov/1553944490?autoplay=1"
          title="Apple Music Player"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
