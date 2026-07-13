import "./Projects.css";
import { motion } from "framer-motion";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">
            FEATURED PROJECTS
          </p>

          <h2 className="section-title">
            Selected Work
          </h2>

          <p className="section-subtitle">
            A collection of projects that showcase my skills in
            React, frontend development, responsive design,
            and modern UI development.
          </p>
        </motion.div>

        {/* Projects Grid */}

        <div className="projects-grid">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;