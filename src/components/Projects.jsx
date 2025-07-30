import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold text-purple-300"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-neutral-900 p-4 rounded-2xl shadow-lg hover:shadow-purple-700 hover:scale-105 transition-transform duration-300 flex flex-col"
            style={{ minHeight: '460px' }} // Adjust height as needed for consistency
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-purple-300 mb-2">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-3 flex-grow">
              {project.description.length > 200
                ? project.description.slice(0, 200) + "..."
                : project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-neutral-800 text-purple-300 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Spacer pushes buttons to the bottom */}
            <div className="mt-auto">
              <div className="flex justify-center mb-3 space-x-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-purple-300 px-4 py-1.5 text-sm font-semibold rounded hover:bg-gray-700 transition-colors duration-300"
                  >
                    Live
                  </a>
                )}
              </div>

              {project.sourceCode && (
                <div className="flex justify-center mb-3">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-purple-300 px-4 py-1.5 text-sm font-semibold rounded hover:bg-gray-700 transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              )}

              {project.publication && (
                <div className="flex justify-center">
                  <a
                    href={project.publication}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-purple-300 px-4 py-1.5 text-sm font-semibold rounded hover:bg-gray-700 transition-colors duration-300"
                  >
                    Paper
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
