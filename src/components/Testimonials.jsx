import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ testimonial, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-gray-700/20 group-hover:shadow-neon transition-all duration-300 h-full">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            &ldquo;
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 text-center italic">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-center space-x-4">
          <div className="relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 -z-10" />
          </div>
          
          <div className="text-center">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center mt-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-yellow-400 text-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: delay + 0.5 + i * 0.1, duration: 0.3 }}
            >
              ⭐
            </motion.span>
          ))}
        </div>

        {/* Background Decoration */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

const Testimonials = ({ title = "What People Say" }) => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const testimonials = [
    {
      text: "Lokesh delivered an exceptional full-stack solution for our e-commerce platform. His attention to detail and ability to solve complex problems impressed our entire team.",
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5cc?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      text: "Working with Lokesh was a pleasure. He has deep knowledge of React and Node.js, and his code quality is outstanding. Highly recommend for any web development project.",
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Digital Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      text: "Lokesh's AWS expertise helped us migrate our entire infrastructure to the cloud seamlessly. His innovative approach and technical skills are remarkable.",
      name: "Emily Rodriguez",
      role: "DevOps Engineer",
      company: "CloudTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      text: "As a study group leader, Lokesh explains complex concepts clearly and helps everyone understand. His passion for learning and teaching is inspiring.",
      name: "David Park",
      role: "Graduate Student",
      company: "Texas Tech University",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      text: "Lokesh's leadership in our Data Leakage Detection project was exceptional. He guided the team through challenges and delivered results beyond expectations.",
      name: "Priya Sharma",
      role: "Research Colleague",
      company: "Malla Reddy College",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face&auto=format"
    },
    {
      text: "The blog application Lokesh built for us has all the features we needed and more. Real-time functionality works flawlessly, and the admin panel is intuitive.",
      name: "James Wilson",
      role: "Content Manager",
      company: "BlogCorp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
    }
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              {title}
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            💬 Feedback from colleagues, mentors, and collaborators who have worked with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I&apos;m always excited to collaborate on innovative projects and bring ideas to life.
            </p>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-neon transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>💬</span>
              Let&apos;s Connect
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;