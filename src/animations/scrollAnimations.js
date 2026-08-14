import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const ctx = gsap.context(() => {
    gsap.to(".hero-content", {
      y: -120,
      opacity: 0,
      ease: "none",

      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "80% top",
        scrub: true,
      },
    });

    gsap.to(".jungle-scene", {
      scale: 1.08,
      y: 40,
      ease: "none",

      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "100% top",
        scrub: true,
      },
    });

    gsap.fromTo(
      "#projects h2",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: "#projects",
          start: "top 75%",
          end: "top 35%",
          scrub: true,
        },
      }
    );
  });

  return () => {
    ctx.revert();
  };
}