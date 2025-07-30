import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants";
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg';

const roles = [
  'Software Engineer',
  'Data Engineer',
  'Machine Learning Engineer',
  'Software Engineer',
];

const typingSpeed = 100; // Speed of typing
const backspaceSpeed = 50; // Speed of backspacing
const delayBetweenRoles = 1000; // Delay before starting to backspace

const Hero = () => {
  const [text, setText] = useState(''); // Start with an empty string
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // Control cursor visibility

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        if (roleIndex < roles.length - 1) {
          setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        } else {
          setShowCursor(false); // Hide cursor after the last role
        }
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
        setCharIndex(0);
      }

      if (roleIndex < roles.length - 1 || !isDeleting) {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? backspaceSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const cursorBlinking = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink cursor every 500ms
    return () => clearInterval(cursorBlinking);
  }, []);

  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Revanth Jyothula
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {text}
              <span
                className={`ml-1 inline-block w-2 bg-gray-800 ${showCursor ? 'opacity-100' : 'opacity-0'} 
                transition-opacity duration-300 ease-in-out`}
              >
                &nbsp;
              </span>
            </motion.span>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="my-2 max-w-xl py-6 font-light lg:text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center pr-30">
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              src={profile} 
              alt="profile" 
              width={450}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
