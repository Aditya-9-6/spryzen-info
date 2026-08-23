import { Shield, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      {/* Main footer content */}
      <div
        style={{ padding: '4rem var(--section-px) 2rem' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem' }}>
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield
                size={28}
                className="text-[var(--neon-cyan)]"
                strokeWidth={1.5}
              />
              <span
                className="font-display font-black text-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--neon-cyan), #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SPRYZEN<span className="text-[var(--neon-cyan)]">+</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '320px' }}>
              The autonomous future of web &amp; AI defense. Sub-microsecond execution, zero cloud proxy tax, and 100% data sovereignty.
            </p>

            {/* Compliance & Standards Badges */}
            <div className="flex flex-wrap gap-2">
              {['eBPF / XDP', 'Monoio', 'FIPS 203 PQC', 'ZK-DPI', 'Ouroboros AI'].map((badge) => (
                <span
                  key={badge}
                  className="badge badge-muted"
                  style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              className="text-label mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a href="#problem" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  Problem Statement
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  3-Layer Architecture
                </a>
              </li>
              <li>
                <a href="#ouroboros" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  Ouroboros Self-Healing
                </a>
              </li>
              <li>
                <a href="#spryzen-id" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  Spryzen ID Passports
                </a>
              </li>
              <li>
                <a href="#benchmarks" className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                  Benchmark Matrices
                </a>
              </li>
            </ul>
          </div>

          {/* Repositories */}
          <div>
            <h4
              className="text-label mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Repositories
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a
                  href="https://github.com/Aditya-9-6/spryzen-test-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1.5 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Github size={14} /> Spryzen+ Engine <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aditya-9-6/Spryzen-Benchmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1.5 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Github size={14} /> Grafana k6 Suite <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aditya-9-6/spryzen-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1.5 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Github size={14} /> Showcase Website <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Team Spryzen */}
          <div>
            <h4
              className="text-label mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Team Spryzen
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Sanjit Pawar</strong> — Architecture &amp; Lead
              </li>
              <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Aditya Dahale</strong> — Core &amp; eBPF Engine
              </li>
              <li className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Jainil Nakrani</strong> — AI &amp; Cryptography
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid var(--glass-border)',
          padding: '1.25rem var(--section-px)',
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()} Team Spryzen. Built with Rust, Linux eBPF/XDP, Monoio, and Next.js.
          </p>
          <div className="flex items-center gap-4">
            <span
              className="flex items-center gap-2"
              style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: 'var(--neon-emerald)', boxShadow: '0 0 8px var(--neon-emerald)' }}
              />
              Sub-Microsecond Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
