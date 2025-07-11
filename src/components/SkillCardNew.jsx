import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const SkillCardNew = ({ skill, level, percentage, icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return 'from-green-400 to-emerald-400';
    if (percentage >= 80) return 'from-blue-400 to-indigo-400';
    if (percentage >= 70) return 'from-yellow-400 to-orange-400';
    return 'from-gray-400 to-gray-500';
  };

  const getLevelText = (percentage) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Intermediate';
    return 'Learning';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <motion.div
        className="bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-xl p-4 shadow-glass border border-white/20 dark:border-gray-600/20 hover:shadow-neon transition-all duration-300 h-full flex flex-col"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-3">
          <motion.div
            className="text-3xl group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Skill Name */}
        <h4 className="text-sm font-semibold text-gray-800 dark:text-white text-center mb-2 leading-tight">
          {skill}
        </h4>

        {/* Level Progress Bar */}
        <div className="mt-auto">
          {/* Background Bar */}
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full mb-2 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${getPercentageColor(percentage)} rounded-full relative`}
              initial={{ width: 0 }}
              animate={inView ? { width: `${percentage}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={inView ? { x: ['-100%', '100%'] } : {}}
                transition={{ duration: 1.5, delay: delay + 1.5 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Floating decoration */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCardNew;