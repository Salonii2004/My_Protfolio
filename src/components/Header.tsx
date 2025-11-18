import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  const resumeLink =
    "https://drive.google.com/file/d/1IrbdO3xZ1DT2CcetCj7qf3COadOhd6y4/view?usp=drive_link";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-red-500">Saloni</span>Flix
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>

          <a href="#projects" className="hover:text-red-400 transition">
            Projects
          </a>

          <Link to="/research" className="hover:text-red-400 transition">
            Research
          </Link>

          <Link to="/about" className="hover:text-red-400 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-red-400 transition">
            Contact
          </Link>

          {/* Resume Button - Desktop */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-red-400 transition z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl pt-20 px-6">
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="hover:text-red-400 transition"
            >
              Home
            </Link>

            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="hover:text-red-400 transition"
            >
              Projects
            </a>

            <Link
              to="/research"
              onClick={closeMobileMenu}
              className="hover:text-red-400 transition"
            >
              Research
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="hover:text-red-400 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="hover:text-red-400 transition"
            >
              Contact
            </Link>

            {/* Resume Button - Mobile */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="inline-block bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
