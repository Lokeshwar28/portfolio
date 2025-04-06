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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Education</h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 p-6 rounded-lg bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={edu.logo}
              alt={`${edu.institution} logo`}
              className="w-16 h-16 mb-4 rounded-full border border-blue-400"
            />
            <h3 className="text-xl font-bold text-blue-400">{edu.institution}</h3>
            <h4 className="text-lg font-semibold">{edu.degree}</h4>
            <p className="text-sm text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;