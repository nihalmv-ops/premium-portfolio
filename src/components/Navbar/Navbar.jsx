import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { navLinks } from "./navbarData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/10 py-4"
          : "py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">

        {/* Logo */}
<a
  href="#home"
  className="text-3xl font-extrabold tracking-tight select-none"
>
  <span className="bg-gradient-to-r from-violet-950 via-fuchsia-960 to-cyan-400 bg-clip-text text-transparent">
    N
  </span>
  <span className="bg-gradient-to-r from-violet-960 via-white-950 to-cyan-500 bg-clip-text text-transparent">MV</span>
</a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-10">

          {navLinks.map((item) => (
            <li key={item.id}>

              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`relative text-[15px] transition ${
                  active === item.id
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.title}

                {active === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 h-[2px] w-full bg-violet-500 rounded-full"
                  />
                )}
              </a>

            </li>
          ))}

        </ul>

        {/* Resume Button */}

        <a
          href="#contact"
          className="hidden lg:block btn-primary"
        >
          Hire Me
        </a>

        {/* Mobile Icon */}

        <button
          className="lg:hidden text-3xl mt-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass lg:hidden mt-4 mx-5 rounded-2xl"
        >

          <ul className="flex flex-col p-6 gap-6">

            {navLinks.map((item) => (

              <li key={item.id}>

                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    setActive(item.id);
                    setMenuOpen(false);
                  }}
                  className="text-lg text-gray-300 hover:text-violet-400"
                >
                  {item.title}
                </a>

              </li>

            ))}

          </ul>

        </motion.div>

      )}

    </motion.nav>
  );
};

export default Navbar;