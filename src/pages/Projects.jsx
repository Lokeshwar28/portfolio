import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCardEnhanced from "../components/ProjectCardEnhanced";
import ProjectDetailsModal from "../components/ProjectDetailsModal";

const projectList = [
  {
    title: "E-Commerce Platform",
    description: "Developed a scalable full-stack e-commerce application featuring secure JWT-based authentication, efficient REST APIs with Express, and deployment on AWS EC2. Integrated product management, shopping cart, and real-time order tracking.",
    fullDescription: "A comprehensive e-commerce platform built from the ground up with modern web technologies. Features include user authentication, product catalog management, shopping cart functionality, order processing, and real-time order tracking. The application demonstrates proficiency in full-stack development, database design, cloud deployment, and security best practices.",
    techStack: ["React", "Node.js", "Express", "AWS(EC2)", "PostgreSQL", "JWT", "Tailwind CSS", "Vercel"],
    image: "/images/ecommerce.jpg",
    link: "https://github.com/Lokeshwar28/E-commerce-frontend",
    demo: "https://e-commerce-frontend-three-psi.vercel.app/",
    category: "Full-Stack Web App",
    features: [
      "Secure user authentication with JWT tokens",
      "Product catalog with search and filtering",
      "Shopping cart with persistent state",
      "Order management and tracking system",
      "Responsive design for all devices",
      "Payment integration ready architecture",
      "Admin panel for product management",
      "Real-time inventory updates"
    ],
    highlights: [
      "Built with scalable architecture on AWS EC2",
      "Implements OWASP security best practices",
      "Optimized for performance and SEO",
      "Clean, maintainable code structure"
    ]
  },
  {
    title: "Real-Time Blog App",
    description: "Created a real-time blogging platform using React and Socket.io for live post updates without page refresh. Implemented secure user authentication with JWT and enforced OWASP security standards.",
    fullDescription: "A modern blogging platform that showcases real-time web development capabilities. Users can create, edit, and publish blog posts with live updates across all connected clients. The application includes a complete content management system with role-based access control and a rich text editor for content creation.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "JWT", "Render", "Tailwind CSS"],
    image: "/images/blog.jpg",
    link: "https://github.com/Lokeshwar28/Realtime_blog_frontend",
    demo: "https://realtime-blog-frontend.vercel.app/",
    category: "Real-Time Web App",
    features: [
      "Real-time post updates with Socket.io",
      "Rich text editor for blog creation",
      "User authentication and authorization",
      "Comment system with live updates",
      "Admin dashboard for content management",
      "Tag-based post categorization",
      "Responsive mobile-first design",
      "SEO optimized blog posts"
    ],
    highlights: [
      "Zero-latency real-time updates",
      "Secure OWASP compliant architecture",
      "Deployed on Render with CI/CD pipeline",
      "Clean UI/UX with Tailwind CSS"
    ]
  },
  {
    title: "Book Notes Manager",
    description: "Built a CRUD-based book notes manager using Node.js, Express, and PostgreSQL. Users can add, edit, categorize, and view book notes. Integrated Open Library Covers API for dynamic book imagery.",
    fullDescription: "A personal book management system that helps users organize their reading notes and track their reading progress. The application integrates with external APIs to fetch book information and cover images, providing a rich user experience for book enthusiasts.",
    techStack: ["Node.js", "Express", "PostgreSQL", "EJS", "Railway", "HTML", "CSS", "Open Library API"],
    image: "/images/book-notes.jpg",
    link: "https://github.com/Lokeshwar28/book-notes",
    demo: "https://book-notes-production.up.railway.app/",
    category: "CRUD Application",
    features: [
      "Complete CRUD operations for book notes",
      "Dynamic book cover fetching via API",
      "Book categorization and tagging",
      "Search and filter functionality",
      "Reading progress tracking",
      "Export notes to various formats",
      "User-friendly interface with EJS templates",
      "PostgreSQL database for data persistence"
    ],
    highlights: [
      "Seamless API integration with Open Library",
      "Efficient database design and queries",
      "Deployed on Railway platform",
      "Clean server-side rendered templates"
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Group projects by category
  const groupedProjects = projectList.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Projects
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            🚀 A showcase of my full-stack development projects and technical expertise
          </p>
        </motion.div>

        {/* Projects by Category */}
        <div className="max-w-7xl mx-auto space-y-16">
          {Object.entries(groupedProjects).map(([category, projects], categoryIndex) => (
            <div key={category}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="h-full"
                  >
                    <ProjectCardEnhanced
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;