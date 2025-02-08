import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';

const AmnesiacRoom = () => {
  const meshRef = useRef<THREE.Mesh>();
  
  useFrame(({ clock }) => {
    // Subtle floating movement
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} />
      <Environment preset="sunset" />
      
      <mesh ref={meshRef}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial 
          color="#2d2d2d"
          roughness={0.5}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Gallery walls that can receive uploaded artwork */}
      <ArtworkWalls artworks={uploadedArtworks} />
    </Canvas>
  );
}; 