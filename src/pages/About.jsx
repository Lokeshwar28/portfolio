import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaUserGraduate, FaCode, FaHeart } from 'react-icons/fa';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';

const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const timelineData = [
    {
      year: "Sept 2023 - May 2025",
      title: "Full Stack Developer (Graduate Assistant)",
      location: "IT Help Central, Texas Tech University",
      description: "Designed internal web tools using OOP principles and developed reusable UI components across multiple applications.",
      icon: "💼",
      status: "current",
      skills: ["JavaScript", "HTML", "CSS", "PHP", "SQL Server", "Git", "Agile/Scrum"],
      achievements: [
        "Designed internal web tools using OOP principles for 20+ staff",
        "Developed reusable UI components across 5+ applications, reducing development time by 15-20%",
        "Automated data processes saving 10 hours weekly with improved accuracy",
        "Optimized SQL queries achieving 25% improvement in data retrieval times",
        "Collaborated in Agile/Scrum environment with Git version control"
      ]
    },
    {
      year: "2024 - 2025",
      title: "AWS Certified + Major Projects",
      location: "Self-Directed Learning & Certifications",
      description: "Completed multiple certifications and built production-ready full-stack applications.",
      icon: "🏆",
      status: "completed",
      skills: ["AWS", "React.js", "Node.js", "UX Design", "E-Commerce", "Real-time Apps"],
      achievements: [
        "AWS Cloud Support Associate Certification (Jan 2025)",
        "Microsoft UX Design Certification (Jan 2025)",
        "React Complete Guide Certification (Feb 2024)",
        "Built E-Commerce Platform with 30% API latency reduction",
        "Developed Real-Time Blog App with 40% responsiveness enhancement"
      ]
    },
    {
      year: "Aug 2023 - May 2025",
      title: "M.S. Computer Science",
      location: "Texas Tech University",
      description: "Recently graduated with advanced studies in distributed systems, cloud computing, and software engineering.",
      icon: "🎓",
      status: "completed",
      skills: ["Distributed Systems", "Cloud Computing", "Software Engineering", "Algorithms"],
      achievements: [
        "Graduated with excellent academic performance",
        "Worked as Graduate Assistant in IT Help Central",
        "Focused on scalable system design and cloud solutions"
      ]
    },
    {
      year: "Jul 2019 - May 2023",
      title: "B.Tech Electronics & Communication",
      location: "Malla Reddy College of Engineering & Technology",
      description: "Built foundational knowledge in engineering principles and discovered passion for software development.",
      icon: "📘",
      status: "completed",
      skills: ["Engineering Fundamentals", "Research", "Problem Solving", "Project Management"],
      achievements: [
        "Graduated with distinction",
        "Led technical projects and research initiatives",
        "Developed strong analytical and problem-solving skills"
      ]
    },
  ];

  const techStack = ["React", "Node.js", "PostgreSQL", "AWS", "Tailwind", "TypeScript", "Docker", "Git"];

  return (
    <>
      <SEO 
        title="About - Lokeshwar Reddy"
        description="Learn about Lokeshwar Reddy's journey as a Full-Stack Developer, education at Texas Tech University, and passion for building scalable web applications."
        keywords="About Lokeshwar Reddy, Texas Tech University, Full-Stack Developer Journey, Software Engineer Background"
      />
      
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: -30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Enhanced About Me Heading */}
          <div className="relative inline-block mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaUserGraduate className="text-2xl" />
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <motion.div
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: -360 }}
                transition={{ duration: 0.5 }}
              >
                <FaCode className="text-2xl" />
              </motion.div>
            </div>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Profile Image with Enhanced Styling */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block mb-8"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="relative block cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/images/profile.png"
                alt="Lokeshwar Reddy - Professional Software Engineer (Click to download resume)"
                className="w-40 h-40 rounded-full border-4 border-white shadow-2xl object-cover group-hover:shadow-neon transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-xl opacity-30 -z-10 animate-pulse group-hover:opacity-50 transition-opacity duration-300" />
               */}
              {/* Download indicator on hover */}
              <motion.div
                className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <FaDownload className="text-white text-2xl" />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>

          {/* Enhanced Download Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaDownload className="text-lg" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Download Resume
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Click on my profile image above to download my resume
            </p>
          </motion.div>

          {/* Enhanced Who Am I Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaHeart className="text-xl" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                Who Am I?
              </h3>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Software Engineer with full-stack expertise in designing and building scalable, innovative systems. Proven track record in optimizing API performance by 30% and enhancing database efficiency by 25% while delivering robust cloud solutions.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Recently graduated with M.S. in Computer Science from Texas Tech University (May 2025). Actively seeking Software Engineer opportunities in Dallas, TX. Previously completed B.Tech in Electronics & Communication at Malla Reddy College of Engineering & Technology (Jul 2019 - May 2023).
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 font-medium border border-white/20 shadow-glass hover:shadow-neon transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <Timeline items={timelineData} title="My Journey" />
      </div>
    </>
  );
};

export default About;
