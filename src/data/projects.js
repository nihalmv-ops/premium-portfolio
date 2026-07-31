import portfolioImg from "../assets/projects/project 2.jpg";
import smallproject from "../assets/projects/project1.jpg";
import trachmartImg from "../assets/projects/project3.jpg";

 


const projects = [

    {
  id: 1,

  featured: true,

  title: "TrachMart - E-Commerce Store",

  description:
    "A modern responsive e-commerce application with product browsing, cart management, routing and reusable React components.",

  image: trachmartImg,

  technologies: [
    "React.js",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "Context API",
    "React Router",
    "Local Storage"
  ],

  github:
    "https://github.com/nihalmv-ops/trachmartshop",

  demo:
    "https://trachmartshop.vercel.app/"
},

    {
        id: 2,

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
        id: 3,

        featured: false,

        title: "Personal Link Hub",

        description:
            "A modern personal bio link platform that brings social profiles, portfolio links, and important resources together in a clean and responsive interface.",

        image: smallproject,

        technologies: [
            "Vite",
            "React.js",
            "CSS3",
            "Responsive Design",
            
        ],

        github:
            "https://github.com/nihalmv-ops/sole",

        demo:
            "https://sole-sand.vercel.app/",
    },




];

export default projects;