import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

const navItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "certifications", name: "Certifications" },
  { id: "contact", name: "Contact" },
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up intersection observers for each section
  useEffect(() => {
    const observers = navItems.map((item) => {
      const element = document.getElementById(item.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header
      className={`bg-light/95 dark:bg-secondary/95 backdrop-blur-md text-black dark:text-white p-4 md:px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold tracking-wide z-50">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-accent text-black dark:text-white transition-colors touch-target"
          aria-label="Go to home section"
        >
          Lokeshwar <span className="text-accent">Reddy</span>
        </button>
      </h1>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:block"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 transition-all duration-300 relative group touch-target ${
                activeSection === item.id
                  ? "text-accent font-semibold"
                  : "hover:text-accent"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.name}
              {/* Active indicator */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === item.id ? "w-3/4" : "w-0 group-hover:w-3/4"
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Right side: Theme toggle + Mobile menu button */}
      <div className="flex items-center gap-2 z-50">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-accent/10 hover:bg-accent hover:text-white dark:bg-highlight/10 dark:hover:bg-highlight rounded-lg transition-all duration-300 touch-target"
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <span className="text-xl">{isDark ? "☀️" : "🌙"}</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-2xl hover:text-accent transition-colors touch-target"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-light dark:bg-secondary shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-4 px-4 text-left text-lg border-b border-slate-200 dark:border-slate-700 transition-all duration-300 touch-target ${
                activeSection === item.id
                  ? "text-accent font-semibold bg-accent/5"
                  : "hover:text-accent hover:bg-accent/5 hover:translate-x-2"
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
