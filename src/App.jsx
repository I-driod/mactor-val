import { useState } from 'react';
import { motion } from 'framer-motion';
import { triggerConfetti } from './utils/confetti';
import './index.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const handleYesClick = () => {
    setAccepted(true);
    triggerConfetti();
  };

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100) - (window.innerWidth / 2 - 50);
    const y = Math.random() * (window.innerHeight - 100) - (window.innerHeight / 2 - 50);
    setNoPosition({ x, y });
    setHoverCount(count => count + 1);
  };

  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  const getNoButtonText = () => {
    return phrases[Math.min(hoverCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        {accepted ? (
          <div className="success-message">
            <motion.h1
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Yay! I knew it! ❤
            </motion.h1>
            <p className="subtitle">You've made me the happiest person!</p>
            <motion.img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q1Y2E4MmIyZGVlNzEwY2Q1NzAzYzAzZDJjZTRjMTc4YjI5ZDAyMyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26BRv0ThflsKCqMbu/giphy.gif"
              alt="Happy Bear"
              className="success-gif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '20px' }}
            />
          </div>
        ) : (
          <>
            <motion.h1
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Will you be my Valentine?
            </motion.h1>

            <motion.img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODk2MGFlY2EzNzY0ZGIzNTc0ODQ5YzFjZDI4Y2I5ZDJjZTRjMTc4YjI5ZDAyMyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/MDJ9IbxxvDUQM/giphy.gif"
              alt="Cute Bear"
              className="cute-gif"
              style={{ maxWidth: '200px', marginBottom: '20px', borderRadius: '10px' }}
            />

            <div className="button-group">
              <motion.button
                className="btn-yes"
                onClick={handleYesClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ fontSize: `${1.2 + hoverCount * 0.1}rem` }} // Grows as No is clicked
              >
                Yes
              </motion.button>

              <motion.button
                className="btn-no"
                onClick={moveNoButton}
                onMouseEnter={moveNoButton}
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {getNoButtonText()}
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;
