import { motion } from "framer-motion";

const ProjectCard = ({ title, description, techStack, image, link, demo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
      className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white rounded-lg p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:border-accent hover:shadow-accent/30 duration-300 ease-in-out"
    >
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-indigo-200 dark:bg-indigo-600/30 text-xs px-2 py-1 rounded-full text-black dark:text-white backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-4 gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white text-sm font-semibold px-4 py-2 rounded shadow-md transition duration-300"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="bg-accent hover:bg-highlight text-white text-sm font-semibold px-4 py-2 rounded shadow-md transition duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;