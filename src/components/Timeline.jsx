import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Timeline = ({ items, title }) => {
  const [timelineRef, timelineInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'from-green-400 to-emerald-400';
      case 'completed':
        return 'from-blue-400 to-indigo-400';
      case 'goal':
        return 'from-purple-400 to-pink-400';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'current':
        return { text: 'Current', bg: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-700 dark:text-green-300' };
      case 'completed':
        return { text: 'Completed', bg: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-700 dark:text-blue-300' };
      case 'goal':
        return { text: 'Goal', bg: 'bg-purple-100 dark:bg-purple-900/30', textColor: 'text-purple-700 dark:text-purple-300' };
      default:
        return { text: 'In Progress', bg: 'bg-gray-100 dark:bg-gray-900/30', textColor: 'text-gray-700 dark:text-gray-300' };
    }
  };

  return (
    <motion.div
      ref={timelineRef}
      initial={{ opacity: 0 }}
      animate={timelineInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      {/* Timeline Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={timelineInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {title}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Timeline Items */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 rounded-full"></div>

        <div className="space-y-12">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const statusBadge = getStatusBadge(item.status);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold text-sm`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Timeline Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12 md:text-right'}`}>
                  <motion.div
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-white/20 dark:border-gray-700/20 hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Year and Status */}
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? '' : 'md:justify-end'}`}>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge.bg} ${statusBadge.textColor}`}>
                        {statusBadge.text}
                      </span>
                    </div>

                    {/* Title and Location */}
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {item.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skills */}
                    {item.skills && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Skills:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium border border-indigo-200 dark:border-indigo-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {item.achievements && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;