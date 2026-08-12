import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function Galaxy() {
  const positions = useMemo(() => {
    const p = [];

    for (let i = 0; i < 12000; i++) {
      const radius = 50 + Math.random() * 120;
      const angle = Math.random() * Math.PI * 2;

      p.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 60,
        Math.sin(angle) * radius
      );
    }

    return new Float32Array(p);
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.12}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}