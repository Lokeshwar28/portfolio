import { motion } from "framer-motion";

const ProjectCard = ({ title, description, techStack, image, link, demo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 duration-300 ease-in-out"
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
            className="bg-gray-700 text-xs px-2 py-1 rounded-full"
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
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;