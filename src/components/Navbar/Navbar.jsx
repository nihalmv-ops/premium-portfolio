import { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const navLinks = [

  { label: "Home", href: "#home" },

  { label: "About", href: "#about" },

  { label: "Skills", href: "#skills" },

  { label: "Projects", href: "#projects" },

  { label: "Contact", href: "#contact" },

];

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "";

  }, [menuOpen]);

  return (

    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="container navbar-container">

        <a href="#home" className="navbar-logo">

          NM<span className="gradient-text">V</span>

        </a>

        <nav className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>

          {navLinks.map((link) => (

            <a

              key={link.href}

              href={link.href}

              className="navbar-link"

              onClick={() => setMenuOpen(false)}

            >

              {link.label}

            </a>

          ))}

          <a

            href="#contact"

            className="btn btn-primary navbar-cta"

            onClick={() => setMenuOpen(false)}

          >

            Let's talk

          </a>

        </nav>

        <button

          className="navbar-toggle"

          onClick={() => setMenuOpen((open) => !open)}

          aria-label={menuOpen ? "Close menu" : "Open menu"}

        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

    </header>

  );

}

export default Navbar;