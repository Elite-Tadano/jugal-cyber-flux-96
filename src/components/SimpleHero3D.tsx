import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeoRubiksCube() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Smooth rotation
    groupRef.current.rotation.x = time * 0.06;
    groupRef.current.rotation.y = time * 0.08;
    
    // Gentle floating
    groupRef.current.position.y = Math.sin(time * 0.3) * 0.1;
  });

  // Neo cyberpunk colors with metallic/chrome effects
  const neoColors = [
    '#00ffff', // Cyan
    '#ff00ff', // Magenta  
    '#ffff00', // Yellow
    '#00ff00', // Green
    '#ff0080', // Hot pink
    '#8000ff', // Purple
    '#ff4000', // Orange-red
    '#0080ff'  // Blue
  ];

  // Create individual cube tiles with gap between them
  const createNeoTiles = () => {
    const tiles = [];
    const tileSize = 0.45;
    const gap = 0.15;
    const spacing = tileSize + gap;
    const offset = -spacing;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          // Skip center for hollow effect
          if (x === 1 && y === 1 && z === 1) continue;
          
          const position: [number, number, number] = [
            offset + x * spacing,
            offset + y * spacing, 
            offset + z * spacing
          ];
          
          const colorIndex = (x + y + z) % neoColors.length;
          
          tiles.push(
            <group key={`tile-${x}-${y}-${z}`} position={position}>
              {/* Main shiny tile */}
              <mesh>
                <boxGeometry args={[tileSize, tileSize, tileSize]} />
                <meshStandardMaterial 
                  color={neoColors[colorIndex]}
                  metalness={0.9}
                  roughness={0.1}
                  emissive={neoColors[colorIndex]}
                  emissiveIntensity={0.2}
                />
              </mesh>
              
              {/* Glowing edge outline */}
              <mesh>
                <boxGeometry args={[tileSize + 0.02, tileSize + 0.02, tileSize + 0.02]} />
                <meshStandardMaterial 
                  color={neoColors[colorIndex]}
                  transparent
                  opacity={0.3}
                  emissive={neoColors[colorIndex]}
                  emissiveIntensity={0.4}
                />
              </mesh>
            </group>
          );
        }
      }
    }
    return tiles;
  };

  return (
    <group ref={groupRef}>
      {createNeoTiles()}
      
      {/* Central plasma core */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#00ffff"
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
          metalness={1.0}
          roughness={0.0}
        />
      </mesh>
      
      {/* Outer energy field */}
      <mesh>
        <sphereGeometry args={[1.8, 16, 16]} />
        <meshStandardMaterial 
          color="#00ffff"
          transparent
          opacity={0.1}
          emissive="#00ffff"
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>
    </group>
  );
}

export function SimpleHero3D() {
  return (
    <Canvas 
      className="w-full h-full" 
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      {/* Enhanced lighting for neo effect */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#00ffff" />
      <pointLight position={[3, -2, -3]} intensity={0.6} color="#ff00ff" />
      <spotLight position={[0, 5, 0]} intensity={0.5} color="#ffff00" angle={0.3} />
      
      <NeoRubiksCube />
    </Canvas>
  );
}