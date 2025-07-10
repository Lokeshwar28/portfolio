import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';

const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const timelineData = [
    {
      year: "2025",
      title: "Software Developer Intern (Goal)",
      location: "Target: Top Tech Company",
      description: "Aiming to apply my full-stack skills in a dynamic tech environment and deliver scalable solutions.",
      icon: "🚀",
      status: "goal",
      skills: ["System Design", "Microservices", "Cloud Architecture"],
    },
    {
      year: "2024",
      title: "AWS Certified + Major Projects",
      location: "Self-Directed Learning",
      description: "Completed AWS Cloud Support Certification and built real-time apps like an E-Commerce Platform and Blog App.",
      icon: "🏆",
      status: "completed",
      skills: ["AWS", "Real-time Apps", "E-Commerce", "Blog Development"],
      achievements: [
        "AWS Cloud Support Associate Certification",
        "Built full-stack e-commerce platform with payment integration",
        "Developed real-time blog application with admin panel",
        "Implemented CI/CD pipelines for automated deployment"
      ]
    },
    {
      year: "2023",
      title: "Master's in Computer Science",
      location: "Texas Tech University",
      description: "Focusing on Cloud, Distributed Systems, and Software Engineering with practical hands-on projects.",
      icon: "🎓",
      status: "current",
      skills: ["Distributed Systems", "Cloud Computing", "Software Engineering", "Algorithms"],
      achievements: [
        "Maintaining excellent academic performance",
        "Contributing to research projects in distributed systems",
        "Leading study groups and mentoring undergraduates"
      ]
    },
    {
      year: "2019 - 2023",
      title: "B.Tech in Electronics & Communication",
      location: "Malla Reddy College of Engineering",
      description: "Led the Data Leakage Detection System project. Developed a passion for full-stack development and UX design.",
      icon: "📘",
      status: "completed",
      skills: ["Project Leadership", "Research", "Full-Stack Development", "UX Design"],
      achievements: [
        "Led Data Leakage Detection System project",
        "Graduated with distinction",
        "Won inter-college coding competition",
        "Published research paper on data security"
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
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Profile Image with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block mb-8"
          >
            <div className="relative">
              <img
                src="/images/profile.png"
                alt="Lokeshwar Reddy"
                className="w-40 h-40 rounded-full border-4 border-white shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-xl opacity-30 -z-10 animate-pulse" />
              
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
            </div>
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-neon transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📄</span>
              Download Resume
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ⬇️
              </motion.span>
            </motion.a>
          </motion.div>

          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              👨‍💻 Who Am I?
            </h3>
            
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I&apos;m a results-driven Full-Stack Developer specializing in building scalable, high-performance web applications using React, Node.js, PostgreSQL, and AWS.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                With a strong foundation in both front-end and back-end development, I design and implement clean, maintainable code that enhances user experience and system reliability. My projects reflect a commitment to continuous learning and delivering real-world impact.
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