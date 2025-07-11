import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { useState } from "react";

const ProjectCard = ({ project, onViewDetails }) => {
  const { title, description, techStack, image, link, demo, category, fullDescription, features, highlights } = project;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-white/20 dark:border-gray-700/20 hover:shadow-neon transition-all duration-300 h-full flex flex-col"
    >
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
          {category}
        </span>
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <FaEye className="text-gray-500 dark:text-gray-400 text-lg" />
        </motion.div>
      </div>

      {/* Project Image */}
      {image && (
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-xs px-3 py-1 rounded-full text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              <FaGithub className="text-base" />
              GitHub
            </motion.a>
          )}
          
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </motion.a>
          )}
          
          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            <FaEye className="text-sm" />
            View Details
          </motion.button>
        </div>
      </div>

      {/* Floating decoration */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default ProjectCard;