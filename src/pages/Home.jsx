import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const titles = ["Full-Stack Web Developer", "React & Node.js Expert", "Passionate Problem Solver"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-light dark:bg-primary transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full dark:bg-black bg-light bg-[url('/stars.svg')] bg-cover opacity-20 animate-pulse-slow" />
      </div>
      <div className="w-full min-h-screen z-10 relative text-white dark:text-white text-black px-4 py-8 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-accent"
          >
            Hey, I'm Lokesh 👋
          </motion.h1>

          <div className="my-6 flex justify-center">
            <img 
              src="/hero-dev.svg" 
              alt="Developer Illustration" 
              className="w-60 md:w-80 lg:w-96 animate-fadeIn drop-shadow-xl"
            />
          </div> 

          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/Lokeshwar28" target="_blank" rel="noopener noreferrer">
              
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/lokesh-reddy-g/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
           alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition duration-300" />
            </a>
            <a href="/resume.pdf" download>
              <img src="/icons/resume.svg" alt="Resume" className="w-6 h-6 hover:scale-110 transition duration-300" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-xl md:text-2xl font-medium text-black dark:text-white"
          >
            <Typewriter
              words={titles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Crafting fast, secure, and modern web apps with JavaScript, React, Node.js, and PostgreSQL.
            </p>

            <p className="mt-2 text-base md:text-lg text-gray-700 dark:text-gray-300">
              I specialize in building performant, scalable full-stack applications with modern technologies.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center gap-6 animate-bounce-slow">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" className="w-10 h-10" />
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
           alt="Node.js" className="w-10 h-10" />
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
           alt="PostgreSQL" className="w-10 h-10" />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/projects")}
            className="mt-10 px-8 py-3 bg-accent hover:bg-highlight text-white font-semibold rounded-lg shadow-xl transition duration-300"
          >
            Explore My Work <span className="ml-2">🚀</span>
          </motion.button>
          
          <div className="absolute bottom-6 w-full flex justify-center">
            <div className="animate-bounce text-gray-500 dark:text-gray-400 text-sm">↓ Scroll down</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;