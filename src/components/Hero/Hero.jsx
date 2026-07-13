import "./Hero.css";
import { FaArrowRight, FaDownload } from "react-icons/fa";


function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Available For Work
          </div>

          <h1>
            Frontend
            <br />
            <span>React Developer</span>
          </h1>

          <p>
            I build modern, responsive and high-performance web
            applications using React, JavaScript and modern website
            technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View Projects
              <FaArrowRight />
            </a>

            <a href="/resume.pdf" className="btn btn-secondary">
              Resume
              <FaDownload />
            </a>

          </div>

         

        </div>

        {/* Right Side */}

        <div className="hero-code">

          <div className="code-window">

            <div className="window-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

<pre>{`import React from "react";

const Developer = () => {

   return (
      <Portfolio />
   );

}

export default Developer;`}</pre>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;