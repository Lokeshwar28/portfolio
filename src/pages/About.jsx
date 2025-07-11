import { motion } from "framer-motion";


const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "Software Developer Intern (Goal)",
      description:
        "Aiming to apply my full-stack skills in a dynamic tech environment and deliver scalable solutions.",
    },
    {
      year: "2024",
      title: "AWS Certified + Major Projects",
      description:
        "Completed AWS Cloud Support Certification and built real-time apps like an E-Commerce Platform and Blog App.",
    },
    {
      year: "2023",
      title: "Started Master's in CS @ Texas Tech",
      description:
        "Focusing on Cloud, Distributed Systems, and Software Engineering with practical hands-on projects.",
    },
    {
      year: "2019 - 2023",
      title: "B.Tech in ECE - Malla Reddy College",
      description:
        "Led the Data Leakage Detection System project. Developed a passion for full-stack development and UX design.",
    },
  ];

  const getIcon = (year) => {
    switch (year) {
      case "2025": return "🚀";
      case "2024": return "🏆";
      case "2023": return "🎓";
      case "2019 - 2023": return "📘";
      default: return "📌";
    }
  };

  return (
    <div className="w-full min-h-screen bg-light dark:bg-secondary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

        <img
          src="/images/profile.png"
          alt="Lokeshwar Reddy"
          className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-accent"
        />
        
        <a href="/resume.pdf" download className="block text-center mt-4">
          <button className="bg-accent hover:bg-highlight text-white px-6 py-2 rounded shadow-md">
            Download Resume
          </button>
        </a>

        <h3 className="text-center text-accent text-xl font-semibold mb-4">👨‍💻 Who Am I?</h3>
        
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Software Engineer with full-stack expertise in designing and building scalable, innovative systems. Proven track record in optimizing API performance by 30% and enhancing database efficiency by 25% while delivering robust cloud solutions.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-black dark:text-white mb-12">
          {["React", "Node.js", "PostgreSQL", "AWS", "Tailwind", "EJS"].map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full shadow-sm border border-gray-600">
              {tech}
            </span>
          ))}
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-accent">💼 Professional Experience</h3>
          <motion.div
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-accent">Full Stack Developer (Graduate Assistant)</h4>
                <h5 className="text-lg font-semibold">IT Help Central - Texas Tech University</h5>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Sept 2023 - May 2025</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <p className="text-gray-700 dark:text-gray-300">Designed internal web tools using OOP principles (JavaScript, HTML, CSS, PHP, SQL Server) for 20+ staff</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <p className="text-gray-700 dark:text-gray-300">Developed reusable UI components across 5+ applications, reducing development time by 15-20%</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <p className="text-gray-700 dark:text-gray-300">Automated data processes saving 10 hours weekly with improved accuracy</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <p className="text-gray-700 dark:text-gray-300">Optimized SQL queries achieving 25% improvement in data retrieval times</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <p className="text-gray-700 dark:text-gray-300">Collaborated in Agile/Scrum environment with Git version control</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-accent">🎓 Education</h3>
          <div className="space-y-6">
            <motion.div
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h4 className="text-lg font-bold text-accent">Texas Tech University</h4>
                  <h5 className="text-base font-semibold">M.S. Computer Science</h5>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Aug 2023 - May 2025</span>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h4 className="text-lg font-bold text-accent">Malla Reddy College of Engineering & Technology</h4>
                  <h5 className="text-base font-semibold">B.Tech ECE</h5>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Jul 2019 - May 2023</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-accent">📈 Journey Timeline</h3>
          <div className="relative before:absolute before:left-[6px] before:top-0 before:bottom-0 before:w-0.5 before:bg-accent">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-accent animate-ping" />
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-accent mb-1">
                    {getIcon(item.year)} {item.year}
                  </h4>
                  <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;