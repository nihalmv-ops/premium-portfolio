import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold tracking-wide"
        >
          <span className="text-white">Nihal</span>
          <span className="text-cyan-400">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.name} className="group relative">
              <a
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 duration-300"
              >
                {item.name}
              </a>

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hire Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition"
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col items-center gap-8 py-10">

              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-slate-300 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold"
              >
                Hire Me
              </a>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;