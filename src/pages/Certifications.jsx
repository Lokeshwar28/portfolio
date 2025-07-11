import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Support Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Jan 2025",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      description: "Cloud infrastructure, troubleshooting, and support services",
      verifyLink: "#", // Add actual verification link when available
      skills: ["Cloud Computing", "AWS Services", "Technical Support", "Infrastructure"]
    },
    {
      title: "Microsoft UX Design",
      issuer: "Microsoft",
      date: "Jan 2025",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoft/microsoft-original.svg",
      description: "User experience design principles and best practices",
      verifyLink: "#", // Add actual verification link when available
      skills: ["UX Design", "User Research", "Prototyping", "Design Thinking"]
    },
    {
      title: "React Complete Guide",
      issuer: "Udemy",
      date: "Feb 2024",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      description: "Comprehensive React.js development from basics to advanced concepts",
      verifyLink: "#", // Add actual verification link when available
      skills: ["React.js", "Hooks", "State Management", "Component Architecture"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-light dark:bg-primary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-accent text-xl font-semibold mb-2">🏆 Professional Development</p>
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-accent/30 hover:border-accent transition duration-300 group"
            >
              {/* Certificate Header */}
              <div className="flex items-center justify-between mb-4">
                <img 
                  src={cert.logo} 
                  alt={`${cert.issuer} logo`}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex items-center gap-2">
                  <FaAward className="text-accent text-xl" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{cert.date}</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-lg font-semibold text-accent mb-2">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
              </div>

              {/* Skills Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(cert.verifyLink, '_blank')}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-highlight text-white font-semibold py-2 px-4 rounded-lg transition duration-300 group-hover:shadow-lg"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>View Certificate</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-accent mb-2">Continuous Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to staying current with industry trends and technologies. 
              These certifications represent my dedication to professional growth and expertise in cloud computing, 
              user experience design, and modern web development frameworks.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;