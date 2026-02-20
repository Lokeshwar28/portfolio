import { motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";
import ProjectCardEnhanced from "../components/ProjectCardEnhanced";

// Lazy load the modal since it's only needed when user opens a project
const ProjectDetailsModal = lazy(
  () => import("../components/ProjectDetailsModal"),
);

const projectList = [
  {
    title: "E-Commerce Platform (Full-Stack)",
    description:
      "Production-grade web application with Node.js, Express, TypeScript, React, and PostgreSQL. Features JWT authentication, role-based authorization, Redis caching reduced database queries by 60% and improved page load times by 45%.",
    fullDescription:
      "Built production-grade e-commerce platform supporting product catalog, shopping cart, checkout, and order processing across 20+ RESTful endpoints. Implemented JWT authentication, role-based authorization, and Redis caching to reduce database load. Applied comprehensive database optimization including composite indexes, pagination, and query execution plans. Automated deployment through CI/CD pipeline using GitHub Actions and Docker containerization.",
    duration: "Jan 2025 - Apr 2025",
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Docker",
      "GitHub Actions",
      "AWS EC2",
    ],
    image: "/images/ecommerce.jpg",
    link: "https://github.com/Lokeshwar28/E-commerce-frontend",
    demo: "https://e-commerce-frontend-three-psi.vercel.app/",
    category: "Full Stack",
    features: [
      "20+ RESTful endpoints with comprehensive validation",
      "JWT authentication and role-based authorization",
      "Redis caching reducing database queries by 60%",
      "Product catalog with advanced search and filtering",
      "Shopping cart with persistent state management",
      "Order processing and tracking system",
      "Composite indexes and pagination for performance",
      "CI/CD pipeline with GitHub Actions and Docker",
    ],
    highlights: [
      "60% reduction in database queries through Redis caching",
      "45% improvement in page load times",
      "Automated deployment pipeline reducing manual errors",
      "Scalable architecture supporting future growth",
    ],
  },
  {
    title: "Real-Time Blog Application (Full-Stack)",
    description:
      "Real-time collaborative platform using React, TypeScript, Node.js, PostgreSQL, and Socket.io with WebSocket-based bidirectional communication for sub-second content synchronization. 80% reduction in unnecessary component updates.",
    fullDescription:
      "Developed real-time blogging platform with React, TypeScript, Node.js, PostgreSQL, and Socket.io featuring WebSocket-based bidirectional communication for instant content synchronization. Designed transactional database operations with row-level locking to prevent race conditions. Implemented rate limiting and input sanitization reducing client exceptions by 70%. Optimized React performance using React.memo and useMemo hooks, reducing unnecessary component updates by 80%. Established comprehensive API logging with request correlation IDs enabling rapid diagnosis of production issues.",
    duration: "Aug 2024 - Jan 2025",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "WebSocket",
      "JWT",
      "Vercel",
      "Render",
    ],
    image: "/images/blog.jpg",
    link: "https://github.com/Lokeshwar28/Realtime_blog_frontend",
    demo: "https://realtime-blog-frontend.vercel.app/",
    category: "Full Stack",
    features: [
      "WebSocket-based real-time bidirectional communication",
      "Sub-second content synchronization across clients",
      "Transactional database operations with row-level locking",
      "Rate limiting and input sanitization (70% error reduction)",
      "React.memo and useMemo optimization (80% fewer updates)",
      "API logging with request correlation IDs",
      "Rich text editor for content creation",
      "Live comment system with instant notifications",
    ],
    highlights: [
      "70% reduction in client exceptions through validation",
      "80% reduction in unnecessary React component updates",
      "Sub-second real-time content synchronization",
      "Comprehensive API logging for rapid issue diagnosis",
    ],
  },
  {
    title: "VCF2TXT Genomic Data Processing Platform",
    description:
      "Scalable backend using Python and FastAPI to process large genomic VCF files (500MB+) with asynchronous task processing via Celery and Redis. Enforced strict schema validation using Pydantic models preventing 95% of processing errors.",
    fullDescription:
      "Architected scalable genomic data processing platform using Python and FastAPI to handle large VCF files (500MB+) with asynchronous task processing via Celery and Redis supporting parallel execution and automatic retry logic. Enforced strict schema validation using Pydantic models preventing 95% of processing errors. Designed idempotent workflows with checkpointing for safe handling of partial failures. Built React and TypeScript dashboard visualizing real-time job status and processing metrics with automatic polling. Containerized application using Docker with multi-stage builds, reducing image size by 60%.",
    duration: "Sep 2024 - Dec 2024",
    techStack: [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "React",
      "TypeScript",
      "Docker",
      "Pydantic",
    ],
    image: "/images/vcf2txt.jpg",
    link: "https://github.com/Lokeshwar28/VCF2TXT_Converter",
    demo: "https://vcf2txt.ugenome.io/",
    category: "Full Stack",
    features: [
      "Large file processing (500MB+) with asynchronous tasks",
      "Celery and Redis for parallel execution and retry logic",
      "Pydantic schema validation (95% error prevention)",
      "Idempotent workflows with checkpointing",
      "React/TypeScript dashboard with real-time metrics",
      "Automatic polling for job status updates",
      "Docker multi-stage builds (60% image size reduction)",
      "Comprehensive error handling and logging",
    ],
    highlights: [
      "95% prevention of processing errors through validation",
      "60% reduction in Docker image size",
      "Scalable architecture supporting parallel processing",
      "Real-time monitoring and status tracking",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "AI/ML",
    "Automation",
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? projectList
      : projectList.filter((project) => project.category === activeFilter);

  // Group filtered projects by category for display
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-primary dark:via-secondary dark:to-tertiary px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-highlight to-teal-500 bg-clip-text text-transparent mb-4">
              Projects
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <p className="text-xl text-slate-600 dark:text-textSecondary max-w-3xl mx-auto leading-relaxed">
            🚀 A showcase of my full-stack development projects and technical
            expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-accent to-highlight text-white shadow-neon"
                    : "bg-white/80 dark:bg-secondary/80 text-slate-700 dark:text-textSecondary hover:bg-white dark:hover:bg-secondary shadow-glass border border-accent/20"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects by Category */}
        <div className="max-w-7xl mx-auto space-y-16">
          {Object.entries(groupedProjects).map(
            ([category, projects], categoryIndex) => (
              <div key={category}>
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-textPrimary mb-2">
                    {category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight rounded-full"></div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + index * 0.1,
                      }}
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
            ),
          )}
        </div>
      </div>

      {/* Project Details Modal - Lazy loaded for better performance */}
      <Suspense fallback={null}>
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </Suspense>
    </>
  );
};

export default Projects;
