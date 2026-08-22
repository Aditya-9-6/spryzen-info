'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Ring, Stars, Trail, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Suspense } from 'react';

function ShieldMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    if (ringRef.current)  ringRef.current.rotation.z  = state.clock.elapsedTime * 0.8;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -state.clock.elapsedTime * 0.5;
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#004466"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.05}
          distort={0.25}
          speed={2}
          transparent
          opacity={0.85}
          wireframe={false}
        />
      </Sphere>
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.08}
        />
      </Sphere>
      <Ring ref={ringRef} args={[1.8, 1.85, 128]} rotation={[Math.PI / 4, 0, 0]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={ring2Ref} args={[2.1, 2.14, 128]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.25} side={THREE.DoubleSide} />
      </Ring>
      <pointLight color="#00d4ff" intensity={8} distance={6} />
    </group>
  );
}

function AttackParticle({ position }: { position: THREE.Vector3 }) {
  const particleRef = useRef<THREE.Mesh>(null);
  const velocityRef = useRef<THREE.Vector3>(
    new THREE.Vector3().copy(position).negate().normalize().multiplyScalar(0.04)
  );
  const alive = useRef(true);
  const color = useRef(Math.random() > 0.5 ? '#ff1744' : '#ff6d00');

  useFrame(() => {
    if (!particleRef.current || !alive.current) return;
    particleRef.current.position.add(velocityRef.current);
    const dist = particleRef.current.position.length();
    if (dist < 1.5) {
      alive.current = false;
      particleRef.current.visible = false;
    }
  });

  return (
    <Trail width={0.3} length={6} color={color.current} attenuation={(t) => t * t}>
      <mesh ref={particleRef} position={position.toArray()}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={color.current} />
      </mesh>
    </Trail>
  );
}

function AttackParticles() {
  const positions = useRef<THREE.Vector3[]>(
    Array.from({ length: 18 }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      const r     = 4.5 + Math.random() * 1.5;
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      );
    })
  );

  return (
    <group>
      {positions.current.map((pos, i) => (
        <AttackParticle key={i} position={pos} />
      ))}
    </group>
  );
}

function SceneSetup() {
  const { camera } = useThree();
  useEffect(() => { camera.position.set(0, 0, 6); }, [camera]);
  return null;
}

export default function ShieldScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-hidden="true">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }} camera={{ fov: 50, near: 0.1, far: 100 }}>
        <Suspense fallback={null}>
          <SceneSetup />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
          <Environment preset="night" />
          <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <ShieldMesh />
          </Float>
          <AttackParticles />
          <EffectComposer>
            <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
            <ChromaticAberration offset={[0.0005, 0.0005]} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
