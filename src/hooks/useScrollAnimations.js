import { useEffect } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";

function useScrollAnimations() {
  useEffect(() => {
    const context = initScrollAnimations();

    return () => {
      if (context && typeof context.revert === "function") {
        context.revert();
      }
    };
  }, []);
}

export default useScrollAnimations;