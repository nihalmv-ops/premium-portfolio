import portfolioImg from "../assets/projects/project 2.jpg";
import smallproject from "../assets/projects/project1.jpg";
import clipboardImg from "../assets/projects/project3.jpg";
 


const projects = [

    {
        id: 1,

        featured: true,

        title: "Hospital Website | Frontend Project",

        description:
          "A modern responsive hospital website built using HTML, CSS, and JavaScript with clean UI, interactive components, and a user-friendly healthcare experience.",
        image: portfolioImg,

        technologies: [
          "HTML5",
       "CSS3",
       "JavaScript",
      "Responsive Design"
        ],

        github:
            "https://github.com/nihalmv-ops/hospital",

        demo:
            "https://nihalmv-ops.github.io/hospital/",
    },


    {
        id: 2,

        featured: true,

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
    },


    
    {
        id: 3,

        featured: false,

        title: "Personal Link Hub",

        description:
            "A modern personal bio link platform that brings social profiles, portfolio links, and important resources together in a clean and responsive interface.",

        image: smallproject,

        technologies: [
            "HTML",
            "CSS3",
            "Responsive Design",
            "React.js"
        ],

        github:
            "https://github.com/nihalmv-ops/sole",

        demo:
            "https://sole-sand.vercel.app/",
    }


];

export default projects;