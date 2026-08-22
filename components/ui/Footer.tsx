import { Shield, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ padding: '3rem var(--section-px) 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Shield size={24} className="text-[var(--neon-cyan)]" strokeWidth={1.5} />
              <span
                className="font-display font-black text-lg"
                style={{ background: 'linear-gradient(135deg, var(--neon-cyan), #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                SPRYZEN+
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '320px' }}>
              The autonomous future of web &amp; AI defense. Sub-microsecond protection with 100% data sovereignty.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h4 className="text-label mb-3" style={{ color: 'var(--text-muted)' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><a href="https://github.com/Aditya-9-6/spryzen-test-1" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>Source Code <ExternalLink size={11} /></a></li>
                <li><a href="https://github.com/Aditya-9-6/Spryzen-Benchmarks" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>Benchmarks <ExternalLink size={11} /></a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-label mb-3" style={{ color: 'var(--text-muted)' }}>Team Spryzen</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Sanjit Pawar</span></li>
                <li><span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Aditya Dahale</span></li>
                <li><span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Jainil Nakrani</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--glass-border)', padding: '1rem var(--section-px)' }}>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Team Spryzen. Built with Rust, eBPF &amp; AI.
          </p>
          <a
            href="https://github.com/Aditya-9-6/spryzen-info"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}
          >
            <Github size={14} />
            spryzen-info
          </a>
        </div>
      </div>
    </footer>
  );
}
