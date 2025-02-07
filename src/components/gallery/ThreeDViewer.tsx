
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDViewerProps {
  className?: string;
}

export const ThreeDViewer = ({ className }: ThreeDViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    sceneRef.current = new THREE.Scene();
    
    // Setup camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // Setup renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    sceneRef.current.add(ambientLight, directionalLight);

    // Create objects
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x9b87f5,
      shininess: 60,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    sceneRef.current.add(cube);

    const torusGeometry = new THREE.TorusGeometry(3, 0.5, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0x6E59A5,
      shininess: 60,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 2;
    sceneRef.current.add(torus);

    // Mouse controls
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const deltaMove = {
          x: e.clientX - previousMousePositionRef.current.x,
          y: e.clientY - previousMousePositionRef.current.y
        };

        cube.rotation.y += deltaMove.x * 0.01;
        cube.rotation.x += deltaMove.y * 0.01;
        torus.rotation.y += deltaMove.x * 0.01;
        torus.rotation.x += deltaMove.y * 0.01;
      }

      previousMousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Zoom controls
    const handleWheel = (e: WheelEvent) => {
      if (cameraRef.current) {
        cameraRef.current.position.z += e.deltaY * 0.01;
        cameraRef.current.position.z = Math.max(3, Math.min(10, cameraRef.current.position.z));
      }
    };

    containerRef.current.addEventListener('mousedown', handleMouseDown);
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseup', handleMouseUp);
    containerRef.current.addEventListener('wheel', handleWheel);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (!isDraggingRef.current) {
        cube.rotation.x += 0.002;
        cube.rotation.y += 0.002;
        torus.rotation.y += 0.001;
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousedown', handleMouseDown);
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseup', handleMouseUp);
      containerRef.current?.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(frameIdRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};
