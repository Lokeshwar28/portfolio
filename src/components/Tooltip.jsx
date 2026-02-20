import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Tooltip component for displaying helpful hints on hover
 *
 * Usage:
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Element that triggers the tooltip
 * @param {string} props.content - Tooltip text content
 * @param {'top'|'bottom'|'left'|'right'} [props.position='top'] - Tooltip position
 * @param {number} [props.delay=200] - Delay before showing tooltip (ms)
 */
const Tooltip = ({ children, content, position = "top", delay = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 -translate-x-2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 translate-x-2 ml-2",
  };

  const arrowStyles = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-slate-800 dark:border-t-white",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-slate-800 dark:border-b-white",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-slate-800 dark:border-l-white",
    right:
      "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-slate-800 dark:border-r-white",
  };

  if (!content) return children;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 ${positionStyles[position]}`}
            role="tooltip"
            aria-live="polite"
          >
            {/* Tooltip content */}
            <div className="bg-slate-800 dark:bg-white text-white dark:text-slate-900 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              {content}

              {/* Arrow */}
              <div
                className={`absolute w-0 h-0 border-4 ${arrowStyles[position]}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  delay: PropTypes.number,
};

export default Tooltip;
