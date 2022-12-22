import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cell() {
  return (
    <mesh >
      <boxGeometry attach='geometry' args={[2,2,2,3]}/>
      <meshStandardMaterial attach='material' color='green' />
    </mesh>
  );
}

export default function Cube() {
    return (
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <pointLight position={[10,10,10]}/>
        <Cell />
      </Canvas>
    );
}
