"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";

export default function CharacterBuilder() {
  const [active, setActive] = useState(false);
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onWheel={(e) => console.log("wheel spins", e.target)}
        visible
        userData={{ hello: "world" }}
        position={[0, 0, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <boxGeometry args={[2, 2, 2]} />
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh>
    </Canvas>
  );
}
