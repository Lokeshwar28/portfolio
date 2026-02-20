import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPython,
  FaJava,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiBootstrap,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
  SiPostman,
  SiAxios,
  SiEjs,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillBadge from "../components/SkillBadge";
import SEO from "../components/SEO";

const skillsData = [
  // Languages - Primary Stack First
  {
    name: "Java",
    icon: <FaJava className="text-red-500" />,
    category: "Languages",
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJs className="text-yellow-300" />,
    category: "Languages",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    category: "Languages",
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-500" />,
    category: "Languages",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    category: "Languages",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-400" />,
    category: "Languages",
  },

  // Backend - Primary Stack
  {
    name: "Spring Boot",
    icon: <FaCode className="text-green-500" />,
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-400" />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    category: "Backend",
  },
  {
    name: "RESTful APIs",
    icon: <FaNodeJs className="text-green-400" />,
    category: "Backend",
  },
  {
    name: "Microservices",
    icon: <FaTools className="text-accent" />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    category: "Backend",
  },
  {
    name: "Redis",
    icon: <FaCode className="text-red-500" />,
    category: "Backend",
  },
  {
    name: "Kafka",
    icon: <FaCode className="text-gray-800 dark:text-white" />,
    category: "Backend",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="text-red-500" />,
    category: "Backend",
  },
  {
    name: "OAuth 2.0",
    icon: <FaReact className="text-cyan-400" />,
    category: "Backend",
  },

  // Frontend
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-400" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-300" />,
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-500" />,
    category: "Frontend",
  },
  {
    name: "Responsive Design",
    icon: <FaCss3Alt className="text-blue-400" />,
    category: "Frontend",
  },

  // Cloud & DevOps
  {
    name: "AWS (EC2, ECS, S3, Lambda)",
    icon: <FaAws className="text-orange-300" />,
    category: "Cloud & DevOps",
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-blue-300" />,
    category: "Cloud & DevOps",
  },
  {
    name: "GitHub Actions",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
    category: "Cloud & DevOps",
  },
  {
    name: "CI/CD Pipelines",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
    category: "Cloud & DevOps",
  },
  {
    name: "CloudFormation",
    icon: <FaAws className="text-orange-300" />,
    category: "Cloud & DevOps",
  },

  // Tools
  {
    name: "Maven",
    icon: <FaTools className="text-red-600" />,
    category: "Tools",
  },
  {
    name: "JUnit",
    icon: <FaCode className="text-green-600" />,
    category: "Tools",
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-500" />,
    category: "Tools",
  },
  {
    name: "VS Code",
    icon: <FaCode className="text-blue-500" />,
    category: "Tools",
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-purple-500" />,
    category: "Tools",
  },
  {
    name: "Render",
    icon: <SiRender className="text-green-500" />,
    category: "Tools",
  },
  {
    name: "Vercel",
    level: "advanced",
    icon: <SiVercel className="text-gray-800 dark:text-white" />,
    category: "Tools",
  },

  // Practices
  {
    name: "Agile/Scrum",
    level: "advanced",
    icon: <FaGitAlt className="text-red-400" />,
    category: "Practices",
  },
  {
    name: "MVC Architecture",
    level: "intermediate",
    icon: <FaNodeJs className="text-green-400" />,
    category: "Practices",
  },
  {
    name: "CRUD Operations",
    level: "expert",
    icon: <SiPostgresql className="text-blue-500" />,
    category: "Practices",
  },
  {
    name: "API Integration",
    level: "expert",
    icon: <SiAxios className="text-purple-500" />,
    category: "Practices",
  },
];

const groupedSkills = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title="Skills - Lokeshwar Reddy"
        description="Full-stack software engineer at JPMorgan Chase specializing in Java, Spring Boot, React, TypeScript, microservices, AWS, PostgreSQL, Redis, and Kafka for high-volume financial systems."
        keywords="Java Expert, Spring Boot, React Developer, TypeScript, Microservices, AWS, PostgreSQL, Redis, Kafka, Full Stack Engineer, Software Engineer"
      />

      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-primary dark:via-secondary dark:to-tertiary px-4 py-16 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
        {/* Header Section - Premium Minimal */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent via-highlight to-teal-500 bg-clip-text text-transparent mb-4 tracking-tight">
              Technical Skills
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-highlight mx-auto rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mt-6 font-light"
          >
            Full-stack expertise across Java, Spring Boot, React, TypeScript,
            and cloud infrastructure
          </motion.p>
        </motion.div>

        {/* Skills Grid - Premium Layout */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-[1400px] mx-auto"
        >
          <div className="grid gap-12 lg:gap-16">
            {Object.entries(groupedSkills).map(
              ([category, skills], categoryIndex) => (
                <motion.section
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1,
                    ease: "easeOut",
                  }}
                  className="group"
                  aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {/* Category Header - Clean & Professional */}
                  <div className="mb-8">
                    <motion.h2
                      id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent mb-2 tracking-tight"
                    >
                      {category}
                    </motion.h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={skillsInView ? { scaleX: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + 0.3,
                        duration: 0.6,
                      }}
                      className="h-0.5 w-16 bg-gradient-to-r from-accent to-highlight origin-left rounded-full"
                    />
                  </div>

                  {/* Skills Grid - Perfect Spacing & Alignment */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        delay={categoryIndex * 0.05 + skillIndex * 0.02}
                      />
                    ))}
                  </div>
                </motion.section>
              ),
            )}
          </div>
        </motion.div>

        {/* Current Focus Section - Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-[1400px] mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-tertiary/90 dark:to-secondary/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-200/80 dark:border-slate-700/80 shadow-glass overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-full blur-3xl -z-0" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  JP
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Currently at JPMorgan Chase
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Software Engineer • Financial Systems
                  </p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-base md:text-lg">
                Building high-volume financial systems processing{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  50,000+ daily transactions
                </strong>{" "}
                using microservices architecture. Focused on delivering{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  99.8% uptime
                </strong>
                ,{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  40% latency reductions
                </strong>
                , and scalable solutions with Java, Spring Boot, React, and
                cloud technologies.
              </p>

              <div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wider">
                  Currently Exploring
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Kubernetes",
                    "Next.js",
                    "GraphQL",
                    "Terraform",
                    "AWS Lambda",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white/80 dark:bg-tertiary/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 rounded-lg text-sm font-medium border border-slate-200/80 dark:border-slate-700/80 hover:border-accent dark:hover:border-highlight hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
