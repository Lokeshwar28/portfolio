import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectList = [
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
  },
  {
    title: "Book Notes Manager",
    description: "Built a CRUD-based book notes manager using Node.js, Express, and PostgreSQL. Users can add, edit, categorize, and view book notes. Integrated Open Library Covers API for dynamic book imagery. Deployed on Railway with an EJS-based frontend, styled using custom CSS and HTML.",
    techStack: ["Node.js", "Express", "PostgreSQL", "EJS" , "Railway" , "HTML" , "CSS" , "Open Library API"],
    image: "/images/book-notes.jpg",
    link: "https://github.com/Lokeshwar28/book-notes",
    demo: "https://book-notes-production.up.railway.app/",
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-primary dark:bg-primary bg-light text-white dark:text-white text-black px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-all">
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