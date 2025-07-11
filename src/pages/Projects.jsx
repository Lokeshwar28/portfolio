import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCardEnhanced from "../components/ProjectCardEnhanced";
import ProjectDetailsModal from "../components/ProjectDetailsModal";

const projectList = [
  {
    title: "E-Commerce Platform (Full-Stack)",
    description: "React.js, Node.js/Express.js, PostgreSQL, AWS EC2 - JWT authentication, cart/checkout system, real-time order tracking for 1,000+ users. 30% API latency reduction through optimization. CI/CD with GitHub Actions.",
    fullDescription: "A comprehensive e-commerce platform built from the ground up with modern web technologies. Features include user authentication, product catalog management, shopping cart functionality, order processing, and real-time order tracking. The application demonstrates proficiency in full-stack development, database design, cloud deployment, and security best practices. Achieved 30% API performance improvement through optimization techniques.",
    duration: "Jan 2025 - Apr 2025",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS EC2", "JWT", "GitHub Actions", "Tailwind CSS"],
    image: "/images/ecommerce.jpg",
    link: "https://github.com/Lokeshwar28/E-commerce-frontend",
    demo: "https://e-commerce-frontend-three-psi.vercel.app/",
    category: "Full-Stack Web App",
    features: [
      "JWT authentication system for secure user access",
      "Product catalog with advanced search and filtering",
      "Shopping cart with persistent state management",
      "Real-time order tracking for 1,000+ users",
      "Responsive design optimized for all devices",
      "Payment integration ready architecture",
      "Admin panel for comprehensive product management",
      "Real-time inventory updates and notifications"
    ],
    highlights: [
      "30% API latency reduction through query optimization",
      "Scalable architecture deployed on AWS EC2",
      "CI/CD pipeline implementation with GitHub Actions",
      "Robust error handling and security implementations"
    ]
  },
  {
    title: "Real-Time Blog App (Full-Stack)",
    description: "React, Node.js, PostgreSQL, Socket.io - Real-time content updates, live comments, post notifications. 40% responsiveness enhancement via caching. Deployed on Vercel/Render with high availability.",
    fullDescription: "A modern blogging platform that showcases real-time web development capabilities. Users can create, edit, and publish blog posts with live updates across all connected clients. The application includes a complete content management system with role-based access control and a rich text editor for content creation. Achieved 40% performance improvement through strategic caching.",
    duration: "Aug 2024 - Jan 2025",
    techStack: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "JWT", "Vercel", "Render"],
    image: "/images/blog.jpg",
    link: "https://github.com/Lokeshwar28/Realtime_blog_frontend",
    demo: "https://realtime-blog-frontend.vercel.app/",
    category: "Real-Time Web App",
    features: [
      "Real-time post updates with Socket.io integration",
      "Rich text editor for enhanced blog creation",
      "Comprehensive user authentication and authorization",
      "Live comment system with instant notifications",
      "Admin dashboard for complete content management",
      "Tag-based post categorization and filtering",
      "Mobile-first responsive design approach",
      "SEO optimized blog posts for better visibility"
    ],
    highlights: [
      "40% responsiveness enhancement via strategic caching",
      "Zero-latency real-time updates across all clients",
      "High availability deployment on Vercel/Render",
      "Clean, intuitive UI/UX with modern design principles"
    ]
  },
  {
    title: "Book Notes Manager (Full-Stack)",
    description: "Node.js, Express.js, EJS, PostgreSQL - Open Library API integration with Axios. Bootstrap responsive design, full CRUD operations for personal book management and note organization.",
    fullDescription: "A personal book management system that helps users organize their reading notes and track their reading progress. The application integrates with external APIs to fetch book information and cover images, providing a rich user experience for book enthusiasts. Built with server-side rendering for optimal performance.",
    duration: "May 2024 - Aug 2024",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "EJS", "Bootstrap", "Open Library API", "Axios"],
    image: "/images/book-notes.jpg",
    link: "https://github.com/Lokeshwar28/book-notes",
    demo: "https://book-notes-production.up.railway.app/",
    category: "CRUD Application",
    features: [
      "Complete CRUD operations for book notes management",
      "Dynamic book cover fetching via Open Library API",
      "Advanced book categorization and tagging system",
      "Comprehensive search and filter functionality",
      "Reading progress tracking and analytics",
      "Export notes to multiple formats",
      "Responsive interface built with Bootstrap",
      "Efficient PostgreSQL database design"
    ],
    highlights: [
      "Seamless API integration with Open Library using Axios",
      "Efficient database design with optimized queries",
      "Clean server-side rendered templates with EJS",
      "Responsive design ensuring cross-device compatibility"
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