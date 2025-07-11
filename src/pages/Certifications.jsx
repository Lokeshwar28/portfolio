import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaCertificate, FaAws, FaMicrosoft, FaReact, FaCalendarAlt, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
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

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const certifications = [
    {
      title: "AWS Cloud Support Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "January 2025",
      icon: <FaAws className="text-orange-500" />,
      description: "Comprehensive certification covering AWS core services, troubleshooting, and cloud support best practices.",
      skills: ["AWS Core Services", "Cloud Troubleshooting", "Technical Support", "Cloud Architecture"],
      credentialId: "AWS-CSA-2025",
      verifyUrl: "#",
      certificateImage: "/certificates/aws-cloud-support.jpg"
    },
    {
      title: "Microsoft UX Design Certification",
      issuer: "Microsoft",
      date: "January 2025", 
      icon: <FaMicrosoft className="text-blue-600" />,
      description: "Advanced UX design principles, user research methodologies, and design thinking for digital products.",
      skills: ["UX Design", "User Research", "Design Thinking", "Prototyping", "Usability Testing"],
      credentialId: "MS-UXD-2025",
      verifyUrl: "#",
      certificateImage: "/certificates/microsoft-ux-design.jpg"
    },
    {
      title: "React Complete Guide",
      issuer: "Udemy",
      date: "February 2024",
      icon: <FaReact className="text-cyan-400" />,
      description: "Comprehensive React.js course covering hooks, context, Redux, testing, and modern React patterns.",
      skills: ["React.js", "React Hooks", "Context API", "Redux", "Component Testing", "Modern React"],
      credentialId: "UDEMY-REACT-2024",
      verifyUrl: "#",
      certificateImage: "/certificates/react-complete-guide.jpg"
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

                  {/* Action Button */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <motion.button
                      onClick={() => handleViewCertificate(cert)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-neon transition-all duration-300"
                    >
                      <FaCertificate className="text-lg" />
                      View Certificate
                    </motion.button>
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
      </div>

      {/* Certificate Modal */}
      {isModalOpen && selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                  {selectedCertificate.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {selectedCertificate.issuer}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-gray-500 dark:text-gray-400" />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Certificate Image Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 mb-6 text-center">
                <div className="text-6xl mb-4">{selectedCertificate.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Certificate Preview
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedCertificate.title} - {selectedCertificate.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Awarded: {selectedCertificate.date}
                </p>
              </div>

              {/* Certificate Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-800 dark:text-white mb-3">Description</h5>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedCertificate.description}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 dark:text-white mb-3">Key Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm px-3 py-1 rounded-full font-medium border border-indigo-200 dark:border-indigo-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Button */}
              <div className="mt-6 text-center">
                <motion.a
                  href={selectedCertificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-neon transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  Verify Certificate
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Certifications;