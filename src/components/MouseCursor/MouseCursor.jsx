import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./CosmicCursor.css";

export default function MouseCursor() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      0.1,
      100
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(70, 70);

    container.appendChild(renderer.domElement);

    /* =========================
       DIAMOND
    ========================= */

    const diamondGeometry =
      new THREE.OctahedronGeometry(0.38, 1);

    const diamondMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.95,
      });

    const diamond = new THREE.Mesh(
      diamondGeometry,
      diamondMaterial
    );

    scene.add(diamond);

    /* =========================
       GLOW
    ========================= */

    const glowGeometry =
      new THREE.SphereGeometry(
        0.58,
        32,
        32
      );

    const glowMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xb78cff,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
      });

    const glow = new THREE.Mesh(
      glowGeometry,
      glowMaterial
    );

    scene.add(glow);

    /* =========================
       MOUSE POSITION
    ========================= */

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event) => {
      targetX =
        (event.clientX / window.innerWidth) * 2 - 1;

      targetY =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    /* =========================
       ANIMATION
    ========================= */

    const clock = new THREE.Clock();

    let animationFrame;

    const animate = () => {
      animationFrame =
        requestAnimationFrame(animate);

      const time =
        clock.getElapsedTime();

      /* Smooth mouse movement */

      currentX +=
        (targetX - currentX) * 0.12;

      currentY +=
        (targetY - currentY) * 0.12;

      /* Convert to screen position */

      const screenX =
        ((currentX + 1) / 2) *
        window.innerWidth;

      const screenY =
        ((1 - currentY) / 2) *
        window.innerHeight;

      container.style.transform = `
        translate3d(
          ${screenX - 35}px,
          ${screenY - 35}px,
          0
        )
      `;

      /* Diamond rotation */

      diamond.rotation.x =
        time * 1.5;

      diamond.rotation.y =
        time * 2;

      diamond.rotation.z =
        time * 0.7;

      /* Glow breathing */

      glow.material.opacity =
        0.12 +
        Math.sin(time * 4) * 0.04;

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    /* =========================
       CLEANUP
    ========================= */

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(
        animationFrame
      );

      diamondGeometry.dispose();
      diamondMaterial.dispose();

      glowGeometry.dispose();
      glowMaterial.dispose();

      renderer.dispose();

      if (
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mouse-3d-cursor"
    />
  );
}