import { useEffect, useState } from 'react';

const Header = ({ activeSection, onNavigate }) => {
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

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <header className="bg-light dark:bg-secondary text-black dark:text-white p-4 flex flex-wrap justify-between items-center sticky top-0 z-50 transition-colors duration-300 shadow-md">
      <h1 className="text-xl font-bold tracking-wide">
        <button 
          onClick={() => handleNavClick('home')}
          className="hover:text-accent text-black dark:text-white transition-colors"
        >
          Lokeshwar <span className="text-accent">Reddy</span>
        </button>
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
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mx-2 my-1 px-3 py-1 rounded transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-accent font-semibold bg-accent/10"
                  : "hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}
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