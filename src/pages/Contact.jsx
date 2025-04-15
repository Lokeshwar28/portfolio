import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-primary dark:bg-primary bg-light text-white dark:text-white text-black px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      <p className="text-center text-accent text-xl font-semibold mb-2">📬 Get in Touch</p>
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      
      <div className="flex justify-center gap-6 my-6">
        <a href="https://github.com/Lokeshwar28" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-black dark:text-white text-2xl hover:text-accent transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/lokesh-reddy-g/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-black dark:text-white text-2xl hover:text-accent transition duration-300" />
        </a>
        <a href="mailto:lokeshwar2808@gmail.com">
          <FaEnvelope className="text-black dark:text-white text-2xl hover:text-accent transition duration-300" />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form
          action="https://formspree.io/f/xblgprak"  // <-- replace this
          method="POST"
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-accent hover:bg-highlight text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;