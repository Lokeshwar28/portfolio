import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import SEO from './SEO';

// Import existing page components that we'll convert to sections
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';

const SinglePageLayout = () => {
  const titles = ["Full-Stack Web Developer", "React & Node.js Expert", "Recent Computer Science Graduate"];
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <SEO 
        title="Lokeshwar Reddy - Full-Stack Developer"
        description="Full-Stack Web Developer specializing in React, Node.js, and AWS. Passionate about building scalable, modern web applications with cutting-edge technologies."
        keywords="Lokeshwar Reddy, Full-Stack Developer, React Developer, Node.js Developer, JavaScript, AWS, Web Development, Software Engineer"
      />
      
      {/* Home Section */}
      <section id="home" className="relative w-full min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
          <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-20 animate-pulse-slow" />
          
          {/* Glassmorphism floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-glass backdrop-blur-sm rounded-full border border-white/20 shadow-glass"
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-glass backdrop-blur-sm rounded-full border border-white/20 shadow-glass"
            animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-20 h-20 bg-glass backdrop-blur-sm rounded-full border border-white/20 shadow-glass"
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          ref={heroRef}
          className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Title */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Hey, I&apos;m Lokesh 👋
              </h1>
              
              {/* Glassmorphism card behind title */}
              <div className="absolute inset-0 -z-10 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset transform scale-110" />
            </motion.div>

            {/* Hero Image with floating animation */}
            <motion.div
              variants={itemVariants}
              className="my-8 flex justify-center"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative"
              >
                <img 
                  src="/hero-dev.svg" 
                  alt="Developer Illustration" 
                  className="w-64 md:w-80 lg:w-96 drop-shadow-2xl filter brightness-110"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-2xl opacity-20 -z-10" />
              </motion.div>
            </motion.div>

            {/* Social Links with enhanced styling */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6 mb-8"
            >
              {[
                { href: "https://github.com/Lokeshwar28", icon: "/icons/github.svg", alt: "GitHub" },
                { href: "https://www.linkedin.com/in/lokesh-reddy-g/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg", alt: "LinkedIn" },
                { href: "/resume.pdf", icon: "/icons/resume.svg", alt: "Resume", download: true }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  download={link.download || undefined}
                  className="group relative p-3 bg-glass backdrop-blur-sm rounded-xl border border-white/20 shadow-glass hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={link.icon} 
                    alt={link.alt} 
                    className="w-6 h-6 group-hover:brightness-110 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <div className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 min-h-[3rem] flex items-center justify-center">
                <Typewriter
                  words={titles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto mb-8"
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Recent CS graduate from Texas Tech University, actively seeking Software Engineer opportunities.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Specializing in building performant, scalable full-stack applications with React, Node.js, and AWS.
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              ref={skillsRef}
              variants={itemVariants}
              className="flex justify-center gap-8 mb-10"
            >
              {[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", alt: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  animate={skillsInView ? { 
                    y: [0, -10, 0],
                    rotateY: [0, 180, 360] 
                  } : {}}
                  transition={{ 
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2 
                  }}
                >
                  <img 
                    src={tech.src} 
                    alt={tech.alt} 
                    className="w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen">
        <Experience />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen">
        <Certifications />
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="min-h-screen">
        <Contact />
      </section> */}
    </>
  );
};

export default SinglePageLayout;
