import "./Technologies.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVite } from "react-icons/si";

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

function Technologies() {
  return (
    <section className="technologies" id="skills">
      <div className="container">

        <div className="section-header">
          <p className="section-tag">TECH STACK</p>

          <h2 className="section-title">
            Technologies I Work With
          </h2>

          <p className="section-subtitle">
            Modern tools and technologies I use to build fast,
            responsive and scalable web applications.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Technologies;