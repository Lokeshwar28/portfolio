import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Tooltip from "./Tooltip";

const Footer = () => (
  <footer className="bg-light dark:bg-secondary text-black dark:text-white text-center p-4 transition-colors duration-300">
    <hr className="border-t border-gray-600 mb-4" />
    <div className="flex justify-center gap-6 mb-4">
      <Tooltip content="GitHub" position="top">
        <a
          href="https://github.com/Lokeshwar28"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <FaGithub className="text-2xl" />
        </a>
      </Tooltip>
      <Tooltip content="LinkedIn" position="top">
        <a
          href="https://www.linkedin.com/in/lokesh-reddy-g/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/5 hover:bg-highlight hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </Tooltip>
      <Tooltip content="Email" position="top">
        <a
          href="mailto:gummireddy2808@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/5 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Send Email"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </Tooltip>
    </div>
    <a
      href="#home"
      className="block text-sm text-accent hover:text-highlight hover:underline mb-2 transition-colors"
    >
      Back to Top ↑
    </a>
    <p className="text-sm text-slate-600 dark:text-slate-400">
      © {new Date().getFullYear()} Lokeshwar Reddy | All rights reserved
    </p>
  </footer>
);

export default Footer;
