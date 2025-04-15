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
} from "react-icons/si";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const skillData = {
  Frontend: [
    { name: "React.js", icon: () => <FaReact className="text-cyan-400" /> },
    { name: "Redux", icon: () => <SiRedux className="text-purple-400" /> },
    { name: "JavaScript", icon: () => <FaJs className="text-yellow-300" /> },
    { name: "HTML5", icon: () => <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: () => <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind", icon: () => <SiTailwindcss className="text-teal-300" /> },
  ],
  Backend: [
    { name: "Node.js", icon: () => <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: () => <SiExpress className="text-gray-300" /> },
    { name: "PostgreSQL", icon: () => <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", icon: () => <SiMongodb className="text-green-500" /> },
    { name: "JWT", icon: () => <SiExpress className="text-yellow-400" /> },
  ],
  DevOps: [
    { name: "AWS", icon: () => <FaAws className="text-orange-300" /> },
    { name: "Docker", icon: () => <FaDocker className="text-blue-300" /> },
    { name: "GitHub Actions", icon: () => <FaGithub className="text-white" /> },
    { name: "Render", icon: () => <FaCloud className="text-purple-400" /> },
    { name: "Railway", icon: () => <FaCloud className="text-pink-400" /> },
  ],
  Tools: [
    { name: "Git", icon: () => <FaGitAlt className="text-red-400" /> },
    { name: "VS Code", icon: () => <FaGithub className="text-blue-400" /> },
    { name: "Vercel", icon: () => <FaRocket className="text-white" /> },
    { name: "EJS", icon: () => <FaHtml5 className="text-pink-500" /> },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-secondary dark:bg-secondary bg-light text-white dark:text-white text-black px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-all"
    >
      <p className="text-center text-accent text-xl font-semibold mb-2">🛠️ What I Use</p>
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillData).map(([category, skills], index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/30 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">{category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <SkillCard key={i} icon={<skill.icon />} label={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;