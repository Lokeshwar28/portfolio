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
  FaPython,
  FaJava,
  FaCode,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiBootstrap,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
  SiRailway,
  SiAxios,
} from "react-icons/si";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const skillData = {
  "Programming Languages": [
    { name: "JavaScript (ES6+)", icon: () => <FaJs className="text-yellow-300" /> },
    { name: "Python", icon: () => <FaPython className="text-blue-400" /> },
    { name: "Java", icon: () => <FaJava className="text-red-500" /> },
    { name: "TypeScript", icon: () => <SiTypescript className="text-blue-500" /> },
    { name: "HTML5", icon: () => <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: () => <FaCss3Alt className="text-blue-400" /> },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: () => <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: () => <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: () => <SiExpress className="text-gray-300" /> },
    { name: "Redux", icon: () => <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: () => <SiTailwindcss className="text-teal-300" /> },
    { name: "Bootstrap", icon: () => <SiBootstrap className="text-purple-500" /> },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: () => <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", icon: () => <SiMongodb className="text-green-500" /> },
    { name: "SQL Server", icon: () => <SiMysql className="text-blue-600" /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, S3, Lambda)", icon: () => <FaAws className="text-orange-300" /> },
    { name: "Docker", icon: () => <FaDocker className="text-blue-300" /> },
    { name: "GitHub Actions", icon: () => <FaGithub className="text-white" /> },
    { name: "CI/CD", icon: () => <FaRocket className="text-purple-400" /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: () => <FaGitAlt className="text-red-400" /> },
    { name: "Postman", icon: () => <SiPostman className="text-orange-400" /> },
    { name: "VS Code", icon: () => <FaCode className="text-blue-400" /> },
    { name: "Vercel", icon: () => <SiVercel className="text-white" /> },
    { name: "Render", icon: () => <SiRender className="text-purple-400" /> },
    { name: "Railway", icon: () => <SiRailway className="text-pink-400" /> },
    { name: "Axios", icon: () => <SiAxios className="text-blue-500" /> },
  ],
  "Development Practices": [
    { name: "Agile/Scrum", icon: () => <FaRocket className="text-green-400" /> },
    { name: "REST APIs", icon: () => <FaCloud className="text-blue-400" /> },
    { name: "MVC Architecture", icon: () => <FaCloud className="text-purple-400" /> },
    { name: "CRUD Operations", icon: () => <FaCloud className="text-teal-400" /> },
    { name: "API Integration", icon: () => <SiAxios className="text-indigo-400" /> },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-light dark:bg-secondary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300"
    >
      <p className="text-center text-accent text-xl font-semibold mb-2">🛠️ Technical Expertise</p>
      <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(skillData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">{category}</h3>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="skills-grid">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <SkillCard icon={<skill.icon />} label={skill.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-accent mb-4">🎯 Expertise Overview</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Programming Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Major Full-Stack Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;