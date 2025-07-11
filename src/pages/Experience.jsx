import { motion } from "framer-motion";

const Experience = () => {
  const experience = {
    role: "Full Stack Developer (Graduate Assistant)",
    organization: "Texas Tech University - IT Help Central",
    period: "Sept 2023 - May 2025",
    location: "Lubbock, TX",
    accomplishments: [
      "Designed internal web tools using OOP principles (JavaScript, HTML, CSS, PHP, SQL Server) for 20+ staff members",
      "Developed reusable UI components across 5+ applications, reducing development time by 15-20%",
      "Automated data processes saving 10 hours weekly with improved accuracy",
      "Optimized SQL queries achieving 25% improvement in data retrieval times",
      "Collaborated in Agile/Scrum environment with Git version control"
    ]
  };

  return (
    <div className="w-full min-h-screen bg-light dark:bg-secondary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-accent text-xl font-semibold mb-2">💼 Professional Journey</p>
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-200 dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-accent/30 transition duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">{experience.role}</h3>
              <h4 className="text-xl font-semibold mb-1">{experience.organization}</h4>
              <p className="text-gray-600 dark:text-gray-400">{experience.location}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                {experience.period}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Accomplishments:</h5>
            <div className="grid gap-3">
              {experience.accomplishments.map((accomplishment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{accomplishment}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["JavaScript", "HTML", "CSS", "PHP", "SQL Server", "Git", "Agile/Scrum"].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;