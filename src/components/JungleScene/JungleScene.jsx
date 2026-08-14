import { Canvas, useFrame } from "@react-three/fiber";



/* =========================
   TREE
========================= */

function Tree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>

      {/* Trunk */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 4, 8]} />
        <meshStandardMaterial
          color="#241b12"
          roughness={1}
        />
      </mesh>

      {/* Leaves */}
      <mesh position={[0, 4.3, 0]}>
        <coneGeometry args={[2, 3.5, 8]} />
        <meshStandardMaterial
          color="#16351c"
          roughness={1}
        />
      </mesh>

      <mesh position={[0, 5.7, 0]}>
        <coneGeometry args={[1.4, 2.5, 8]} />
        <meshStandardMaterial
          color="#214a27"
          roughness={1}
        />
      </mesh>

    </group>
  );
}


/* =========================
   TREES
========================= */

function Trees() {
  return (
    <>
      <Tree
        position={[-5, 0, -4]}
        scale={1.2}
      />

      <Tree
        position={[5, 0, -5]}
        scale={1.4}
      />

      <Tree
        position={[-9, 0, -10]}
        scale={1.7}
      />

      <Tree
        position={[9, 0, -11]}
        scale={1.8}
      />

      <Tree
        position={[-12, 0, -2]}
        scale={1.5}
      />

      <Tree
        position={[12, 0, -3]}
        scale={1.6}
      />
    </>
  );
}


/* =========================
   GROUND
========================= */

function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
    >
      <planeGeometry args={[80, 80]} />

      <meshStandardMaterial
        color="#081008"
        roughness={1}
      />
    </mesh>
  );
}


/* =========================
   LIGHTING
========================= */

function JungleLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[0, 10, 5]}
        intensity={2}
        color="#b8d58c"
      />

      <pointLight
        position={[0, 4, 4]}
        intensity={5}
        distance={15}
        color="#79a957"
      />
    </>
  );
}


/* =========================
   CAMERA
========================= */

function CameraAnimation() {

  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    state.camera.position.x =
      Math.sin(time * 0.15) * 0.3;

    state.camera.position.y =
      1.8 + Math.sin(time * 0.2) * 0.08;

    state.camera.lookAt(
      0,
      2,
      -3
    );

  });

  return null;
}


/* =========================
   MAIN JUNGLE SCENE
========================= */

export default function JungleScene() {

  return (

    <div
      className="
        jungle-scene
        fixed
        inset-0
        h-screen
        w-full
        overflow-hidden
      "
      style={{
        zIndex: 0,
      }}
    >

      <Canvas
        camera={{
          position: [0, 1.8, 10],
          fov: 55,
        }}

        dpr={[1, 1.5]}

        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >

        {/* Background */}

        <color
          attach="background"
          args={["#081009"]}
        />

        {/* Fog */}

        <fog
          attach="fog"
          args={[
            "#081009",
            8,
            30,
          ]}
        />

        {/* Lights */}

        <JungleLighting />

        {/* Environment */}

        <Ground />

        <Trees />

        {/* Camera */}

        <CameraAnimation />

      </Canvas>


      {/* Cinematic Overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/60
        "
      />

    </div>

  );
}