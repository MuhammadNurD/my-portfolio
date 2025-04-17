import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Sphere } from "@react-three/drei";

const BinaryBall = ({ color }) => {
  const binaryChars = Array.from({ length: 30 }, () =>
    Math.random() > 0.5 ? "1" : "0"
  );

  return binaryChars.map((char, i) => {
    const phi = Math.acos(-1 + (2 * i) / 30);
    const theta = Math.sqrt(30 * Math.PI) * phi;
    const radius = 1.5;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return (
      <Text
        key={i}
        position={[x, y, z]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {char}
      </Text>
    );
  });
};

const Hologram = ({ theme }) => {
  const hologramColor = theme === "dark" ? "white" : "black";

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "100vw", height: "80vh" }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Sphere args={[1.5, 32, 32]}>
          <meshBasicMaterial
            wireframe
            color={hologramColor}
            transparent
            opacity={0.2}
          />
        </Sphere>
        <BinaryBall color={hologramColor} />
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};


export default Hologram;
