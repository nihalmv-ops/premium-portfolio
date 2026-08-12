import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ShootingStars() {
  const star = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    star.current.position.x = Math.sin(t * 0.5) * 25;
    star.current.position.y = Math.cos(t * 0.8) * 10;
    star.current.position.z = Math.sin(t) * 15;
  });

  return (
    <mesh ref={star}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#d9dee5" />
    </mesh>
  );
}