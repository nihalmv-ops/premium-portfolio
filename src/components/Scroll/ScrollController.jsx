import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollController() {
  useEffect(() => {
    const refreshScroll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshScroll);

    // Initial refresh
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("load", refreshScroll);
    };
  }, []);

  return null;
}

export default ScrollController;