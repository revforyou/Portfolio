import React from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-8 max-w-2xl mx-auto text-center bg-neutral-900 bg-opacity-20 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-purple-300">Let's Get In Touch!</h2>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 text-base text-neutral-300">
        <a 
          href="https://www.linkedin.com/in/revanthjyothula/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        <a 
          href="mailto:jyorevanth@gmail.com" 
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
        >
          <FaEnvelope size={20} /> jyorevanth@gmail.com
        </a>

        <div className="flex items-center gap-2 text-neutral-400">
          <FaMapMarkerAlt size={20} /> New York, NY
        </div>
      </div>
    </section>
  );
};

export default Contact;
