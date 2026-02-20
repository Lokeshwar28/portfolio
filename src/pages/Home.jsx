import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaCode,
  FaRocket,
  FaAws,
} from "react-icons/fa";
import StructuredData from "../components/StructuredData";
import { createPersonSchema } from "../utils/schemaHelpers";
import {
  SiSpring,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const Home = () => {
  const titles = [
    "Software Engineer @ JPMorgan Chase",
    "Full-Stack Developer",
    "Microservices Architect",
    "Financial Systems Engineer",
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const techStack = [
    {
      icon: <SiSpring size={40} />,
      name: "Spring Boot",
      color: "text-green-500",
    },
    { icon: <SiReact size={40} />, name: "React", color: "text-cyan-400" },
    {
      icon: <SiTypescript size={40} />,
      name: "TypeScript",
      color: "text-blue-400",
    },
    {
      icon: <SiPostgresql size={40} />,
      name: "PostgreSQL",
      color: "text-blue-500",
    },
    { icon: <SiDocker size={40} />, name: "Docker", color: "text-blue-300" },
    { icon: <FaAws size={40} />, name: "AWS", color: "text-orange-400" },
  ];

  // Structured data for SEO
  const personSchema = createPersonSchema({
    name: "Lokeshwar Reddy",
    jobTitle: "Software Engineer at JPMorgan Chase",
    email: "gummireddy2808@gmail.com",
    url: window.location.origin,
    location: "Dallas, TX",
    sameAs: [
      "https://github.com/Lokeshwar28",
      "https://www.linkedin.com/in/lokesh-reddy-g/",
    ],
    description:
      "Full-stack software engineer building high-volume financial systems that process 50,000+ daily transactions. Specialized in microservices architecture and performance optimization.",
  });

  return (
    <>
      <StructuredData type="person" data={personSchema} />
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-primary dark:via-secondary dark:to-tertiary transition-colors duration-500">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent/20 to-highlight/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-highlight/20 to-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.05, 1, 1.05],
              rotate: [5, 0, 5],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 w-full min-h-screen px-4 py-16 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Greeting Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-full border border-accent/20 shadow-lg"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-textSecondary">
                    Available for opportunities
                  </span>
                </motion.div>

                {/* Name & Title */}
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-textPrimary leading-tight"
                  >
                    Lokeshwar{" "}
                    <span className="bg-gradient-to-r from-accent via-highlight to-teal-500 bg-clip-text text-transparent animate-gradient">
                      Reddy
                    </span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-4 text-2xl md:text-3xl font-semibold text-accent dark:text-highlight h-12"
                  >
                    <Typewriter
                      words={titles}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={40}
                      delaySpeed={2000}
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-lg md:text-xl text-slate-600 dark:text-textSecondary leading-relaxed"
                >
                  Full-stack software engineer building{" "}
                  <span className="font-semibold text-accent dark:text-highlight">
                    high-volume financial systems
                  </span>{" "}
                  that process{" "}
                  <span className="font-semibold text-accent dark:text-highlight">
                    50,000+ daily transactions
                  </span>
                  . Specialized in microservices architecture and performance
                  optimization.
                </motion.p>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-textMuted"
                >
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <span>Dallas, TX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-highlight" />
                    <a
                      href="mailto:gummireddy2808@gmail.com"
                      className="hover:text-accent transition-colors"
                    >
                      gummireddy2808@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    onClick={() => scrollToSection("projects")}
                    className="group px-8 py-4 bg-gradient-to-r from-accent to-highlight text-white font-semibold rounded-xl shadow-lg hover:shadow-neon transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaRocket className="group-hover:animate-bounce" />
                    View My Work
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm border-2 border-accent/50 text-accent dark:text-highlight font-semibold rounded-xl hover:bg-accent/10 dark:hover:bg-accent/10 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEnvelope />
                    Get In Touch
                  </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="flex items-center gap-4"
                >
                  <a
                    href="https://github.com/Lokeshwar28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-full text-slate-700 dark:text-textSecondary hover:bg-gradient-to-r hover:from-accent hover:to-highlight hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lokesh-reddy-g/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-full text-slate-700 dark:text-textSecondary hover:bg-gradient-to-r hover:from-accent hover:to-highlight hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="/resumee.pdf"
                    download="Lokeshwar_Reddy_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm rounded-full text-slate-700 dark:text-textSecondary hover:bg-gradient-to-r hover:from-accent hover:to-highlight hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Download resume"
                  >
                    <FaDownload size={16} />
                    <span className="text-sm font-medium">Resume</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column - Tech Stack Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Floating Card */}
                <div className="relative bg-white/60 dark:bg-tertiary/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-highlight rounded-3xl blur opacity-20 animate-pulse-slow" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <FaCode className="text-accent text-2xl" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary">
                        Tech Stack
                      </h3>
                    </div>

                    {/* Tech Icons Grid */}
                    <div className="grid grid-cols-3 gap-6">
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 1.5 + index * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                          className="group relative"
                        >
                          <div className="relative flex flex-col items-center justify-center p-6 bg-white/80 dark:bg-secondary/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-accent/50 dark:hover:border-highlight/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div
                              className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}
                            >
                              {tech.icon}
                            </div>
                            <span className="mt-3 text-xs font-semibold text-slate-700 dark:text-textSecondary text-center">
                              {tech.name}
                            </span>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 to-highlight/0 group-hover:from-accent/10 group-hover:to-highlight/10 transition-all duration-300" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="mt-8 grid grid-cols-3 gap-4"
                    >
                      <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-xl border border-accent/20">
                        <div className="text-2xl font-bold text-accent dark:text-highlight">
                          3+
                        </div>
                        <div className="text-xs text-slate-600 dark:text-textMuted mt-1">
                          Years Exp
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-xl border border-accent/20">
                        <div className="text-2xl font-bold text-accent dark:text-highlight">
                          50K+
                        </div>
                        <div className="text-xs text-slate-600 dark:text-textMuted mt-1">
                          Transactions
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-xl border border-accent/20">
                        <div className="text-2xl font-bold text-accent dark:text-highlight">
                          40%
                        </div>
                        <div className="text-xs text-slate-600 dark:text-textMuted mt-1">
                          Performance ↑
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-highlight rounded-full blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-highlight to-accent rounded-full blur-2xl opacity-30"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-slate-400 dark:text-textMuted"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
