import "./Technologies.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
} from "react-icons/si";

const techs = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiVite />, name: "Vite" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.85,
    rotateX: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Technologies() {
  return (
    <section className="technologies" id="skills">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="section-tag">TECH STACK</p>

          <h2 className="section-title">
            Technologies I Work With
          </h2>

          <p className="section-subtitle">
            Modern tools and technologies I use to build fast,
            responsive and scalable web applications.
          </p>
        </motion.div>

        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
        >
          {techs.map((tech) => (
            <motion.div
              className="tech-card"
              key={tech.name}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                rotate: 1,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <motion.div
                className="tech-icon"
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                {tech.icon}
              </motion.div>

              <h3>{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Technologies;