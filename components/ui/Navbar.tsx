'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, Github } from 'lucide-react';

const navLinks = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Features',     href: '#features' },
  { label: 'Benchmarks',   href: '#benchmarks' },
  { label: 'Team',         href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const lastScroll                = useRef(0);
  const [visible, setVisible]     = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setVisible(current < lastScroll.current || current < 80);
      lastScroll.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Spryzen+ Home">
          <div className="relative">
            <Shield size={32} className="text-[var(--neon-cyan)]" strokeWidth={1.5} />
            <div className="absolute inset-0 blur-[8px] opacity-60" style={{ background: 'var(--neon-cyan)' }} />
          </div>
          <span
            className="font-display font-black text-xl tracking-tight"
            style={{ background: 'linear-gradient(135deg, var(--neon-cyan), #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            SPRYZEN<span className="text-[var(--neon-cyan)]">+</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Aditya-9-6/spryzen-test-1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm text-sm flex items-center gap-2"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-50 md:hidden"
          >
            <div className="glass m-4 rounded-2xl overflow-hidden" style={{ background: 'rgba(10,10,16,0.95)', backdropFilter: 'blur(40px)' }}>
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-surface)] transition-all"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronRight size={16} />
                  </a>
                ))}
              </div>
              <div className="p-4 pt-0">
                <a
                  href="https://github.com/Aditya-9-6/spryzen-test-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
