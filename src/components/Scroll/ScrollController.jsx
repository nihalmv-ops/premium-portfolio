import { useEffect } from "react";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import { initScrollAnimations } from "../../animations/scrollAnimations";

function ScrollController() {
  useSmoothScroll();

  useEffect(() => {
    const cleanup = initScrollAnimations();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return null;
}

export default ScrollController;