import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Tree({ position, scale = 1, rotation = 0 }) {
  return (
    <group
      position={position}
      rotation={[0, rotation, 0]}
      scale={scale}
    >
      {/* Trunk */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.22, 0.38, 3.6, 8]} />
        <meshStandardMaterial
          color="#211a12"
          roughness={1}
        />
      </mesh>

      {/* Lower foliage */}
      <mesh position={[0, 3.5, 0]}>
        <coneGeometry args={[1.5, 2.5, 8]} />
        <meshStandardMaterial
          color="#102516"
          roughness={1}
        />
      </mesh>

      {/* Middle foliage */}
      <mesh position={[0, 4.8, 0]}>
        <coneGeometry args={[1.2, 2.2, 8]} />
        <meshStandardMaterial
          color="#17351d"
          roughness={1}
        />
      </mesh>

      {/* Top foliage */}
      <mesh position={[0, 5.9, 0]}>
        <coneGeometry args={[0.8, 1.7, 8]} />
        <meshStandardMaterial
          color="#214a26"
          roughness={1}
        />
      </mesh>
    </group>
  );
}

function Rock({ position, scale = 1 }) {
  return (
    <mesh
      position={position}
      scale={scale}
      rotation={[0.2, 0.4, 0.1]}
    >
      <icosahedronGeometry args={[0.7, 1]} />

      <meshStandardMaterial
        color="#252a22"
        roughness={1}
      />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.35, 0]}
    >
      <planeGeometry args={[80, 80]} />

      <meshStandardMaterial
        color="#071008"
        roughness={1}
      />
    </mesh>
  );
}

function JungleEnvironment() {
  const trees = useMemo(
    () => [
      [-8, 0, -4, 1.4, 0.2],
      [-6, 0, -8, 1.1, 1],
      [7, 0, -6, 1.5, 2],
      [9, 0, -1, 1.2, 0.5],
      [-10, 0, 3, 1.3, 1.4],
      [10, 0, 5, 1.5, 2.3],
      [-7, 0, 8, 1.1, 0.4],
      [7, 0, 9, 1.2, 1.2],
      [-13, 0, -10, 1.8, 0.8],
      [13, 0, -12, 1.8, 2],
    ],
    []
  );

  return (
    <>
      <Ground />

      {trees.map((tree, index) => (
        <Tree
          key={index}
          position={[tree[0], tree[1], tree[2]]}
          scale={tree[3]}
          rotation={tree[4]}
        />
      ))}

      <Rock
        position={[-2, 0.2, -3]}
        scale={1.1}
      />

      <Rock
        position={[3, 0.1, -5]}
        scale={0.7}
      />

      <Rock
        position={[-4, 0.1, 2]}
        scale={0.8}
      />
    </>
  );
}

function JungleCore() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!group.current) return;

    group.current.rotation.y = time * 0.08;

    group.current.position.y =
      Math.sin(time * 0.6) * 0.08;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.12}
      floatIntensity={0.18}
    >
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.1, 2]} />

          <meshStandardMaterial
            color="#18321c"
            roughness={0.95}
            metalness={0.05}
          />
        </mesh>
      </group>
    </Float>
  );
}

function JungleLighting() {
  return (
    <>
      <ambientLight intensity={0.18} />

      <directionalLight
        position={[4, 10, 2]}
        intensity={1.8}
        color="#b9d99b"
      />

      <directionalLight
        position={[-6, 4, -4]}
        intensity={0.8}
        color="#315b35"
      />

      <pointLight
        position={[0, 3, 2]}
        intensity={2}
        distance={12}
        color="#6f9f55"
      />
    </>
  );
}

function Fireflies() {
  return (
    <Sparkles
      count={180}
      scale={[20, 10, 20]}
      size={2}
      speed={0.3}
      opacity={0.55}
      color="#b8df7b"
    />
  );
}

export default function JungleScene() {
  return (
    <div className="jungle-scene fixed inset-0 -z-10 h-screen w-full bg-[#050805]">

      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 2.5, 10],
          fov: 55,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color
          attach="background"
          args={["#050805"]}
        />

        <fog
          attach="fog"
          args={["#050805", 7, 30]}
        />

        <JungleLighting />

        <JungleEnvironment />

        <Fireflies />

        <JungleCore />
      </Canvas>

      {/* Dark cinematic vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.42)_100%)]
        "
      />

      {/* Top / bottom cinematic darkness */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-black/40
          via-transparent
          to-black/70
        "
      />
    </div>
  );
}