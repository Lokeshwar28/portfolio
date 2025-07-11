import { motion } from "framer-motion";


const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "Recently Graduated with M.S. in Computer Science",
      description:
        "Completed Master's degree from Texas Tech University (May 2025). Actively seeking Software Engineer opportunities in Dallas, TX.",
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
      case "2025": return "🎓";
      case "2024": return "🏆";
      case "2023": return "📚";
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
          className="text-lg md:text-xl max-w-4xl mx-auto text-center mb-4 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Recent Computer Science graduate with full-stack expertise in designing and building scalable, innovative systems. 
          Proven track record in optimizing API performance by 30% and enhancing database efficiency by 25% while delivering robust cloud solutions.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl max-w-4xl mx-auto text-center mb-4 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Currently seeking Software Engineer opportunities in Dallas, TX where I can apply my expertise in React, Node.js, PostgreSQL, and AWS 
          to create impactful solutions that enhance user experience and drive business growth.
        </motion.p>
        <motion.p
          className="text-lg max-w-3xl mx-auto text-center mb-12 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          🏙️ Based in <strong>Dallas, TX</strong> | 📧 lokeshwar2808@gmail.com | 📱 +1 (806) 702-1554
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-black dark:text-white mb-12">
          {["React", "Node.js", "PostgreSQL", "AWS", "Tailwind", "EJS"].map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full shadow-sm border border-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative before:absolute before:left-[6px] before:top-0 before:bottom-0 before:w-0.5 before:bg-accent">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-accent animate-ping" />
                <h4 className="text-xl font-bold text-accent mb-1">
                  {getIcon(item.year)} {item.year}
                </h4>
                <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;