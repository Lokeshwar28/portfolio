import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const { title, fullDescription, techStack, image, link, demo, category, features = [], highlights = [], gallery = [] } = project;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <FaTimes className="text-gray-500 dark:text-gray-400" />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                  {category}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {fullDescription || project.description}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Main Image */}
              {image && (
                <div className="mb-8">
                  <img
                    src={image}
                    alt={`${title} preview`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Gallery */}
              {gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${title} screenshot ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Project Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-sm px-4 py-2 rounded-lg text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {link && (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                  >
                    <FaGithub className="text-lg" />
                    View on GitHub
                  </motion.a>
                )}
                
                {demo && (
                  <motion.a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;