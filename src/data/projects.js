import portfolioImg from "../assets/projects/project 2.jpg";
import travelImg from "../assets/projects/project1.jpg";
import clipboardImg from "../assets/projects/project3.jpg";

const projects = [

    {
        id: 1,

        featured: true,

        title: "Developer Portfolio",

        description:
            "A premium React portfolio with Framer Motion animations, reusable components and responsive design.",

        image: portfolioImg,

        technologies: [
            "React",
            "CSS",
            "Framer Motion",
            "Vite"
        ],

        github:
            "https://github.com/nihalmv-ops",

        demo:
            "https://your-demo-link.com",
    },

    {
        id: 2,

        featured: true,

        title: "Travel Landing Page",

        description:
            "Modern responsive landing page with smooth animations and reusable UI components.",

        image: travelImg,

        technologies: [
            "React",
            "CSS",
            "Responsive"
        ],

        github:
            "https://github.com/nihalmv-ops",

        demo:
            "https://your-demo-link.com",
    },

    {
        id: 3,

        featured: false,

        title: "Clipboard Landing Page",

        description:
            "Frontend Mentor challenge built with clean HTML, CSS and React best practices.",

        image: clipboardImg,

        technologies: [
            "HTML",
            "CSS",
            "React"
        ],

        github:
            "https://github.com/nihalmv-ops",

        demo:
            "https://your-demo-link.com",
    }

];

export default projects;