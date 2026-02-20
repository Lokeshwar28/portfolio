import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCardEnhanced = ({ project, onViewDetails }) => {
  const { title, description, techStack, image, link, demo, category } =
    project;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
      className="group bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-6 shadow-subtle border border-slate-200/50 dark:border-slate-700/50 hover:shadow-neon transition-all duration-300 h-full flex flex-col"
    >
      {/* Category Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-accent to-highlight text-white rounded-full">
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
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-textPrimary group-hover:text-accent dark:group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-textSecondary mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 text-xs px-3 py-1 rounded-full text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700/50"
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
              className="flex items-center gap-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
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
              className="flex items-center gap-2 bg-gradient-to-r from-accent to-highlight hover:from-cyan-500 hover:to-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </motion.a>
          )}

          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-accent/20 to-highlight/20 dark:from-accent/30 dark:to-highlight/30 border border-accent/50 hover:bg-gradient-to-r hover:from-accent hover:to-highlight text-accent dark:text-cyan-300 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            <FaEye className="text-sm" />
            View Details
          </motion.button>
        </div>
      </div>

      {/* Floating decoration */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-accent to-highlight rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

ProjectCardEnhanced.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
    demo: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProjectCardEnhanced;
