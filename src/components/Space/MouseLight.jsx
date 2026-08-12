import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MouseLight() {
  const light = useRef();

  const { mouse } = useThree();

  useFrame(() => {
    light.current.position.x = mouse.x * 6;
    light.current.position.y = mouse.y * 4;
  });

  return (
    <pointLight
      ref={light}
      intensity={10}
      color="#5cff95"
      distance={25}
    />
  );
}