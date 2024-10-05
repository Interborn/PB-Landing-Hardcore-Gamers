import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const SquidModel = () => {
  const { scene } = useGLTF('/models/shark.glb'); // Ensure this path is correct
  const squidRef = useRef<THREE.Object3D>(null!); // Explicitly typing as Object3D

  let clock = new THREE.Clock();

  // Animate the squid to swim in an up-down motion
  useFrame(() => {
    if (squidRef.current) {
      const elapsedTime = clock.getElapsedTime();

      // Up-down movement using a sine wave
      squidRef.current.position.y = Math.sin(elapsedTime) * 0.5; // Move up and down

      // Slight forward-backward rotation to simulate swimming
      squidRef.current.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1; // Slight tilt side-to-side
    }
  });

  return <primitive ref={squidRef} object={scene} scale={0.02} />;
};

export default SquidModel;