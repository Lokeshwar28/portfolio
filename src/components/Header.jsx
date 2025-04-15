import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };

  return (
    <header className="bg-light dark:bg-secondary text-black dark:text-white p-4 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
      <h1 className="text-xl font-bold tracking-wide">
        <NavLink to="/" className="hover:text-accent text-black dark:text-white transition-colors">Lokeshwar <span className="text-accent">Reddy</span></NavLink>
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "mx-2 text-accent font-semibold" : "mx-2 hover:text-gray-600 dark:hover:text-gray-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "mx-2 text-accent font-semibold" : "mx-2 hover:text-gray-600 dark:hover:text-gray-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "mx-2 text-accent font-semibold" : "mx-2 hover:text-gray-600 dark:hover:text-gray-300"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "mx-2 text-accent font-semibold" : "mx-2 hover:text-gray-600 dark:hover:text-gray-300"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "mx-2 text-accent font-semibold" : "mx-2 hover:text-gray-600 dark:hover:text-gray-300"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "mx-2 text-accent font-semibold" : "mx-2 hover:text-gray-600 dark:hover:text-gray-300"
          }
        >
          Contact
        </NavLink>
      </nav>
      <button
        onClick={toggleMode}
        className="ml-4 text-xl px-3 py-1 bg-accent hover:bg-highlight text-white rounded transition"
        title="Toggle Light/Dark Mode"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;