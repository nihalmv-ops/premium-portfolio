import { Canvas } from "@react-three/fiber";

export default function JungleScene() {
  return (
    <div
      className="
        jungle-scene
        fixed
        inset-0
        -z-10
        h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >
      <Canvas
        dpr={
          typeof window !== "undefined" &&
          window.innerWidth < 768
            ? [1, 1]
            : [1, 1.5]
        }
        camera={{
          position: [0, 0, 6],
          fov: 55,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        {/* Pure Black Background */}
        <color
          attach="background"
          args={["#000000"]}
        />
      </Canvas>
    </div>
  );
}