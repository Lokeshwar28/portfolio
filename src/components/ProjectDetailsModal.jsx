import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCheck,
  FaStar,
} from "react-icons/fa";

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.5 },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white dark:bg-secondary rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 dark:bg-secondary/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 p-6 rounded-t-2xl z-10">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-accent to-highlight text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                    {project.duration && (
                      <div className="flex items-center gap-1 text-slate-600 dark:text-textMuted">
                        <FaCalendarAlt className="text-sm" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-textPrimary mb-2">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 dark:text-textSecondary">
                    {project.description}
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="ml-4 p-2 text-slate-500 hover:text-slate-700 dark:text-textMuted dark:hover:text-textSecondary hover:bg-slate-100 dark:hover:bg-tertiary rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-xl" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Project Image */}
              {project.image && (
                <motion.div
                  className="relative overflow-hidden rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              )}

              {/* Full Description */}
              {project.fullDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-textPrimary mb-3">
                    About This Project
                  </h3>
                  <p className="text-slate-600 dark:text-textSecondary leading-relaxed">
                    {project.fullDescription}
                  </p>
                </motion.div>
              )}

              {/* Features */}
              {project.features && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-textPrimary mb-4">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-tertiary/50 rounded-lg border border-slate-200 dark:border-slate-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <FaCheck className="text-highlight mt-1 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-textSecondary text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Highlights */}
              {project.highlights && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-textPrimary mb-4">
                    Project Highlights
                  </h3>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <FaStar className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-textSecondary text-sm">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-textPrimary mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg font-medium border border-cyan-200 dark:border-cyan-700/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    View Source Code
                  </motion.a>
                )}

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent to-highlight hover:from-cyan-500 hover:to-teal-500 text-white font-semibold rounded-xl shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectDetailsModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    fullDescription: PropTypes.string,
    duration: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    link: PropTypes.string,
    demo: PropTypes.string,
    category: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetailsModal;
