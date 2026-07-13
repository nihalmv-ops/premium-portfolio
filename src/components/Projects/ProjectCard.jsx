import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      whileHover={{ y: -12 }}
    >
      {/* Featured Badge */}

      {project.featured && (
        <span className="featured-badge">
          Featured
        </span>
      )}

      {/* Image */}

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      {/* Content */}

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* Technology */}

        <div className="project-tech">

          {project.technologies.map((tech) => (

            <span key={tech}>
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-btn demo-btn"
          >
            <FaExternalLinkAlt />

            Live Demo
          </a>

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;