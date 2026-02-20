import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Premium SkillBadge component with SaaS-grade design
 * Optimized for recruiter clarity and accessibility
 *
 * @param {Object} props
 * @param {string} props.name - Skill name (no truncation)
 * @param {React.ReactNode} props.icon - Icon component
 * @param {number} [props.delay] - Animation delay in seconds
 */
const SkillBadge = ({ name, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative h-full bg-white/90 dark:bg-tertiary/90 backdrop-blur-sm rounded-lg border border-slate-200/80 dark:border-slate-700/80 hover:border-accent/60 dark:hover:border-highlight/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accent/10 dark:hover:shadow-highlight/20 overflow-hidden"
      >
        {/* Content Container - Centered with proper spacing */}
        <div className="flex flex-col items-center justify-center gap-3 p-4 min-h-[110px]">
          {/* Icon with subtle animation */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center text-3xl flex-shrink-0"
            aria-hidden="true"
          >
            {icon}
          </motion.div>

          {/* Skill Name - No truncation, natural wrapping */}
          <h3 className="text-center font-medium text-slate-900 dark:text-slate-100 text-sm leading-snug px-2 hyphens-auto">
            {name}
          </h3>
        </div>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-highlight/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top accent line on hover */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-highlight origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

SkillBadge.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default SkillBadge;
