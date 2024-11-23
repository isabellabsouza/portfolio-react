import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  // Carrega o modelo 3D
  const { scene } = useGLTF("/assets/desk.glb");
  return <primitive object={scene} />;
}

export default function DeskModel() {
  return (
    <Canvas camera={{ position: [5, 1, 1], fov: 8 }}>
      {/* Luzes */}
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      {/* Modelo */}
      <Model />

      {/* Controle de Câmera */}
      <OrbitControls />
    </Canvas>
  );
}
