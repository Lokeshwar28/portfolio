import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, level, icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const getLevel = (level) => {
    switch(level) {
      case 'expert': return { width: '95%', color: 'from-green-500 to-emerald-500', text: 'Expert' };
      case 'advanced': return { width: '85%', color: 'from-blue-500 to-cyan-500', text: 'Advanced' };
      case 'intermediate': return { width: '70%', color: 'from-yellow-500 to-orange-500', text: 'Intermediate' };
      case 'beginner': return { width: '50%', color: 'from-red-500 to-pink-500', text: 'Beginner' };
      default: return { width: '80%', color: 'from-blue-500 to-purple-500', text: 'Proficient' };
    }
  };

  const levelData = getLevel(level);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill}</span>
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
          {levelData.text}
        </span>
      </div>
      
      <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: levelData.width } : {}}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${levelData.color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
      
      <div className="mt-1 text-right">
        <span className="text-xs text-gray-500 dark:text-gray-500">{levelData.width}</span>
      </div>
    </motion.div>
  );
};

export default SkillBar;