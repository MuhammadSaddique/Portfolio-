'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import { Group, Mesh, MeshStandardMaterial } from 'three';

type FloatingLaptopProps = {
  position: [number, number, number];
};

export function FloatingLaptop({ position }: FloatingLaptopProps) {
  const meshRef = useRef<Group>(null);
  
  // Create a modern MacBook-style laptop model
  const createMacBook = () => {
    return (
      <group ref={meshRef} position={position}>
        {/* Base of the MacBook */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2, 0.05, 1.5]} />
          <meshStandardMaterial
            color="#e2e2e2"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Screen base */}
        <mesh position={[0, 0.55, -0.65]} rotation={[Math.PI / 6, 0, 0]}>
          <boxGeometry args={[1.9, 1.2, 0.05]} />
          <meshStandardMaterial
            color="#e2e2e2"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Screen display */}
        <mesh position={[0, 0.55, -0.62]} rotation={[Math.PI / 6, 0, 0]}>
          <planeGeometry args={[1.8, 1.1]} />
          <meshStandardMaterial
            color="#1a1a2e"
            emissive="#1a1a2e"
            emissiveIntensity={0.2}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Apple logo */}
        <mesh position={[0, 0.55, -0.68]} rotation={[Math.PI / 6, 0, Math.PI]}>
          <planeGeometry args={[0.3, 0.35]} />
          <meshStandardMaterial
            color="#e2e2e2"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    );
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Subtle floating animation
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 4) * 0.2;
    meshRef.current.rotation.x = Math.sin(t / 5) * 0.1;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      {createMacBook()}
    </Float>
  );
}