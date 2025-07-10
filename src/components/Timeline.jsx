import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Timeline = ({ items, title }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {title}
        </motion.h3>
      )}
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full" />
        
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex items-start mb-12 group"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75" />
              </motion.div>
            </div>
            
            {/* Content card */}
            <motion.div
              className="ml-8 flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-white/20 dark:border-gray-700/20 group-hover:shadow-neon transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Year badge */}
              <div className="flex items-center justify-between mb-4">
                <motion.span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.year}
                </motion.span>
                
                {item.status && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'current' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : item.status === 'goal'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}>
                    {item.status}
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
              
              {/* Location/Company */}
              {item.location && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                  📍 {item.location}
                </p>
              )}
              
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
              
              {/* Skills/Technologies */}
              {item.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              )}
              
              {/* Achievements */}
              {item.achievements && (
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;