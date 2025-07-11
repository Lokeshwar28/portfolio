import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaAws, FaMicrosoft, FaReact, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

const Certifications = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [certificationsRef, certificationsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: "AWS Cloud Support Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "January 2025",
      icon: <FaAws className="text-orange-500" />,
      description: "Comprehensive certification covering AWS core services, troubleshooting, and cloud support best practices.",
      skills: ["AWS Core Services", "Cloud Troubleshooting", "Technical Support", "Cloud Architecture"],
      credentialId: "AWS-CSA-2025",
      verifyUrl: "#"
    },
    {
      title: "Microsoft UX Design Certification",
      issuer: "Microsoft",
      date: "January 2025", 
      icon: <FaMicrosoft className="text-blue-600" />,
      description: "Advanced UX design principles, user research methodologies, and design thinking for digital products.",
      skills: ["UX Design", "User Research", "Design Thinking", "Prototyping", "Usability Testing"],
      credentialId: "MS-UXD-2025",
      verifyUrl: "#"
    },
    {
      title: "React Complete Guide",
      issuer: "Udemy",
      date: "February 2024",
      icon: <FaReact className="text-cyan-400" />,
      description: "Comprehensive React.js course covering hooks, context, Redux, testing, and modern React patterns.",
      skills: ["React.js", "React Hooks", "Context API", "Redux", "Component Testing", "Modern React"],
      credentialId: "UDEMY-REACT-2024",
      verifyUrl: "#"
    }
  ];

  return (
    <>
      <SEO 
        title="Certifications - Lokeshwar Reddy"
        description="Professional certifications in AWS Cloud Support, Microsoft UX Design, and React.js development demonstrating expertise in cloud technologies and modern web development."
        keywords="AWS Certification, Microsoft UX Design, React Certification, Cloud Support Associate, Professional Certifications"
      />
      
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <motion.div
              className="absolute -inset-4 bg-glass backdrop-blur-xs rounded-2xl border border-white/10 shadow-glass-inset -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            🏆 Professional certifications validating expertise in cloud technologies and modern development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          ref={certificationsRef}
          initial={{ opacity: 0 }}
          animate={certificationsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 dark:border-gray-700/20 group-hover:shadow-neon transition-all duration-300 h-full flex flex-col">
                  {/* Certification Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <FaCalendarAlt className="text-green-500" />
                    <span className="font-medium">{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-3 uppercase tracking-wide">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 rounded-full font-medium border border-indigo-200 dark:border-indigo-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Credential ID: <span className="font-mono font-medium">{cert.credentialId}</span>
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="text-sm font-medium">Verify</span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCertificate className="text-3xl text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Continuous Learning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I believe in continuous learning and staying updated with the latest technologies and industry best practices. 
              These certifications represent my commitment to professional growth and technical excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["Kubernetes", "Docker", "GraphQL", "Next.js", "TypeScript"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {tech} 🎯
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Certifications;