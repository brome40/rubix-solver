import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface BoxProps {
  position: [number, number, number]
  rightColor?: string
  leftColor?: string
  topColor?: string
  bottomColor?: string
  frontColor?: string
  backColor?: string
}

// Using forwardRef: https://www.carlrippon.com/react-forwardref-typescript/
const Cell = React.forwardRef<THREE.Mesh, BoxProps>((props, ref) => {
  const { position, rightColor, leftColor, topColor, bottomColor, frontColor, backColor } = props;
  return (
    <mesh position={position}>
      <boxBufferGeometry attach='geometry' args={[.97,.97,.97]}/>
      <meshBasicMaterial attach='material-0' color={rightColor ?? 'black'} />
      <meshBasicMaterial attach='material-1' color={leftColor ?? 'black'} />
      <meshBasicMaterial attach='material-2' color={topColor ?? 'black'} />
      <meshBasicMaterial attach='material-3' color={bottomColor ?? 'black'} />
      <meshBasicMaterial attach='material-4' color={frontColor ?? 'black'} />
      <meshBasicMaterial attach='material-5' color={backColor ?? 'black'} />
    </mesh>
  );
})

export const Cube = () => {
    return (
      <Canvas camera={{position: [1,1,6]}}>
        <OrbitControls
          target={[1,1,1]}
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
        <ambientLight intensity={0.5}/>
        <spotLight position={[10,5,10]}/>
        <group>
          {/* Cube Cells  -Center of [1,1,1] is excluded- */}
          <Cell position={[0,0,0]} leftColor='blue' bottomColor='white' backColor='darkorange'/>
          <Cell position={[0,1,0]} leftColor='blue' backColor='darkorange'/>
          <Cell position={[0,2,0]} leftColor='blue' topColor='yellow' backColor='darkorange'/>
          <Cell position={[1,0,0]} bottomColor='white' backColor='darkorange'/>
          <Cell position={[1,1,0]} backColor='darkorange'/>
          <Cell position={[1,2,0]} topColor='yellow' backColor='darkorange'/>
          <Cell position={[2,0,0]} rightColor='green' bottomColor='white' backColor='darkorange'/>
          <Cell position={[2,1,0]} rightColor='green' backColor='darkorange'/>
          <Cell position={[2,2,0]} rightColor='green' topColor='yellow' backColor='darkorange'/>
          <Cell position={[0,0,1]} leftColor='blue' bottomColor='white'/>
          <Cell position={[0,1,1]} leftColor='blue'/>
          <Cell position={[0,2,1]} leftColor='blue' topColor='yellow'/>
          <Cell position={[1,0,1]} bottomColor='white'/>
          <Cell position={[1,2,1]} topColor='yellow'/>
          <Cell position={[2,0,1]} rightColor='green' bottomColor='white'/>
          <Cell position={[2,1,1]} rightColor='green'/>
          <Cell position={[2,2,1]} rightColor='green' topColor='yellow'/>
          <Cell position={[0,0,2]} leftColor='blue' bottomColor='white' frontColor='red'/>
          <Cell position={[0,1,2]} leftColor='blue' frontColor='red'/>
          <Cell position={[0,2,2]} leftColor='blue' topColor='yellow' frontColor='red'/>
          <Cell position={[1,0,2]} bottomColor='white' frontColor='red'/>
          <Cell position={[1,1,2]} frontColor='red'/>
          <Cell position={[1,2,2]} topColor='yellow' frontColor='red'/>
          <Cell position={[2,0,2]} rightColor='green' bottomColor='white' frontColor='red'/>
          <Cell position={[2,1,2]} rightColor='green' frontColor='red'/>
          <Cell position={[2,2,2]} rightColor='green' topColor='yellow' frontColor='red'/>
        </group>
      </Canvas>
    );
}
