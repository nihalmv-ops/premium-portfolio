import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
} from "@react-three/drei";

import { useRef } from "react";

function JungleObject() {
  const objectRef = useRef(null);

  useFrame((state) => {
    if (!objectRef.current) return;

    const time = state.clock.getElapsedTime();

    objectRef.current.rotation.y = time * 0.08;

    objectRef.current.position.y =
      Math.sin(time * 0.8) * 0.08;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.15}
      floatIntensity={0.25}
    >
      <mesh ref={objectRef}>
        <icosahedronGeometry args={[1.25, 3]} />

        <meshStandardMaterial
          color="#263b25"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function JungleLights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 8, 4]}
        intensity={1.8}
        color="#b9d8a0"
      />

      <pointLight
        position={[-4, 2, 2]}
        intensity={3}
        distance={12}
        color="#6f9f62"
      />
    </>
  );
}

export default function JungleScene() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full bg-[#050805]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0.5, 6],
          fov: 55,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <color
          attach="background"
          args={["#050805"]}
        />

        <fog
          attach="fog"
          args={["#050805", 8, 25]}
        />

        <JungleLights />

        <Stars
          radius={80}
          depth={40}
          count={1800}
          factor={2}
          saturation={0}
          fade
          speed={0.15}
        />

        <JungleObject />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}