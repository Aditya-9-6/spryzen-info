'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  Zap, Shield, ArrowRight, Star, Brain, Lock, Eye,
  Fingerprint, RefreshCw, ShieldCheck, Network, Database, Bug, GitBranch,
  Github, ExternalLink, Activity
} from 'lucide-react';
import StatsCounter from '@/components/ui/StatsCounter';

// Lazy-load 3D components for client-side rendering
const ShieldScene = dynamic(() => import('@/components/3d/ShieldScene'), { ssr: false });
const NodeGraph   = dynamic(() => import('@/components/3d/NodeGraph'),   { ssr: false });

/* ─── Scroll animation helpers ────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Problem Statement Cards ─────────────────────────────────────────── */
const problemCards = [
  {
    icon: Zap,
    color: '#ff6d00',
    title: 'Severe Server Latency',
    desc: 'Traditional WAFs inspect requests using heavy regex engines, adding 15ms to 50ms of network latency that destroys application throughput and responsiveness.'
  },
  {
    icon: Bug,
    color: '#ff1744',
    title: 'Unable to Stop AI Attacks',
    desc: 'Legacy WAFs rely on static signature rules that fail against mutating AI-generated payloads, prompt injections, and autonomous rogue botnets.'
  },
  {
    icon: Database,
    color: '#d4af37',
    title: 'Exploding Cloud Costs',
    desc: 'AWS WAF & Cloudflare Enterprise charge heavy per-request and per-rule fees ($3,000+/mo), scaling exponentially under high traffic and DDoS floods.'
  },
  {
    icon: Lock,
    color: '#7c3aed',
    title: 'Vendor Lock-in & Data Leakage',
    desc: 'Cloud WAFs decrypt all private user payloads on third-party proxy servers, introducing critical data sovereignty and privacy compliance violations.'
  },
];

/* ─── 6 Core Modules ─────────────────────────────────────────────────── */
const coreModules = [
  {
    icon: Zap,
    color: '#ff6d00',
    badge: 'Hardware SIMD',
    title: '1. Layer 7 WAF Engine',
    desc: 'SIMD Aho-Corasick multi-pattern algorithm for sub-microsecond SQLi, XSS, and RCE payload detection directly in CPU vector registers.'
  },
  {
    icon: Shield,
    color: '#00e676',
    badge: 'Kernel Driver',
    title: '2. eBPF / XDP Kernel Shield',
    desc: 'Hardware-level packet dropping inside the Linux network driver at 0% user-space CPU cost, dropping 1M+ PPS DDoS floods instantly.'
  },
  {
    icon: Brain,
    color: '#ff1744',
    badge: '15 µs Matching',
    title: '3. Semantic AI & LSH Cache',
    desc: 'Locality-Sensitive Hashing (LSH) for 15µs vector threat matching, bypassing heavy LLM calls while catching novel adversarial variations.'
  },
  {
    icon: Lock,
    color: '#d4af37',
    badge: 'FIPS 203',
    title: '4. Post-Quantum Cryptography',
    desc: 'FIPS 203 (ML-KEM-768 / Kyber768) quantum-resistant traffic encryption and key exchange to protect against "Harvest Now, Decrypt Later" attacks.'
  },
  {
    icon: Eye,
    color: '#7c3aed',
    badge: 'Zero-Knowledge',
    title: '5. Bulletproofs ZK-DPI',
    desc: 'Zero-Knowledge Deep Packet Inspection verifying traffic safety without decrypting private user payload, guaranteeing 100% data sovereignty.'
  },
  {
    icon: Network,
    color: '#00d4ff',
    badge: 'Protocol Defense',
    title: '6. HTTP Smuggling Detector',
    desc: 'Dual-parser HTTP header inspection preventing request smuggling and desync attacks across reverse proxies and upstream microservices.'
  },
];

/* ─── Benchmark Comparison Matrix ────────────────────────────────────── */
const benchmarkComparison = [
  { metric: 'P50 Latency (Clean Path)',  spryzen: '0.207 µs (207 ns)',  aws: '~5.2 ms',     cloudflare: '~2.1 ms',     modsec: '~14.8 ms' },
  { metric: 'Single-Core Throughput',     spryzen: '4,837,480 RPS',      aws: '~50,000 RPS', cloudflare: '~100,000 RPS',modsec: '~5,200 RPS' },
  { metric: 'Zero-Day Mitigation',       spryzen: 'Ouroboros AI',       aws: 'Signatures',  cloudflare: 'Rule Sets',   modsec: 'Static Regex' },
  { metric: 'Data Sovereignty',          spryzen: '100% Origin-Native', aws: 'AWS Cloud',   cloudflare: 'CF Edge',     modsec: 'Self-Hosted' },
  { metric: 'Post-Quantum Defense',      spryzen: 'ML-KEM-768 (PQC)',   aws: 'None',        cloudflare: 'Experimental',modsec: 'None' },
  { metric: 'Kernel-Level Offload',      spryzen: 'eBPF / XDP (1.4 µs)',aws: 'None',        cloudflare: 'Proprietary', modsec: 'None' },
  { metric: 'Measured False Positives',  spryzen: '0.000% (500k Req)',  aws: 'Varies',      cloudflare: 'Varies',      modsec: 'High' },
];

/* ─── Terminal Live Simulation Lines ─────────────────────────────────── */
const terminalLines = [
  { color: '#94a3b8', text: '$ ouroboros run --cycle shadow-red-team' },
  { color: '#00d4ff', text: '[OUROBOROS] Initializing autonomous red-team mutator...' },
  { color: '#ff6d00', text: '[MUTATOR]   Synthesizing 847 mutated SQLi/XSS attack vectors...' },
  { color: '#ff1744', text: '[DISCOVERY] Zero-Day gap detected: /**/ comment-stripping bypass' },
  { color: '#a855f7', text: '[AI FORGE]  Generating AST virtual patch & compiling to Wasm...' },
  { color: '#00e676', text: '[DEPLOY]    Virtual patch hot-loaded across cores (0 downtime, 0% FP).' },
  { color: '#00d4ff', text: '[IMMUNIZE]  Threat vector neutralized globally. System Defensive IQ +10 EVO.' },
];

/* ─── Team Members ───────────────────────────────────────────────────── */
const teamMembers = [
  {
    name: 'Sanjit Pawar',
    role: 'Architecture & Presentation Lead',
    desc: 'System architecture, kernel-space pipeline design, and product defense strategy.'
  },
  {
    name: 'Aditya Dahale',
    role: 'Core Engine & eBPF Engineer',
    desc: 'Linux eBPF/XDP driver hooks, SIMD multi-pattern algorithms, and low-level performance optimization.'
  },
  {
    name: 'Jainil Nakrani',
    role: 'AI & Cryptography Engineer',
    desc: 'Ouroboros self-healing ML models, Post-Quantum FIPS 203 implementation, and Bulletproofs ZK-DPI.'
  },
];

/* ═══════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: 'calc(100vh - 72px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          padding: '4rem var(--section-px)', textAlign: 'center',
        }}
      >
        <div className="glow-orb glow-orb-cyan" style={{ width: 750, height: 750, top: -200, right: -200, zIndex: 0 }} />
        <div className="glow-orb glow-orb-violet" style={{ width: 550, height: 550, bottom: -150, left: -150, zIndex: 0 }} />

        {/* 3D Shield Background Canvas */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.75 }}>
          <ShieldScene />
        </div>

        {/* Bottom Fade Gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to bottom, transparent, var(--bg-void))', zIndex: 1 }} />

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge badge-cyan" style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '0.4rem 1rem' }}>
              <Star size={12} /> Team Spryzen · IronWall+ Autonomous Engine
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
            style={{ maxWidth: '680px', margin: '1.5rem auto 2.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sub-microsecond eBPF inspection. Self-healing Ouroboros AI.
            Hardware-bound Spryzen ID passports. Zero cloud proxy tax with 100% data sovereignty.
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
              <Github size={18} /> Explore Source Code
            </a>
          </motion.div>

          {/* Quick Metrics Trust Bar */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {['0.207 µs P50 Latency', '4,837,480 RPS / Core', '100% Zero-Day Mitigation', '0.000% Error Rate'].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--neon-emerald)', boxShadow: '0 0 8px var(--neon-emerald)', display: 'inline-block' }} />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── LIVE BENCHMARK STATS COUNTER ──────────────────────────────── */}
      <section className="section">
        <StatsCounter />
      </section>

      {/* ─── PROBLEM STATEMENT SECTION ─────────────────────────────────── */}
      <section className="section" id="problem">
        <div className="section-header">
          <span className="section-eyebrow">The Cybersecurity Dilemma</span>
          <h2 className="text-h1">Legacy Firewalls Are Too Slow &<br />Unable to Stop AI Attacks</h2>
          <p className="text-lead" style={{ maxWidth: 640, margin: '1rem auto 0' }}>
            Why traditional proxy firewalls fail cloud-native, agentic, and high-throughput applications.
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
            <motion.div key={card.title} className="glass-card" style={{ padding: '2.25rem' }} variants={fadeUp}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: `${card.color}15`, border: `1px solid ${card.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <card.icon size={24} style={{ color: card.color }} />
                </div>
                <h3 className="text-h3">{card.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── 3-LAYER ARCHITECTURE PIPELINE ─────────────────────────────── */}
      <section className="section" id="architecture">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-eyebrow">Origin-Native Engineering</span>
            <h2 className="text-h1">3-Layer Security Pipeline</h2>
            <p className="text-lead" style={{ margin: '1rem 0 2rem' }}>
              Executing directly inside your host Linux Kernel and bare-metal runtime — completely eliminating the cloud proxy detour.
            </p>

            {[
              {
                color: '#00e676',
                badge: '1.4 µs Execution',
                label: 'Layer 0 (Kernel Space): Linux eBPF XDP Driver Hook',
                desc: 'Drops volumetric DDoS floods & blocked IPs in 1.4 µs inside the network card driver before allocating user-space socket buffers.'
              },
              {
                color: '#d4af37',
                badge: '12 µs Execution',
                label: 'Layer 7 (User Space): Monoio Thread-Per-Core Engine',
                desc: 'Thread-per-core event loop pinned with SO_REUSEPORT & core affinity. Inspects clean path traffic in 12 µs with 0 lock contention.'
              },
              {
                color: '#a855f7',
                badge: 'Zero Latency Path',
                label: 'AI Engine: Ouroboros Self-Healing & ONNX AI Shield',
                desc: '99% clean traffic hits the SIMD fast-path, while suspicious traffic routes asynchronously to ONNX LLM classifiers and self-healing loops.'
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: item.color, boxShadow: `0 0 12px ${item.color}`, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: '0.95rem' }}>{item.label}</span>
                    <span className="badge" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40`, fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive 3D Node Graph */}
          <div style={{ height: '520px', position: 'relative' }}>
            <NodeGraph />
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT: OUROBOROS ──────────────────────────────── */}
      <section className="section" id="ouroboros" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-violet" style={{ width: 650, height: 650, top: -200, right: -100, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: '#a855f7' }}>Autonomous Defense</span>
            <h2 className="text-h1">
              <RefreshCw size={36} style={{ display: 'inline', color: '#a855f7', marginRight: '0.6rem', verticalAlign: 'middle' }} />
              Ouroboros Self-Healing Engine
            </h2>
            <p className="text-lead" style={{ maxWidth: 660, margin: '1rem auto 0' }}>
              Autonomous Red-Team Mutator that continuously attacks its own system, discovers zero-day detection gaps, and forges virtual patches with zero server downtime.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Live Terminal Simulation */}
            <div className="terminal" style={{ maxWidth: 620 }}>
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f56' }} />
                <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <div className="terminal-dot" style={{ background: '#27c93f' }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginLeft: '0.5rem', fontFamily: 'JetBrains Mono' }}>
                  ouroboros@spryzen-soc — red-team-mutator
                </span>
              </div>
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  style={{ color: line.color, marginBottom: '0.35rem' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {line.text}
                </motion.div>
              ))}
              <motion.span
                style={{ color: '#00e676', display: 'inline-block' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 }}
              >
                █
              </motion.span>
            </div>

            {/* Feature Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  icon: Bug,
                  color: '#ff6d00',
                  title: 'Shadow Red-Teaming',
                  desc: 'Mutates thousands of SQLi, XSS, and RCE payload permutations in an isolated sandbox to test detection boundaries.'
                },
                {
                  icon: GitBranch,
                  color: '#a855f7',
                  title: 'Automated Virtual Patching',
                  desc: 'When a gap is found, local LLM/AST logic synthesizes a regex/AST rule and verifies it against clean traffic for 0% false positive regression.'
                },
                {
                  icon: ShieldCheck,
                  color: '#00e676',
                  title: 'Zero-Downtime Hot-Reloading',
                  desc: 'Virtual patches are deployed directly to the thread-local Aho-Corasick tables without restarting the daemon or dropping active user sessions.'
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card"
                  style={{ padding: '1.75rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <item.icon size={20} style={{ color: item.color }} />
                    <span style={{ fontWeight: 700, color: item.color, fontSize: '1rem' }}>{item.title}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT: SPRYZEN ID ─────────────────────────────── */}
      <section className="section" id="spryzen-id" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-gold" style={{ width: 550, height: 550, bottom: -200, left: -100, zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: 'var(--neon-gold)' }}>Hardware-Bound Zero Trust</span>
            <h2 className="text-h1">
              <Fingerprint size={36} style={{ display: 'inline', color: 'var(--neon-gold)', marginRight: '0.6rem', verticalAlign: 'middle' }} />
              Spryzen ID Hardware Passports
            </h2>
            <p className="text-lead" style={{ maxWidth: 660, margin: '1rem auto 0' }}>
              Cryptographically bind agent credentials to physical hardware fingerprints — making stolen API keys and tokens completely useless to adversaries.
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
              {
                icon: Fingerprint,
                color: '#d4af37',
                title: 'Cryptographic Binding',
                desc: 'X-Spryzen-Passport carries encrypted claims binding tenant_id, agent_id, and machine hardware_fingerprint with Ed25519 signatures.'
              },
              {
                icon: Shield,
                color: '#00e676',
                title: 'Anti-Bot & Anti-Spoofing',
                desc: 'If an adversary extracts a token from logs or memory, they cannot replay it from another machine, server instance, or rogue AI scraper.'
              },
              {
                icon: Zap,
                color: '#ff1744',
                title: 'Instant eBPF Blackholing',
                desc: 'Upon detecting a hardware fingerprint mismatch, Spryzen ID immediately blackholes the attacker’s client IP inside the Linux kernel eBPF driver level.'
              },
            ].map((item) => (
              <motion.div key={item.title} className="glass-card" style={{ padding: '2.25rem' }} variants={fadeUp}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: `${item.color}15`, border: `1px solid ${item.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-h3" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6 CORE TECHNICAL MODULES ──────────────────────────────────── */}
      <section className="section" id="features">
        <div className="section-header">
          <span className="section-eyebrow">Modular Architecture</span>
          <h2 className="text-h1">6 Core Technical Modules</h2>
          <p className="text-lead" style={{ maxWidth: 580, margin: '1rem auto 0' }}>
            Engineered from bare metal for uncompromising security and zero performance penalties.
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: `${mod.color}15`, border: `1px solid ${mod.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <mod.icon size={22} style={{ color: mod.color }} />
                </div>
                <span className="badge" style={{ background: `${mod.color}15`, color: mod.color, border: `1px solid ${mod.color}33`, fontSize: '0.65rem' }}>
                  {mod.badge}
                </span>
              </div>
              <h3 className="text-h3" style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>{mod.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── BENCHMARK COMPARISON TABLE ────────────────────────────────── */}
      <section className="section" id="benchmarks">
        <div className="section-header">
          <span className="section-eyebrow">Empirical Proof</span>
          <h2 className="text-h1">Industry Benchmark Comparisons</h2>
          <p className="text-lead" style={{ maxWidth: 620, margin: '1rem auto 0' }}>
            Rigorous single-core performance tests verified against industry WAF solutions under heavy load.
          </p>
        </div>

        <div className="table-wrapper" style={{ maxWidth: 960, margin: '0 auto 3rem' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th style={{ color: 'var(--neon-cyan)', fontWeight: 800 }}>Spryzen+</th>
                <th>AWS WAF</th>
                <th>Cloudflare Enterprise</th>
                <th>ModSecurity (OWASP CRS)</th>
              </tr>
            </thead>
            <tbody>
              {benchmarkComparison.map((row) => (
                <tr key={row.metric}>
                  <td style={{ fontWeight: 600 }}>{row.metric}</td>
                  <td style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>{row.spryzen}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{row.aws}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{row.cloudflare}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{row.modsec}</td>
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
            <Github size={16} /> Reproduce Benchmarks (Grafana k6)
          </a>
          <a
            href="https://github.com/Aditya-9-6/spryzen-test-1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Engine Source <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ─── BUSINESS & STRATEGIC ROI STRIP ────────────────────────────── */}
      <section
        style={{
          padding: '3.5rem var(--section-px)',
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
            <div className="text-label" style={{ color: 'var(--neon-gold)', marginBottom: '0.35rem' }}>Strategic Business Value</div>
            <div className="flex items-center gap-3 flex-wrap" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <span>80%+ Cost Reduction</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>Zero Cloud Detours</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>100% Data Sovereignty</span>
            </div>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            {[
              { value: '500,000', label: 'Requests Verified' },
              { value: '0.000%', label: 'Error Rate' },
              { value: '100%', label: 'Mitigation Rate' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '1.75rem', color: 'var(--neon-cyan)', lineHeight: 1.1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.2rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── TEAM SECTION ──────────────────────────────────────────────── */}
      <section className="section" id="team">
        <div className="section-header">
          <span className="section-eyebrow">The Engineering Team</span>
          <h2 className="text-h1">Built by Team Spryzen</h2>
          <p className="text-lead" style={{ maxWidth: 500, margin: '0.75rem auto 0' }}>
            Origin-native cybersecurity research and systems engineering.
          </p>
        </div>

        <motion.div
          className="grid-3"
          style={{ maxWidth: 960, margin: '0 auto' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="glass-card"
              style={{ padding: '2.25rem', textAlign: 'center' }}
              variants={fadeUp}
            >
              <div
                style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-violet))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem', fontSize: '1.4rem', fontWeight: 900,
                  fontFamily: 'Outfit', color: '#000',
                  boxShadow: '0 0 24px rgba(0,212,255,0.3)'
                }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>{member.role}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{member.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── FINAL CALL TO ACTION ──────────────────────────────────────── */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb glow-orb-cyan" style={{ width: 650, height: 650, top: -200, left: '50%', transform: 'translateX(-50%)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow">Open-Source Defense</span>
          <h2 className="text-h1" style={{ marginBottom: '1rem' }}>
            Ready to Experience{' '}
            <span className="text-gradient-cyan">Bare-Metal Security?</span>
          </h2>
          <p className="text-lead" style={{ maxWidth: 540, margin: '0 auto 2.5rem' }}>
            Explore the full Rust and eBPF codebase, clone our benchmark suite, or deploy Spryzen+ to your cloud infrastructure.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/Aditya-9-6/spryzen-test-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <Github size={20} /> View Full Source Code
            </a>
            <a
              href="https://github.com/Aditya-9-6/Spryzen-Benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Run Benchmark Suite <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
