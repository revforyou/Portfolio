import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const greetings = [
  'Hello', 'Bonjour', 'Hola', 'Ciao', 'नमस्ते', 'سلام',
  'Здравствуйте', 'こんにちは', 'Guten Tag', 'Salve',
  '您好', 'Olá', '안녕', 'Sveiki',
];

const Greetings = ({ onFinish }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const controls = useAnimation();
  const rippleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 175); // Fast cycle

    const timeout = setTimeout(async () => {
      clearInterval(interval);

      // Add ripple
      if (rippleRef.current) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = rippleRef.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${rect.width / 2 - size / 2}px`;
        ripple.style.top = `${rect.height / 2 - size / 2}px`;
        rippleRef.current.appendChild(ripple);

        ripple.addEventListener('animationend', () => ripple.remove());
      }

      // Fade out
      await new Promise((res) => setTimeout(res, 500));
      await controls.start({ opacity: 0, transition: { duration: 0.6 } });

      onFinish();
    }, 2000); // Show greetings for 3s

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish, controls]);

  return (
    <motion.div
      className="relative flex justify-center items-center h-screen bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={controls}
      ref={rippleRef}
    >
      <motion.h1
        key={currentGreeting}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-5xl font-bold text-white"
      >
        {greetings[currentGreeting]}
      </motion.h1>

      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          pointer-events: none;
          transform: scale(0);
          animation: ripple-animation 0.7s ease-out forwards;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(3.5);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Greetings;
