'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, Html, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Suspense } from 'react';

const NODES = [
  { id: 'core',       label: 'Spryzen+ Core', color: '#00d4ff', pos: [0, 0, 0] as [number, number, number],       desc: 'Monoio Thread-Per-Core' },
  { id: 'waf',        label: 'WAF Engine',    color: '#7c3aed', pos: [-3, -1.5, 0] as [number, number, number],   desc: 'SIMD Aho-Corasick' },
  { id: 'ebpf',       label: 'eBPF Shield',   color: '#00e676', pos: [3, -1.5, 0] as [number, number, number],    desc: 'XDP 1.4µs Kernel Drop' },
  { id: 'ouroboros',  label: 'Ouroboros',     color: '#a855f7', pos: [-1.5, -3.2, 1] as [number, number, number],desc: 'Self-Healing AI' },
  { id: 'spryzenid',  label: 'Spryzen ID',    color: '#d4af37', pos: [1.5, -3.2, 1] as [number, number, number], desc: 'Hardware Passports' },
  { id: 'zkdpi',      label: 'ZK-DPI',        color: '#ff6d00', pos: [0, -4.5, 0] as [number, number, number],   desc: 'Bulletproofs ZK Proofs' },
  { id: 'lsh',        label: 'LSH Cache',     color: '#ff1744', pos: [-1.2, -1.8, -1.5] as [number, number, number], desc: '15µs Semantic Match' },
  { id: 'pqc',        label: 'PQC Kyber768',  color: '#38bdf8', pos: [1.2, -1.8, -1.5] as [number, number, number],  desc: 'FIPS 203 Quantum Safe' },
];

const EDGES: [string, string][] = [
  ['core', 'waf'],
  ['core', 'ebpf'],
  ['core', 'lsh'],
  ['core', 'pqc'],
  ['waf', 'ouroboros'],
  ['ebpf', 'spryzenid'],
  ['ouroboros', 'zkdpi'],
  ['spryzenid', 'zkdpi'],
  ['lsh', 'ouroboros'],
  ['pqc', 'spryzenid'],
];

function Node({ node, index }: { node: typeof NODES[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = node.pos[1] + Math.sin(state.clock.elapsedTime + index) * 0.08;
  });

  return (
    <group position={node.pos}>
      <Sphere ref={meshRef} args={[0.26, 32, 32]}>
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={1.3}
          metalness={0.85}
          roughness={0.1}
        />
      </Sphere>
      <pointLight color={node.color} intensity={3.5} distance={2.8} />

      <Html
        position={[0, 0.48, 0]}
        center
        distanceFactor={8.5}
        style={{ pointerEvents: 'none', textAlign: 'center' }}
      >
        <div style={{
          background: 'rgba(3,3,5,0.88)',
          border: `1px solid ${node.color}40`,
          borderRadius: '6px',
          padding: '3px 8px',
          whiteSpace: 'nowrap',
          boxShadow: `0 0 10px ${node.color}25`,
        }}>
          <div style={{ color: node.color, fontSize: '9px', fontWeight: 700, fontFamily: 'JetBrains Mono', letterSpacing: '0.05em' }}>
            {node.label}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '7.5px', fontFamily: 'Inter' }}>
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
        const a = NODES.find(n => n.id === from);
        const b = NODES.find(n => n.id === to);
        if (!a || !b) return null;
        return (
          <Line
            key={`${from}-${to}`}
            points={[a.pos, b.pos]}
            color={a.color}
            lineWidth={0.9}
            dashed={true}
            dashScale={3}
            transparent
            opacity={0.45}
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
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.14;
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
          <ambientLight intensity={0.15} />
          <Stars radius={60} depth={40} count={1600} factor={3} saturation={0} fade speed={0.5} />
          <RotatingGroup />
          <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.3} luminanceSmoothing={0.9} height={250} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
