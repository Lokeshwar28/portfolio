import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectList = [
  {
    title: "E-Commerce Platform (Full-Stack)",
    description: "React.js, Node.js/Express.js, PostgreSQL, AWS EC2 - Built a comprehensive e-commerce platform with JWT authentication, cart/checkout system, and real-time order tracking for 1,000+ users. Achieved 30% API latency reduction through optimization. Implemented CI/CD pipeline with GitHub Actions for automated deployment.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS EC2", "JWT", "GitHub Actions"],
    image: "/images/ecommerce.jpg",
    link: "https://github.com/Lokeshwar28/E-commerce-frontend",
    demo: "https://e-commerce-frontend-three-psi.vercel.app/",
    duration: "Jan 2025 - Apr 2025",
    metrics: ["1,000+ users", "30% API latency reduction", "CI/CD pipeline"]
  },
  {
    title: "Real-Time Blog App (Full-Stack)",
    description: "React, Node.js, PostgreSQL, Socket.io - Developed a real-time blogging platform with live content updates, real-time comments, and post notifications. Enhanced responsiveness by 40% through caching strategies. Deployed on Vercel/Render with high availability architecture.",
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Vercel", "Render"],
    image: "/images/blog.jpg",
    link: "https://github.com/Lokeshwar28/Realtime_blog_frontend",
    demo: "https://realtime-blog-frontend.vercel.app/",
    duration: "Aug 2024 - Jan 2025",
    metrics: ["40% responsiveness improvement", "Real-time updates", "High availability"]
  },
  {
    title: "Book Notes Manager (Full-Stack)",
    description: "Node.js, Express.js, EJS, PostgreSQL - Created a comprehensive book management system with Open Library API integration using Axios. Features responsive Bootstrap design with full CRUD operations for managing book notes and reviews.",
    techStack: ["Node.js", "Express.js", "EJS", "PostgreSQL", "Bootstrap", "Open Library API", "Axios"],
    image: "/images/book-notes.jpg",
    link: "https://github.com/Lokeshwar28/book-notes",
    demo: "https://book-notes-production.up.railway.app/",
    duration: "May 2024 - Aug 2024",
    metrics: ["Full CRUD operations", "API integration", "Responsive design"]
  },
];

const Projects = () => {
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-full flex"
          >
            <div className="flex flex-col h-full justify-between bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-accent/30 hover:border-accent transition duration-300 ease-in-out">
              <ProjectCard {...project} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;