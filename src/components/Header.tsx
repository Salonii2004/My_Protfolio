import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  // ✅ Scroll to #projects section smoothly
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      // If not on home page, go there first, then scroll after short delay
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector("#projects");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const section = document.querySelector("#projects");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-4 py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent animate-glow"
        >
          Saloni<span className="text-red-500">Flix</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>

          {/* ✅ Fixed Project scroll */}
          <a href="#projects" onClick={handleProjectsClick} className="hover:text-red-400 transition">
            Projects
          </a>

          <Link to="/about" className="hover:text-red-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-400 transition">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-red-600 hover:bg-red-500 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4 pb-4 px-4"
          >
            <Link to="/" className="block hover:text-red-400">Home</Link>
            <a href="#projects" onClick={handleProjectsClick} className="block hover:text-red-400">Projects</a>
            <Link to="/about" className="block hover:text-red-400">About</Link>
            <Link to="/contact" className="block hover:text-red-400">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
