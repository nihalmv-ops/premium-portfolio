import { useEffect, useRef } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return <div className="cursor-glow" ref={glowRef}></div>;
}

export default CursorGlow;