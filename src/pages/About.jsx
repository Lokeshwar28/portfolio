import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserGraduate,
  FaCode,
  FaHeart,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { createProfilePageSchema } from "../utils/schemaHelpers";

const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Redis",
    "Kafka",
    "Python",
    "FastAPI",
    "Microservices",
  ];

  // Structured data for SEO
  const profileSchema = createProfilePageSchema({
    name: "About Lokeshwar Reddy - Software Engineer",
    url: `${window.location.origin}/about`,
    description:
      "Full-stack software engineer with 3+ years building high-volume financial systems at JPMorgan Chase. Specialized in microservices, performance optimization, and scalable system design.",
    author: "Lokeshwar Reddy",
  });

  return (
    <>
      <StructuredData type="profilePage" data={profileSchema} />
      <SEO
        title="About - Lokeshwar Reddy"
        description="Full-stack software engineer with 3+ years building high-volume financial systems at JPMorgan Chase. MS in Computer Science from Texas Tech University. Specialized in microservices, performance optimization, and scalable system design."
        keywords="About Lokeshwar Reddy, JPMorgan Chase, Software Engineer, Texas Tech University, Full-Stack Developer, Microservices, Spring Boot, React"
      />

      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-primary dark:via-secondary dark:to-tertiary px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
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
                className="p-3 bg-gradient-to-r from-accent to-highlight rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaUserGraduate className="text-2xl" />
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-highlight to-teal-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <motion.div
                className="p-3 bg-gradient-to-r from-highlight to-teal-500 rounded-xl text-white shadow-lg"
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
        </motion.div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Professional Summary */}
          <div className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-glass border border-white/20 dark:border-slate-700/50 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-r from-accent to-highlight rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <FaHeart className="text-xl" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                Who Am I?
              </h3>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-textSecondary mb-6">
              I'm a{" "}
              <span className="font-semibold text-accent dark:text-highlight">
                full-stack software engineer
              </span>{" "}
              with 3+ years of experience building high-volume financial systems
              that process{" "}
              <span className="font-semibold">50,000+ daily transactions</span>{" "}
              at JPMorgan Chase. I specialize in performance optimization and
              microservices architecture, delivering measurable business impact
              through 40% latency reductions and 30% faster reconciliation
              cycles.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-textSecondary">
              I have a proven ability to architect scalable solutions in
              regulatory-compliant environments while mentoring junior
              developers and driving technical excellence across
              cross-functional teams. I thrive on solving complex problems and
              turning innovative ideas into production-ready software that makes
              a real difference.
            </p>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 bg-gradient-to-r from-highlight to-teal-500 rounded-xl text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGraduationCap className="text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-accent dark:text-highlight">
                    M.S. Computer Science
                  </h4>
                  <p className="text-slate-700 dark:text-textSecondary">
                    Texas Tech University
                  </p>
                  <p className="text-sm text-slate-600 dark:text-textSecondary/80">
                    Graduated May 2025
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-accent dark:text-highlight">
                    B.S. Computer Science
                  </h4>
                  <p className="text-slate-700 dark:text-textSecondary">
                    JNTUH
                  </p>
                  <p className="text-sm text-slate-600 dark:text-textSecondary/80">
                    Graduated May 2023
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 bg-gradient-to-r from-accent to-highlight rounded-xl text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaBriefcase className="text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary">
                  Current Role
                </h3>
              </div>

              <div>
                <h4 className="text-lg font-bold text-accent dark:text-highlight mb-2">
                  Software Engineer, Full Stack
                </h4>
                <p className="text-slate-700 dark:text-textSecondary mb-2">
                  JPMorgan Chase
                </p>
                <p className="text-sm text-slate-600 dark:text-textSecondary/80 mb-4">
                  August 2024 - Present
                </p>
                <p className="text-slate-700 dark:text-textSecondary leading-relaxed">
                  Building microservices-based financial workflow platform
                  processing 50,000+ daily transactions with 99.8% uptime SLA.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-r from-highlight to-teal-500 rounded-xl text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <FaRocket className="text-2xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary">
                Primary Tech Stack
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-accent/10 to-highlight/10 backdrop-blur-sm rounded-full text-slate-700 dark:text-textSecondary font-medium border border-accent/30 hover:shadow-neon hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
