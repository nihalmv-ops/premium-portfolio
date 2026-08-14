import smallproject from "../assets/projects/techmart.jpg";
import portfolioImg from "../assets/projects/ni.jpg";
import gotravel from "../assets/projects/gotravel.jpg";
import dentalclinic from "../assets/projects/project3.jpg";
const projects = [
  {
    id: 1,
    featured: true,

    title: "TrachMart - E-Commerce Store",

    description:
      "A modern responsive e-commerce application with product browsing, cart management, routing, and reusable React components.",

    image: smallproject,

    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Context API",
      "React Router",
      "Local Storage",
    ],

    github: "https://github.com/nihalmv-ops/trachmartshop",

    demo: "https://trachmartshop.vercel.app/",
  },

  {
    id: 2,
    featured: true,

    title: "3D Portfolio",

    description:
      "A modern space-themed portfolio built with React, Three.js, and smooth animations, designed to create an immersive and interactive web experience.",

    image: portfolioImg,

    technologies: [
      "React",
      "CSS3",
      "JavaScript",
      "Three.js",
      "Vite",
      "GSAP",
      "GitHub",
    ],

    github: "https://github.com/nihalmv-ops/space-portfolio",

    demo: "https://space-portfolio-qrgk.vercel.app/",
  },

  {
    id: 3,
    featured: true,

    title: "GoTravel - Travel Booking Website",

    description:
      "A modern and responsive travel booking website designed to provide a smooth travel-planning experience with destinations, packages, wishlist, bookings, notifications, and more. 🌍✈️",

    image: gotravel,

    technologies: [
      "React",
      "CSS3",
      "JavaScript",
      "React Router",
      "Vite",
      "Context API",
      "Local Storage",
      "Framer Motion",
      "Swiper",
      "React Toastify",
    ],

    github: "https://github.com/nihalmv-ops/rgotravel",

    demo: "https://rgotravel.vercel.app/",
  },

    {
    id: 4,
    featured: true,

    title: "GoTravel - Travel Booking Website",

    description:
      "A modern, responsive healthcare website designed to provide patients with a smooth and professional online experience.",

    image: dentalclinic,

    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Github"
      
    ],

    github: "https://github.com/nihalmv-ops/hospital/",

    demo: "https://nihalmv-ops.github.io/hospital/",
  },
];

export default projects;

