import React from 'react';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface Artwork {
  id: string;
  image: string;
  position: THREE.Vector3;
  rotation: THREE.Vector3;
  scale: THREE.Vector3;
  metadata: {
    artist: string;
    title: string;
    medium: string;
    description: string;
  };
}

export const ArtworkWalls: React.FC<{ artworks: Artwork[] }> = ({ artworks }) => {
  return (
    <group>
      {artworks.map((artwork) => (
        <mesh
          key={artwork.id}
          position={artwork.position}
          rotation={artwork.rotation}
          scale={artwork.scale}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial>
            <textureLoader url={artwork.image} />
          </meshStandardMaterial>
          
          <Html>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="artwork-info"
            >
              <h3>{artwork.metadata.title}</h3>
              <p>{artwork.metadata.artist}</p>
            </motion.div>
          </Html>
        </mesh>
      ))}
    </group>
  );
};

export default ArtworkWalls; 