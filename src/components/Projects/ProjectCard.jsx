import "./Projects.css";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({ project, index }) {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;

    const rotateX = -((y / rect.height) - 0.5) * 14;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  };

  const reset = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.article
      className="project-card"
      initial={{
        opacity: 0,
        y: 80,
        scale: .92,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: .2,
      }}
      transition={{
        duration: .7,
        delay: index * .12,
      }}
      style={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {project.featured && (
        <span className="featured-badge">
          Featured
        </span>
      )}

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">

          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}

        </div>

        <div className="project-buttons">

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .96,
            }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <FaGithub />

            GitHub
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .96,
            }}
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-btn demo-btn"
          >
            <FaExternalLinkAlt />

            Live Demo
          </motion.a>

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;