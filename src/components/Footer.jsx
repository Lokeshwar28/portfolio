import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
    <footer className="bg-secondary dark:bg-secondary bg-light text-white dark:text-white text-black text-center p-4 transition">
      <hr className="border-t border-gray-600 mb-4" />
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/Lokeshwar28" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-black dark:text-white hover:text-accent transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/lokesh-reddy-g/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-black dark:text-white hover:text-accent transition duration-300" />
        </a>
        <a href="mailto:lokeshwar2808@gmail.com">
          <FaEnvelope className="text-xl text-black dark:text-white hover:text-accent transition duration-300" />
        </a>
      </div>
      <a href="#" className="block text-sm text-accent hover:underline mb-1">Back to Top ↑</a>
      <p className="text-sm">© {new Date().getFullYear()} Lokeshwar Reddy | All rights reserved</p>
    </footer>
);

export default Footer;