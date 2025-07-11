import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-light dark:bg-primary text-black dark:text-white px-4 py-8 sm:px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <p className="text-center text-accent text-xl font-semibold mb-2">📬 Get in Touch</p>
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-8"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <FaMapMarkerAlt className="text-accent text-2xl mx-auto mb-2" />
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Dallas, TX</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-accent text-2xl mx-auto mb-2" />
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:lokeshwar2808@gmail.com" className="text-accent hover:text-highlight transition">
              lokeshwar2808@gmail.com
            </a>
          </div>
          <div className="text-center">
            <FaPhone className="text-accent text-2xl mx-auto mb-2" />
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+1 (806) 702-1554</p>
          </div>
        </div>
      </motion.div>
      
      {/* Social Links */}
      <div className="flex justify-center gap-6 my-6">
        <a href="https://github.com/Lokeshwar28" target="_blank" rel="noopener noreferrer"
           className="group">
          <FaGithub className="text-black dark:text-white text-3xl hover:text-accent transition duration-300 group-hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/lokesh-reddy-g/" target="_blank" rel="noopener noreferrer"
           className="group">
          <FaLinkedin className="text-black dark:text-white text-3xl hover:text-accent transition duration-300 group-hover:scale-110" />
        </a>
        <a href="mailto:lokeshwar2808@gmail.com" className="group">
          <FaEnvelope className="text-black dark:text-white text-3xl hover:text-accent transition duration-300 group-hover:scale-110" />
        </a>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-center mb-6 text-accent">Send me a message</h3>
          <form
            action="https://formspree.io/f/xblgprak"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
                placeholder="Tell me about your project, opportunity, or just say hello!"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-accent hover:bg-highlight text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              Send Message 🚀
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            🎯 <strong>Actively seeking Software Engineer opportunities</strong> in Dallas, TX and surrounding areas.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Open to discussing full-time positions, internships, and collaborative projects. 
            Let's build something amazing together!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;