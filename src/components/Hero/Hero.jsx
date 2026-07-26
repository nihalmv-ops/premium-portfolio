import "./Hero.css";

import { motion } from "framer-motion";

import SlideLeft from "../Animation/SlideLeft";
import SlideRight from "../Animation/SlideRight";

import {
  FaArrowRight,
  FaDownload
} from "react-icons/fa";


function Hero() {

  return (

    <section className="hero" id="home">

      <div className="container hero-container">


        {/* LEFT SIDE */}

        <SlideLeft>

          <div className="hero-content">


            <motion.div
              className="hero-badge"

              initial={{
                opacity:0,
                y:-30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.4,
                duration:.6
              }}
            >

              <span></span>

              Available For Work

            </motion.div>



            <h1>

              Frontend

              <br />

              <span>
                React Developer
              </span>

            </h1>



            <p>

              I build modern, responsive and
              high-performance web applications
              using React, JavaScript and modern
              website technologies.

            </p>



            <motion.div

              className="hero-buttons"

              initial={{
                opacity:0,
                y:40
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.6,
                duration:.7
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
              >

                Resume

                <FaDownload />

              </a>


            </motion.div>


          </div>


        </SlideLeft>





        {/* RIGHT SIDE */}


        <SlideRight>


          <div className="hero-code">


            <motion.div

              className="code-window"


              animate={{

                y:[0,-12,0]

              }}


              transition={{

                duration:5,

                repeat:Infinity,

                ease:"easeInOut"

              }}

            >


              <div className="window-top">

                <span></span>

                <span></span>

                <span></span>

              </div>



<pre>
{`import React from "react";

const Developer = () => {

 return (
   <Portfolio />
 );

}

export default Developer;`}
</pre>


            </motion.div>


          </div>


        </SlideRight>



      </div>


    </section>

  );

}


export default Hero;