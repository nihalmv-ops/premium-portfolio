import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const context = gsap.context(() => {
    /* =====================================
       HERO CONTENT
    ===================================== */

    gsap.to("#home > div", {
      y: -120,
      opacity: 0.2,

      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    /* =====================================
       HERO TITLE
    ===================================== */

    gsap.to(".hero-title", {
      scale: 1.08,
      opacity: 0,

      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "80% top",
        scrub: 1,
      },
    });

    /* =====================================
       JUNGLE SCENE
    ===================================== */

    gsap.to(".jungle-scene", {
      scale: 1.08,

      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return context;
}