import { Float } from "@react-three/drei";

export default function Planet() {
  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#61E294"
          emissive="#61E294"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}