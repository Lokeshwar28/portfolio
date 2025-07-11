import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const projectCategories = {
  "Full-Stack Applications": [
    {
      title: "E-Commerce Platform",
      description: "Developed a scalable full-stack e-commerce application featuring secure JWT-based authentication, efficient REST APIs with Express, and deployment on AWS EC2. Integrated product management, shopping cart, and real-time order tracking. Frontend built with React and Tailwind CSS; optimized for performance and responsiveness.",
      techStack: ["React", "Node.js", "Express","AWS(EC2)", "PostgreSQL", "JWT" , "Tailwind CSS" , "Vercel"],
      image: "/images/ecommerce.jpg",
      link: "https://github.com/Lokeshwar28/E-commerce-frontend",
      demo: "https://e-commerce-frontend-three-psi.vercel.app/",
    },
    {
      title: "Real-Time Blog App",
      description: "Created a real-time blogging platform using React and Socket.io for live post updates without page refresh. Implemented secure user authentication with JWT and enforced OWASP security standards. Backend built with Node.js and Express, deployed on Render. Styled with Tailwind CSS for a clean UI/UX.",
      techStack: ["React", "Node.js" , "Express", "Socket.io", "PostgreSQL", "JWT" , "Render" , "Tailwind CSS" ],
      image: "/images/blog.jpg",
      link: "https://github.com/Lokeshwar28/Realtime_blog_frontend",
      demo: "https://realtime-blog-frontend.vercel.app/",
    }
  ],
  "Backend Systems": [
    {
      title: "Book Notes Manager",
      description: "Built a CRUD-based book notes manager using Node.js, Express, and PostgreSQL. Users can add, edit, categorize, and view book notes. Integrated Open Library Covers API for dynamic book imagery. Deployed on Railway with an EJS-based frontend, styled using custom CSS and HTML.",
      techStack: ["Node.js", "Express", "PostgreSQL", "EJS" , "Railway" , "HTML" , "CSS" , "Open Library API"],
      image: "/images/book-notes.jpg",
      link: "https://github.com/Lokeshwar28/book-notes",
      demo: "https://book-notes-production.up.railway.app/",
    }
  ],
  "Frontend Projects": [],
  "Mobile Applications": [],
  "DevOps/Cloud Projects": []
};

const Projects = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    "Full-Stack Applications": true,
    "Backend Systems": true,
    "Frontend Projects": false,
    "Mobile Applications": false,
    "DevOps/Cloud Projects": false
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="w-full min-h-screen bg-light dark:bg-primary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-accent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(projectCategories).map(([category, projects], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Category Header */}
            <div 
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => toggleCategory(category)}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-accent transition-colors">
                {category}
              </h3>
              <div className="flex items-center gap-2 text-accent">
                <span className="text-sm font-medium">
                  {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                </span>
                {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {/* Projects Grid */}
            {expandedCategories[category] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="projects-grid"
              >
                {projects.length > 0 ? (
                  projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full flex"
                    >
                      <div className="flex flex-col h-full justify-between bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-accent/30 hover:border-accent transition duration-300 ease-in-out">
                        <ProjectCard {...project} />
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-400 dark:text-gray-600">
                      <p className="text-lg mb-2">🚧 Coming Soon</p>
                      <p className="text-sm">Projects in this category will be added soon!</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Projects Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-accent mb-4">🚀 Project Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-accent">30%</div>
              <div className="text-gray-600 dark:text-gray-400">API Performance Improvement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">25%</div>
              <div className="text-gray-600 dark:text-gray-400">Database Efficiency Enhancement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Mobile Responsive Design</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;