'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, Html, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Suspense } from 'react';

const NODES = [
  { id: 'pingora',  label: 'Pingora Proxy', color: '#00d4ff',  pos: [0, 0, 0] as [number, number, number],         desc: 'L7 Reverse Proxy' },
  { id: 'waf',      label: 'WAF Core',      color: '#7c3aed',  pos: [-3, -1.5, 0] as [number, number, number],     desc: '1500+ Attack Patterns' },
  { id: 'tartarus', label: 'Tartarus',       color: '#ff1744',  pos: [-1, -2.5, 1] as [number, number, number],    desc: 'Honeypot Engine' },
  { id: 'medusa',   label: 'Medusa',         color: '#ff6d00',  pos: [1, -2.5, 1] as [number, number, number],     desc: 'Rate Limiting' },
  { id: 'aegis',    label: 'Aegis Prime',    color: '#00e676',  pos: [3, -1.5, 0] as [number, number, number],     desc: 'Kernel eBPF/XDP' },
  { id: 'ghost',    label: 'Ghost Engine',   color: '#d4af37',  pos: [0, -3.5, -1] as [number, number, number],   desc: 'Wasm Plugins' },
  { id: 'ouroboros',label: 'Ouroboros',      color: '#a855f7',  pos: [0, -5, 0] as [number, number, number],      desc: 'Self-Evolution AI' },
];

const EDGES: [string, string][] = [
  ['pingora', 'waf'],
  ['pingora', 'medusa'],
  ['pingora', 'aegis'],
  ['waf', 'tartarus'],
  ['waf', 'ghost'],
  ['tartarus', 'ouroboros'],
  ['ghost', 'ouroboros'],
  ['medusa', 'ouroboros'],
];

function Node({ node, index }: { node: typeof NODES[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = node.pos[1] + Math.sin(state.clock.elapsedTime + index) * 0.08;
  });

  return (
    <group position={node.pos}>
      <Sphere ref={meshRef} args={[0.25, 32, 32]}>
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={1.2}
          metalness={0.8}
          roughness={0.1}
        />
      </Sphere>
      <pointLight color={node.color} intensity={3} distance={2.5} />

      {/* Label */}
      <Html
        position={[0, 0.45, 0]}
        center
        distanceFactor={8}
        style={{ pointerEvents: 'none', textAlign: 'center' }}
      >
        <div style={{
          background: 'rgba(3,3,5,0.85)',
          border: `1px solid ${node.color}33`,
          borderRadius: '6px',
          padding: '3px 8px',
          whiteSpace: 'nowrap',
        }}>
          <div style={{ color: node.color, fontSize: '9px', fontWeight: 700, fontFamily: 'JetBrains Mono', letterSpacing: '0.05em' }}>
            {node.label}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '7px', fontFamily: 'Inter' }}>
            {node.desc}
          </div>
        </div>
      </Html>
    </group>
  );
}

function Edges() {
  return (
    <>
      {EDGES.map(([from, to]) => {
        const a = NODES.find(n => n.id === from)!;
        const b = NODES.find(n => n.id === to)!;
        return (
          <Line
            key={`${from}-${to}`}
            points={[a.pos, b.pos]}
            color={a.color}
            lineWidth={0.8}
            dashed={true}
            dashScale={3}
            transparent
            opacity={0.4}
          />
        );
      })}
    </>
  );
}

function RotatingGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <group ref={groupRef}>
      {NODES.map((node, i) => (
        <Node key={node.id} node={node} index={i} />
      ))}
      <Edges />
    </group>
  );
}

export default function NodeGraph() {
  return (
    <div style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, -2, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <Stars radius={60} depth={40} count={1500} factor={3} saturation={0} fade speed={0.5} />
          <RotatingGroup />
          <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.3} luminanceSmoothing={0.9} height={250} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
