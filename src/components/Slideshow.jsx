import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import nyu from '../assets/nyu.jpg';
import dance from '../assets/dance.jpeg';
import guitar from '../assets/guitar.jpeg';

const images = [
  nyu,dance,guitar
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='relative w-full h-96'> 
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className='absolute inset-0 object-cover w-full h-full rounded-2xl'
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              filter: currentIndex === index ? 'blur(0px)' : 'blur(10px)',
            }}
            transition={{ duration: 1 }} // Transition duration
          />
        ))}
      </div>
    );
  };
  
  export default Slideshow;