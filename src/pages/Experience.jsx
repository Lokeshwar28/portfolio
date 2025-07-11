import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import SEO from '../components/SEO';

const Experience = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [experienceRef, experienceInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experience = {
    title: "Full Stack Developer (Graduate Assistant)",
    company: "IT Help Central",
    location: "Texas Tech University, Lubbock, TX",
    duration: "Sept 2023 - May 2025",
    type: "Full-time",
    description: "Designing and developing internal web tools using object-oriented programming principles while collaborating in an Agile/Scrum environment.",
    achievements: [
      "Designed internal web tools using OOP principles (JavaScript, HTML, CSS, PHP, SQL Server) for 20+ staff",
      "Developed reusable UI components across 5+ applications, reducing development time by 15-20%",
      "Automated data processes saving 10 hours weekly with improved accuracy",
      "Optimized SQL queries achieving 25% improvement in data retrieval times",
      "Collaborated in Agile/Scrum environment with Git version control"
    ],
    technologies: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3", 
      "PHP",
      "SQL Server",
      "Git",
      "Agile/Scrum"
    ]
  };

  return (
    <>
      <SEO 
        title="Experience - Lokeshwar Reddy"
        description="Professional experience as Full Stack Developer at Texas Tech University IT Help Central, developing internal web tools and optimizing database performance."
        keywords="Texas Tech University, Full Stack Developer, Graduate Assistant, IT Help Central, PHP, SQL Server, JavaScript"
      />
      
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            💼 My journey in professional software development and system optimization
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 50 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-gray-700/20 hover:shadow-neon transition-all duration-300">
            {/* Experience Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                    <FaBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {experience.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-purple-500" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-green-500" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    {experience.type}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Key Achievements
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-700/60 rounded-xl border border-white/20 dark:border-gray-600/20"
                  >
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={experienceInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-lg font-medium border border-indigo-200 dark:border-indigo-700 hover:scale-105 transition-transform duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently seeking full-time software engineering opportunities where I can apply my full-stack development skills, 
              database optimization expertise, and collaborative experience to build scalable, impactful solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;