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
  SiTypescript,
  SiBootstrap,
  SiVercel,
  SiRender,
  SiAxios,
  SiPostman,
} from "react-icons/si";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const skillData = {
  Languages: [
    { name: "JavaScript (ES6+)", icon: () => <FaJs className="text-yellow-300" /> },
    { name: "Python", icon: () => <FaPython className="text-blue-400" /> },
    { name: "Java", icon: () => <FaJava className="text-red-500" /> },
    { name: "TypeScript", icon: () => <SiTypescript className="text-blue-500" /> },
    { name: "HTML5", icon: () => <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: () => <FaCss3Alt className="text-blue-400" /> },
  ],
  Frontend: [
    { name: "React.js", icon: () => <FaReact className="text-cyan-400" /> },
    { name: "Redux", icon: () => <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: () => <SiTailwindcss className="text-teal-300" /> },
    { name: "Bootstrap", icon: () => <SiBootstrap className="text-purple-500" /> },
    { name: "Responsive Design", icon: () => <FaHtml5 className="text-green-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: () => <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: () => <SiExpress className="text-gray-300" /> },
    { name: "RESTful APIs", icon: () => <FaCloud className="text-blue-300" /> },
    { name: "PostgreSQL", icon: () => <SiPostgresql className="text-blue-500" /> },
    { name: "JWT", icon: () => <SiExpress className="text-yellow-400" /> },
    { name: "OAuth", icon: () => <FaGitAlt className="text-red-400" /> },
    { name: "EJS", icon: () => <FaHtml5 className="text-pink-500" /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, S3, Lambda, CloudFront)", icon: () => <FaAws className="text-orange-300" /> },
    { name: "Docker", icon: () => <FaDocker className="text-blue-300" /> },
    { name: "GitHub Actions", icon: () => <FaGithub className="text-white" /> },
    { name: "CI/CD", icon: () => <FaRocket className="text-green-500" /> },
  ],
  Tools: [
    { name: "Postman", icon: () => <SiPostman className="text-orange-400" /> },
    { name: "VS Code", icon: () => <FaCode className="text-blue-400" /> },
    { name: "Axios", icon: () => <SiAxios className="text-purple-400" /> },
    { name: "Render", icon: () => <SiRender className="text-purple-400" /> },
    { name: "Vercel", icon: () => <SiVercel className="text-white" /> },
  ],
  Practices: [
    { name: "Agile/Scrum", icon: () => <FaRocket className="text-blue-400" /> },
    { name: "MVC Architecture", icon: () => <FaCloud className="text-green-400" /> },
    { name: "CRUD Operations", icon: () => <FaGitAlt className="text-red-400" /> },
    { name: "API Integration", icon: () => <SiAxios className="text-yellow-400" /> },
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
      <p className="text-center text-accent text-xl font-semibold mb-2">🛠️ What I Use</p>
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillData).map(([category, skills], index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/30 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">{category}</h3>
            <div className="grid grid-cols-1 gap-3">
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