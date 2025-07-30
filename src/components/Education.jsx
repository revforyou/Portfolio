import React from 'react';
import { motion } from 'framer-motion';
import nyuLogo from '../assets/nyu-logo.png';
import sardarLogo from '../assets/sardar-logo.jpeg';

const EDUCATION_DATA = [
  {
    logo: nyuLogo,
    institution: "New York University",
    degree: "Master of Science in Computer Engineering",
    gpa: "3.7/4, Cum Laude",
    coursework: "Machine Learning, Computer Systems Architecture, Data Structures and Algorithms, Advanced Machine Learning, Deep Learning, Programming for Data Science, Computer Vision, Big Data, ML Operating Systems",
    extracurriculars: "Graduate Orientation Leader, Peer Mentor at NYU Tandon, NYU Run Club, Intramural Basketball and Volleyball",
    dates: "August 2023 - May 2025",
  },
  {
    logo: sardarLogo,
    institution: "Sardar Patel Institute of Technology",
    degree: "Bachelor of Technology in Electronics and Telecommunication",
    gpa: "3.4/4",
    coursework: "DBMS, Python, Artificial Intelligence, Computer Networks, Computer Architecture, Soft Computing",
    extracurriculars: "SPIT Football Team 2019-2023, Volleyball Team 2023, Head of PR Enactus 2022, Event Head Oculus Fest 2021",
    dates: "August 2019 - July 2023",
  },
];

const Education = () => {
  return (
    <div className="pb-16">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 text-purple-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-neutral-900 rounded-xl p-6 gap-6 shadow-md hover:shadow-purple-700 transition-shadow"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={edu.logo}
              alt={edu.institution}
              className="w-32 h-32 object-contain rounded-xl border border-purple-600 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-purple-300">{edu.institution}</h3>
                <span className="text-m italic text-neutral-300">({edu.dates})</span>
              </div>
              <p className="text-lg font-semibold text-neutral-50 mb-2">{edu.degree}, GPA: {edu.gpa}</p>

              <p className="text-base text-neutral-200 mb-1">
                <span className="font-bold text-neutral-100">Relevant Coursework:</span> {edu.coursework}
              </p>

              <p className="text-base text-neutral-200 mb-1">
                <span className="font-bold text-neutral-100">Extracurriculars:</span> {edu.extracurriculars}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
