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
  FaCloud,
  FaRocket,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import SkillBar from "../components/SkillBar";
import SEO from '../components/SEO';

const skillsData = [
  // Frontend Skills
  { name: "React.js", level: "expert", icon: <FaReact className="text-cyan-400" />, category: "Frontend" },
  { name: "JavaScript", level: "expert", icon: <FaJs className="text-yellow-300" />, category: "Frontend" },
  { name: "TypeScript", level: "advanced", icon: <SiTypescript className="text-blue-500" />, category: "Frontend" },
  { name: "HTML5", level: "expert", icon: <FaHtml5 className="text-orange-500" />, category: "Frontend" },
  { name: "CSS3", level: "expert", icon: <FaCss3Alt className="text-blue-400" />, category: "Frontend" },
  { name: "Tailwind CSS", level: "expert", icon: <SiTailwindcss className="text-teal-300" />, category: "Frontend" },
  { name: "Redux", level: "advanced", icon: <SiRedux className="text-purple-400" />, category: "Frontend" },
  { name: "Vite", level: "advanced", icon: <SiVite className="text-purple-500" />, category: "Frontend" },

  // Backend Skills
  { name: "Node.js", level: "expert", icon: <FaNodeJs className="text-green-400" />, category: "Backend" },
  { name: "Express.js", level: "expert", icon: <SiExpress className="text-gray-300" />, category: "Backend" },
  { name: "PostgreSQL", level: "advanced", icon: <SiPostgresql className="text-blue-500" />, category: "Backend" },
  { name: "MongoDB", level: "intermediate", icon: <SiMongodb className="text-green-500" />, category: "Backend" },

  // DevOps & Tools
  { name: "AWS", level: "advanced", icon: <FaAws className="text-orange-300" />, category: "DevOps" },
  { name: "Docker", level: "intermediate", icon: <FaDocker className="text-blue-300" />, category: "DevOps" },
  { name: "Git", level: "expert", icon: <FaGitAlt className="text-red-400" />, category: "DevOps" },
  { name: "GitHub Actions", level: "intermediate", icon: <FaGithub className="text-white" />, category: "DevOps" },
  { name: "Vercel", level: "advanced", icon: <FaRocket className="text-white" />, category: "DevOps" },
  { name: "Railway", level: "intermediate", icon: <FaCloud className="text-pink-400" />, category: "DevOps" },
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
        description="Technical skills and proficiency levels in React, Node.js, AWS, PostgreSQL, and modern web development technologies."
        keywords="React Skills, Node.js Expert, AWS Developer, PostgreSQL, JavaScript, TypeScript, Web Development Skills"
      />
      
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            🛠️ Proficiency levels in modern web development technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="relative group"
              >
                {/* Category Card */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-gray-700/20 group-hover:shadow-neon transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center justify-center mb-8">
                    <motion.h3
                      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category}
                    </motion.h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill.name}
                        level={skill.level}
                        icon={skill.icon}
                        delay={categoryIndex * 0.2 + skillIndex * 0.1}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m constantly expanding my skill set and staying updated with the latest technologies. 
              Currently exploring advanced cloud architectures, microservices, and emerging frontend frameworks 
              to build even more efficient and scalable applications.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Next.js", "Kubernetes", "GraphQL", "Prisma", "Serverless"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {tech} 🚀
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;