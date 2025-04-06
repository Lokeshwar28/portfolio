import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const titles = ["Full-Stack Developer", "AWS Certified", "UI/UX Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="w-full h-screen bg-black text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hello, I'm Lokeshwar Reddy
        </motion.h1>

        <motion.div
          key={titles[currentIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-xl md:text-2xl font-medium"
        >
          {titles[currentIndex]}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/projects")}
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
        >
          View Projects
        </motion.button>
      </div>
    </div>
  );
};

export default Home;