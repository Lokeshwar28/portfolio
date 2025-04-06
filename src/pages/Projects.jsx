import ProjectCard from "../components/ProjectCard";

const projectList = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce app with optimized APIs, secure JWT auth, and AWS deployment.",
    techStack: ["React", "Node.js", "AWS", "PostgreSQL", "JWT"],
    image: "/images/ecommerce.jpg",
    link: "https://github.com/your-username/ecommerce-platform",
    demo: "https://yourdomain.com/ecommerce",
  },
  {
    title: "Real-Time Blog App",
    description: "Live blogging platform with real-time updates and OWASP-secured endpoints.",
    techStack: ["React", "Express", "WebSockets", "MongoDB"],
    image: "/images/blog.jpg",
    link: "https://github.com/your-username/blog-app",
    demo: "https://yourdomain.com/blog",
  },
  {
    title: "Book Notes Manager",
    description: "Organize and categorize book summaries with Open Library API integration.",
    techStack: ["Node.js", "Express", "PostgreSQL", "EJS"],
    image: "/images/book-notes.jpg",
    link: "https://github.com/Lokeshwar28/book-notes",
    demo: "https://yourdomain.com/book-notes",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;