import { useState } from 'react';
import useTheme from '../hooks/useTheme';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <header className="bg-light dark:bg-secondary text-black dark:text-white p-4 flex flex-wrap justify-between items-center sticky top-0 z-50 transition-colors duration-300">
      <h1 className="text-xl font-bold tracking-wide">
        <button 
          onClick={() => scrollToSection('home')} 
          className="hover:text-accent text-black dark:text-white transition-colors"
        >
          Lokeshwar <span className="text-accent">Reddy</span>
        </button>
      </h1>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none hover:text-accent transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
      <nav className={`${menuOpen ? "block animate-fade-in" : "hidden"} w-full mt-4 md:mt-0 md:block md:w-auto transition-all duration-300`} role="navigation">
        <div className="flex flex-col md:flex-row">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mx-2 my-1 hover:text-accent transition-colors text-left"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <button
        onClick={toggleTheme}
        className="ml-4 text-xl px-3 py-1 bg-accent hover:bg-highlight text-white rounded transition"
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;