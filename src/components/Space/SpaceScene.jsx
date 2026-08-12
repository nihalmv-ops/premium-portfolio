import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import Galaxy from "./Galaxy";
import ShootingStars from "./ShootingStars";
import MouseLight from "./MouseLight";
import Planet from "./Planet";
import "./Space.css";

function Planet() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
        <Galaxy />

<ShootingStars />

<MouseLight />
      <mesh>
        <icosahedronGeometry args={[1.2, 3]} />
        <meshPhysicalMaterial
          color="#2f083e"
          roughness={0}
          transmission={1}
          thickness={2}
          metalness={0.2}
          clearcoat={1}
          emissive="#270324"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function SpaceScene() {
  return (
    <div className="space-container">
     <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>

<color attach="background" args={["#02030A"]} />

<ambientLight intensity={1} />

<directionalLight
position={[4,4,5]}
intensity={2}
/>

<Stars
radius={250}
depth={100}
count={9000}
factor={7}
fade
/>

<Galaxy />

<Planet />

<ShootingStars />

<MouseLight />
<Planet />

</Canvas>
    </div>
  );
}