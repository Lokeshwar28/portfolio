import { motion } from "framer-motion";

const educationData = [
  {
    year: "2023 – 2025",
    institution: "Texas Tech University",
    degree: "Master of Science in Computer Science",
    logo: "/images/ttu.png", // Ensure this image exists in public/images
  },
  {
    year: "2019 – 2023",
    institution: "Malla Reddy College of Engineering & Technology",
    degree: "B.Tech in Electronics & Communication",
    logo: "/images/mrec.png", // Ensure this image exists in public/images
  },
];

const Education = () => {
  return (
    <div className="w-full min-h-screen bg-light dark:bg-primary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center transition-colors duration-300">
        
      <p className="text-center text-accent text-xl font-semibold mb-2">🎓 My Academic Journey</p>
      <h2 className="text-4xl font-bold text-center mb-10">Education</h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 p-6 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={edu.logo}
              alt={`${edu.institution} logo`}
              className="w-16 h-16 mb-4 rounded-full border border-accent"
            />
            <h3 className="text-xl font-bold text-accent">{edu.institution}</h3>
            <h4 className="text-lg font-semibold">{edu.degree}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;