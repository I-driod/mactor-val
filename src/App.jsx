import React, { useState } from 'react';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Destinations from './components/Destinations';
import EmotionalLines from './components/EmotionalLines';
import ClosingSection from './components/ClosingSection';
import MemoryLane from './components/MemoryLane';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="bg-emerald-950 min-h-screen text-white selection:bg-emerald-500 selection:text-white">
      <AnimatePresence>
        {!started && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950 cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            onClick={() => setStarted(true)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="text-center"
            >
              <div className="text-4xl mb-4">💚</div>
              <p className="font-light text-emerald-200 tracking-widest uppercase text-sm">Tap to enter</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${!started ? 'overflow-hidden h-screen' : ''}`}>
        {started && <MusicPlayer />}
        <Hero />
        <Destinations />
        <EmotionalLines />
        <MemoryLane />
        <ClosingSection />
      </div>
    </div>
  );
}

export default App;
