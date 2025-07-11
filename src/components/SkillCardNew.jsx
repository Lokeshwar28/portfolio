import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const SkillCardNew = ({ skill, level, icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const getLevelColor = (level) => {
    switch(level) {
      case 'expert': return 'from-green-500 to-emerald-500';
      case 'advanced': return 'from-blue-500 to-cyan-500';
      case 'intermediate': return 'from-yellow-500 to-orange-500';
      case 'beginner': return 'from-red-500 to-pink-500';
      default: return 'from-blue-500 to-purple-500';
    }
  };

  const getLevelText = (level) => {
    switch(level) {
      case 'expert': return 'Expert';
      case 'advanced': return 'Advanced';
      case 'intermediate': return 'Intermediate';
      case 'beginner': return 'Beginner';
      default: return 'Proficient';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 shadow-glass border border-white/20 dark:border-gray-700/20 group-hover:shadow-neon transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {skill}
            </h4>
          </div>
        </div>
        
        <div className="flex justify-center">
          <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${getLevelColor(level)} text-white shadow-lg`}>
            {getLevelText(level)}
          </span>
        </div>
        
        {/* Subtle animation indicator */}
        <motion.div
          className={`mt-3 h-1 rounded-full bg-gradient-to-r ${getLevelColor(level)} opacity-30`}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: delay + 0.2 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCardNew;