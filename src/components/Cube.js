import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";

function Cell() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.02;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[2,2,2]}/>
      <meshBasicMaterial attach='material-0' color='green' /> {/* Right Side*/}
      <meshBasicMaterial attach='material-1' color='blue' />  {/* Left Side*/}
      <meshBasicMaterial attach='material-2' color='yellow' /> {/* Top Side*/}
      <meshBasicMaterial attach='material-3' color='white' />  {/* Bottom Side*/}
      <meshBasicMaterial attach='material-4' color='red' />   {/* Front Side*/}
      <meshBasicMaterial attach='material-5' color='orange' />  {/* Back Side*/}
    </mesh>
  );
}

export default function Cube() {
    return (
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <spotLight position={[10,5,10]}/>
        <Cell />
      </Canvas>
    );
}
