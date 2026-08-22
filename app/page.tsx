'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  Zap, Shield, ArrowRight, Star, Globe2, Brain, Lock, Cpu, Eye,
  Fingerprint, RefreshCw, ShieldCheck, Network, Database, Bug, GitBranch,
  Github, ExternalLink,
} from 'lucide-react';
import StatsCounter from '@/components/ui/StatsCounter';

const ShieldScene = dynamic(() => import('@/components/3d/ShieldScene'), { ssr: false });
const NodeGraph   = dynamic(() => import('@/components/3d/NodeGraph'),   { ssr: false });

/* ─── Scroll animation helpers ────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Data ─────────────────────────────────────────────────────────────── */
const problemCards = [
  { icon: Zap,     color: '#ff6d00', title: 'Severe Server Latency',           desc: 'Traditional WAFs inspect requests using heavy regex engines, adding 15ms to 50ms of network latency that destroys application performance.' },
  { icon: Bug,     color: '#ff1744', title: 'Unable to Stop AI Attacks',       desc: 'Legacy WAFs rely on static rules that fail against mutating AI-generated attack payloads, prompt injections, and rogue AI botnets.' },
  { icon: Database,color: '#d4af37', title: 'Exploding Cloud Costs',           desc: 'AWS WAF & Cloudflare Enterprise charge heavy fees per million requests and per rule evaluation ($3,000+/mo), exploding under load.' },
  { icon: Lock,    color: '#7c3aed', title: 'Vendor Lock-in & Data Leakage',   desc: 'Cloud WAFs decrypt all your user payload data on third-party cloud servers, violating strict data sovereignty and privacy rules.' },
];

const coreModules = [
  { icon: Zap,          color: '#ff6d00', title: 'Layer 7 WAF Engine',          desc: 'SIMD Aho-Corasick multi-pattern algorithm for sub-microsecond SQLi, XSS, and RCE payload detection.' },
  { icon: Shield,       color: '#00e676', title: 'eBPF / XDP Kernel Shield',   desc: 'Hardware-level packet dropping inside the Linux network driver at 0% user-space CPU cost.' },
  { icon: Brain,        color: '#ff1744', title: 'Semantic AI & LSH Cache',     desc: 'Locality-Sensitive Hashing (LSH) for 15µs vector threat matching, bypassing heavy LLM calls.' },
  { icon: Lock,         color: '#d4af37', title: 'Post-Quantum Cryptography',   desc: 'FIPS 203 (ML-KEM-768 / Kyber768) quantum-resistant traffic encryption and key exchange.' },
  { icon: Eye,          color: '#7c3aed', title: 'Bulletproofs ZK-DPI',         desc: 'Zero-Knowledge Deep Packet Inspection verifying traffic safety without decrypting private user payload.' },
  { icon: Network,      color: '#00d4ff', title: 'HTTP Smuggling Detector',     desc: 'Dual-parser HTTP header inspection preventing request smuggling and desync attacks.' },
];

const benchmarkComparison = [
  { metric: 'P50 Latency',       spryzen: '0.207 µs',     aws: '~5 ms',       cloudflare: '~2 ms',     modsecurity: '~15 ms' },
  { metric: 'Single-Core RPS',   spryzen: '4,837,480',    aws: '~50,000',     cloudflare: '~100,000',  modsecurity: '~5,000' },
  { metric: 'Zero-Day Defense',  spryzen: 'Ouroboros AI',  aws: 'Signature',   cloudflare: 'ML Rules',  modsecurity: 'Signature' },
  { metric: 'Data Sovereignty',  spryzen: '100% Local',   aws: 'AWS Cloud',   cloudflare: 'CF Cloud',  modsecurity: 'Local' },
  { metric: 'Quantum Resistance', spryzen: 'FIPS 203',     aws: 'None',        cloudflare: 'None',      modsecurity: 'None' },
  { metric: 'Error Rate',        spryzen: '0.000%',       aws: 'Varies',      cloudflare: 'Varies',    modsecurity: 'High FP' },
];

const terminalLines = [
  { color: '#94a3b8', text: '$ ouroboros run --cycle red-team' },
  { color: '#00d4ff', text: '[OUROBOROS] Starting shadow red-team cycle...' },
  { color: '#ff6d00', text: '[MUTATOR]  Generating 847 SQLi/XSS payload variants...' },
  { color: '#ff1744', text: '[GAP]      Found bypass: /**/ comment injection in UNION SELECT' },
  { color: '#a855f7', text: '[FORGE]    Generating AST-based virtual patch...' },
  { color: '#00e676', text: '[DEPLOY]   Patch hot-loaded. 0 false positives confirmed.' },
  { color: '#00d4ff', text: '[OUROBOROS] Evolution cycle complete. System adapted. +10 EVO' },
];

const team = [
  { name: 'Sanjit Pawar',   role: 'Architecture & Presentation Lead' },
  { name: 'Aditya Dahale',  role: 'Core Engine & eBPF Engineer' },
  { name: 'Jainil Nakrani', role: 'AI & Cryptography Engineer' },
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: 'calc(100vh - 72px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          padding: '4rem var(--section-px)', textAlign: 'center',
        }}
      >
        <div className="glow-orb glow-orb-cyan" style={{ width: 700, height: 700, top: -200, right: -200, zIndex: 0 }} />
        <div className="glow-orb glow-orb-violet" style={{ width: 500, height: 500, bottom: -150, left: -150, zIndex: 0 }} />

        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.7 }}>
          <ShieldScene />
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to bottom, transparent, var(--bg-void))', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge badge-cyan" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <Star size={10} /> Team Spryzen · IronWall+
            </span>
          </motion.div>

          <motion.h1
            className="text-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Autonomous Future of{' '}
            <span className="text-gradient-cyan">Web & AI Defense.</span>
          </motion.h1>

          <motion.p
            className="text-lead"
            style={{ maxWidth: '640px', margin: '1.5rem auto 2.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sub-microsecond eBPF inspection. Self-healing Ouroboros AI.
            Hardware-bound Spryzen ID. Post-quantum encryption.
            Zero cloud proxy tax. 100% data sovereignty.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#benchmarks" className="btn btn-primary btn-lg">
              <Zap size={18} /> View Benchmarks
            </a>
            <a
              href="https://github.com/Aditya-9-6/spryzen-test-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <Github size={18} /> Explore on GitHub
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {['0.207µs P50 Latency', '4.83M RPS / Core', '100% Mitigation'].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--neon-emerald)', boxShadow: '0 0 8px var(--neon-emerald)', display: 'inline-block' }} />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────────────── */}
      <section className="section">
        <StatsCounter />
      </section>

      {/* ─── PROBLEM STATEMENT ─────────────────────────────────────────── */}
      <section className="section" id="problem">
        <div className="section-header">
          <span className="section-eyebrow">The Problem</span>
          <h2 className="text-h1">Legacy Firewalls Are Too Slow &<br />Unable to Stop AI Attacks</h2>
          <p className="text-lead" style={{ maxWidth: 600, margin: '1rem auto 0' }}>
            Why traditional proxy firewalls fail cloud-native & agentic applications.
          </p>
        </div>

        <motion.div
          className="grid-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {problemCards.map((card) => (
            <motion.div key={card.title} className="glass-card" style={{ padding: '2rem' }} variants={fadeUp}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: `${card.color}15`, border: `1px solid ${card.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <card.icon size={22} style={{ color: card.color }} />
                </div>
                <h3 className="text-h3">{card.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── ARCHITECTURE ──────────────────────────────────────────────── */}
      <section className="section" id="architecture">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-eyebrow">3-Layer Security Pipeline</span>
            <h2 className="text-h1">Origin-Native eBPF & Monoio Engine</h2>
            <p className="text-lead" style={{ margin: '1rem 0 2rem' }}>
              Running inside your host Linux Kernel — not a cloud proxy.
            </p>

            {[
              { color: '#00e676', badge: '1.4 µs',  label: 'Layer 0 — eBPF XDP',    desc: 'Kernel-space DDoS drop via aya Rust' },
              { color: '#d4af37', badge: '12 µs',   label: 'Layer 7 — Monoio WAF',   desc: 'Thread-per-core with SO_REUSEPORT, zero lock contention' },
              { color: '#a855f7', badge: 'Async',    label: 'AI Engine — Ouroboros',   desc: 'SIMD fast-path for 99% clean traffic, ONNX for suspicious' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-4 mb-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, boxShadow: `0 0 10px ${item.color}`, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: '0.95rem' }}>{item.label}</span>
                    <span className="badge" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40`, fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                      {item.badge}
                    </span>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ height: '500px', position: 'relative' }}>
            <NodeGraph />
          </div>
        </div>
      </section>

      {/* ─── OUROBOROS SPOTLIGHT ────────────────────────────────────────── */}
      <section className="section" id="ouroboros" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-violet" style={{ width: 600, height: 600, top: -200, right: -100, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: '#a855f7' }}>Featured Innovation</span>
            <h2 className="text-h1">
              <RefreshCw size={36} style={{ display: 'inline', color: '#a855f7', marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Ouroboros Self-Healing Engine
            </h2>
            <p className="text-lead" style={{ maxWidth: 620, margin: '1rem auto 0' }}>
              Autonomous red-team mutator that continuously generates attack variants,
              discovers detection gaps, and forges virtual patches — with zero server downtime.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Terminal animation */}
            <div className="terminal" style={{ maxWidth: 600 }}>
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f56' }} />
                <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <div className="terminal-dot" style={{ background: '#27c93f' }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginLeft: '0.5rem', fontFamily: 'JetBrains Mono' }}>
                  ouroboros@spryzen — red-team-cycle
                </span>
              </div>
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  style={{ color: line.color, marginBottom: '0.3rem' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.25 }}
                >
                  {line.text}
                </motion.div>
              ))}
              <motion.span
                style={{ color: '#00e676', display: 'inline-block' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
              >
                █
              </motion.span>
            </div>

            {/* Key points */}
            <div>
              {[
                { icon: Bug,        color: '#ff6d00', title: 'Shadow Red-Teaming',      desc: 'Continuously mutates SQLi/XSS payloads in isolation to discover zero-day detection gaps.' },
                { icon: GitBranch,  color: '#a855f7', title: 'Auto Virtual Patching',    desc: 'LLM-generated AST patches are validated against clean traffic for 0% false positive regression.' },
                { icon: ShieldCheck,color: '#00e676', title: 'Zero-Downtime Hot-Reload', desc: 'Patches deploy instantly without restarting the engine or dropping any in-flight connections.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card"
                  style={{ padding: '1.5rem', marginBottom: '1rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <item.icon size={18} style={{ color: item.color }} />
                    <span style={{ fontWeight: 700, color: item.color, fontSize: '0.95rem' }}>{item.title}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPRYZEN ID SPOTLIGHT ──────────────────────────────────────── */}
      <section className="section" id="spryzen-id" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-gold" style={{ width: 500, height: 500, bottom: -200, left: -100, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: 'var(--neon-gold)' }}>Zero-Trust Identity</span>
            <h2 className="text-h1">
              <Fingerprint size={36} style={{ display: 'inline', color: 'var(--neon-gold)', marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Spryzen ID Hardware Passports
            </h2>
            <p className="text-lead" style={{ maxWidth: 620, margin: '1rem auto 0' }}>
              Cryptographically bind agent credentials to physical hardware —
              stolen tokens become useless on any other machine.
            </p>
          </div>

          <motion.div
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {[
              { icon: Fingerprint, color: '#d4af37', title: 'Hardware-Bound Identity',
                desc: 'X-Spryzen-Passport header carries encrypted claims binding tenant_id, agent_id, and machine hardware_fingerprint with Ed25519 signatures.' },
              { icon: Shield,      color: '#00e676', title: 'Anti-Bot & Anti-Spoofing',
                desc: 'Even if an attacker steals an API key or session token, they cannot use it from an unauthorized machine or rogue AI bot.' },
              { icon: Zap,         color: '#ff1744', title: 'Instant eBPF Blackholing',
                desc: 'Hardware mismatch detected? The attacker\'s IP is instantly blackholed inside the Linux kernel at the eBPF driver level — zero CPU overhead.' },
            ].map((item) => (
              <motion.div key={item.title} className="glass-card" style={{ padding: '2rem' }} variants={fadeUp}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: `${item.color}15`, border: `1px solid ${item.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="text-h3" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6 CORE MODULES ────────────────────────────────────────────── */}
      <section className="section" id="features">
        <div className="section-header">
          <span className="section-eyebrow">Core Technology</span>
          <h2 className="text-h1">6 Core Technical Modules</h2>
          <p className="text-lead" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
            Modular security engineering for high-performance defense.
          </p>
        </div>

        <motion.div
          className="grid-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {coreModules.map((mod) => (
            <motion.div key={mod.title} className="glass-card" style={{ padding: '2rem' }} variants={fadeUp}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: `${mod.color}15`, border: `1px solid ${mod.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <mod.icon size={22} style={{ color: mod.color }} />
              </div>
              <h3 className="text-h3" style={{ marginBottom: '0.75rem' }}>{mod.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── BENCHMARKS ────────────────────────────────────────────────── */}
      <section className="section" id="benchmarks">
        <div className="section-header">
          <span className="section-eyebrow">Performance</span>
          <h2 className="text-h1">Benchmark Comparisons</h2>
          <p className="text-lead" style={{ maxWidth: 600, margin: '1rem auto 0' }}>
            Verified single-core benchmarks against industry-leading WAF solutions.
          </p>
        </div>

        <div className="table-wrapper" style={{ maxWidth: 900, margin: '0 auto 3rem' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th style={{ color: 'var(--neon-cyan)' }}>Spryzen+</th>
                <th>AWS WAF</th>
                <th>Cloudflare</th>
                <th>ModSecurity</th>
              </tr>
            </thead>
            <tbody>
              {benchmarkComparison.map((row) => (
                <tr key={row.metric}>
                  <td style={{ fontWeight: 600 }}>{row.metric}</td>
                  <td style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>{row.spryzen}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{row.aws}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{row.cloudflare}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{row.modsecurity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Aditya-9-6/Spryzen-Benchmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={16} /> Reproduce Benchmarks
          </a>
          <a
            href="https://github.com/Aditya-9-6/spryzen-test-1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Full Source <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ─── BUSINESS ROI ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: '3rem var(--section-px)',
          borderTop: '1px solid var(--glass-border)',
          borderBottom: '1px solid var(--glass-border)',
          background: 'var(--bg-surface)',
        }}
      >
        <motion.div
          className="flex items-center justify-between flex-wrap gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="text-label" style={{ color: 'var(--neon-gold)', marginBottom: '0.25rem' }}>Business & Strategic Value</div>
            <div className="flex items-center gap-4 flex-wrap" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              <span>80%+ Cost Reduction</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>Zero Cloud Detours</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>100% Data Sovereignty</span>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { value: '500,000', label: 'Requests Verified' },
              { value: '0.000%', label: 'Error Rate' },
              { value: '100%', label: 'Mitigation Rate' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '1.5rem', color: 'var(--neon-cyan)' }}>{stat.value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── TEAM ──────────────────────────────────────────────────────── */}
      <section className="section" id="team">
        <div className="section-header">
          <span className="section-eyebrow">The Builders</span>
          <h2 className="text-h1">Team Spryzen</h2>
        </div>

        <motion.div
          className="grid-3"
          style={{ maxWidth: 800, margin: '0 auto' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="glass-card"
              style={{ padding: '2rem', textAlign: 'center' }}
              variants={fadeUp}
            >
              <div
                style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem', fontSize: '1.5rem', fontWeight: 900,
                  fontFamily: 'Outfit', color: '#000',
                }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-cyan" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow">Open Source</span>
          <h2 className="text-h1" style={{ marginBottom: '1rem' }}>
            Explore the{' '}
            <span className="text-gradient-cyan">Full Architecture.</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: 500, margin: '0 auto 2.5rem' }}>
            Spryzen+ is built with Rust, eBPF, and AI.
            Dive into the source code and reproduce our benchmarks.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/Aditya-9-6/spryzen-test-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Github size={20} /> View Source Code
            </a>
            <a
              href="https://github.com/Aditya-9-6/Spryzen-Benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Benchmark Suite <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
