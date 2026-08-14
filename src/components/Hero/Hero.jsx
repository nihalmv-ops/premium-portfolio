import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Availability Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            <span className="status-dot" />
            Available For Work
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            Frontend
            <br />
            <span>React Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            I build modern, responsive and high-performance
            web applications using React, JavaScript and
            modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <FaDownload />
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="hero-tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
          >
            <span>React</span>
            <span>JavaScript</span>
            <span>Tailwind</span>
            <span>Git</span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-code"
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="code-window"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Window Header */}
            <div className="window-top">
              <span className="window-red" />
              <span className="window-yellow" />
              <span className="window-green" />

              <div className="window-title">
                developer.jsx
              </div>
            </div>

            {/* Code */}
            <pre>
              <code>{`import React from "react";

const Developer = () => {
  return (
    <Portfolio
      name="Nihal MV"
      role="React Developer"
    />
  );
};

export default Developer;`}</code>
            </pre>

            {/* Code Status */}
            <div className="code-status">
              <span />
              Building digital experiences...
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}

export default Hero;