import React from 'react';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Destinations from './components/Destinations';
import EmotionalLines from './components/EmotionalLines';
import ClosingSection from './components/ClosingSection';

function App() {
  return (
    <div className="bg-emerald-950 min-h-screen text-white selection:bg-emerald-500 selection:text-white">
      <MusicPlayer />
      <Hero />
      <Destinations />
      <EmotionalLines />
      <ClosingSection />
    </div>
  );
}

export default App;
