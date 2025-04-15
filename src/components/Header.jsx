import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };

  return (
    <header className="bg-light dark:bg-secondary text-black dark:text-white p-4 flex flex-wrap justify-between items-center sticky top-0 z-50 transition-colors duration-300">
      <h1 className="text-xl font-bold tracking-wide">
        <NavLink to="/" className="hover:text-accent text-black dark:text-white transition-colors">Lokeshwar <span className="text-accent">Reddy</span></NavLink>
      </h1>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none hover:text-accent transition-colors"
        >
          ☰
        </button>
      </div>
      <nav className={`${menuOpen ? "block animate-fade-in" : "hidden"} w-full mt-4 md:mt-0 md:block md:w-auto transition-all duration-300`}>
        <div className="flex flex-col md:flex-row">
          {["/", "/about", "/projects", "/skills", "/education", "/contact"].map((path, idx) => {
            const names = ["Home", "About", "Projects", "Skills", "Education", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 my-1 text-accent font-semibold"
                    : "mx-2 my-1 hover:text-gray-600 dark:hover:text-gray-300"
                }
              >
                {names[idx]}
              </NavLink>
            );
          })}
        </div>
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