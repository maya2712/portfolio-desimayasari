import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')
  const [hovered, setHovered]   = useState(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef  = useRef(null)
  const btnRefs = useRef({})

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const key = hovered ?? active
    const el  = btnRefs.current[key]
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const btnRect = el.getBoundingClientRect()
      setIndicatorStyle({ left: btnRect.left - navRect.left, width: btnRect.width, opacity: 1 })
    } else {
      setIndicatorStyle(s => ({ ...s, opacity: 0 }))
    }
  }, [hovered, active])

  const go = (href) => {
    setOpen(false)
    setActive(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        {/* Top accent line */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg,transparent,#3b82f6 30%,#60a5fa 50%,#3b82f6 70%,transparent)', opacity: scrolled ? 1 : 0, transition: 'opacity 0.4s' }} />

        <div style={{
          background: scrolled ? 'rgba(2,5,9,0.95)' : 'rgba(2,5,9,0.75)',
          backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
          borderBottom: scrolled
            ? '1px solid rgba(96,165,250,0.18)'
            : '1px solid rgba(96,165,250,0.07)',
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(96,165,250,0.08), 0 8px 40px rgba(59,130,246,0.06)'
            : '0 2px 20px rgba(0,0,0,0.35), 0 1px 0 rgba(96,165,250,0.04)',
          transition: 'all 0.4s ease',
        }}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 1.25rem', height: '64px',
            boxSizing: 'border-box',
          }}>

            {/* ── Logo ── */}
            <button onClick={() => go('#hero')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 18px rgba(59,130,246,0.45)', flexShrink: 0,
                }}
              >
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '10px', fontFamily: 'Syne,sans-serif' }}>DMS</span>
              </motion.div>
              <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'Syne,sans-serif', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>Desi Maya Sari</span>
            </button>

            {/* ── Desktop nav ── */}
            <nav ref={navRef} className="nav-desktop" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
              <motion.div
                animate={indicatorStyle}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                style={{
                  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                  height: '32px', borderRadius: '0.5rem',
                  background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(96,165,250,0.12)',
                  pointerEvents: 'none',
                }}
              />
              {links.map(l => (
                <button
                  key={l.href}
                  ref={el => btnRefs.current[l.href] = el}
                  onClick={() => go(l.href)}
                  onMouseEnter={() => setHovered(l.href)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: 'relative', zIndex: 1,
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.4rem 0.85rem', borderRadius: '0.5rem',
                    fontSize: '0.82rem', fontWeight: active === l.href ? 600 : 500,
                    color: active === l.href ? '#e2e8f0' : hovered === l.href ? '#cbd5e1' : '#64748b',
                    transition: 'color 0.2s', fontFamily: 'sans-serif', whiteSpace: 'nowrap',
                  }}
                >{l.label}</button>
              ))}
            </nav>

            {/* ── Hamburger (mobile only) ── */}
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
              className="hamburger"
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.6rem', width: '38px', height: '38px',
                display: 'none', alignItems: 'center', justifyContent: 'center',
                color: '#94a3b8', cursor: 'pointer', flexShrink: 0,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X size={16}/> : <Menu size={16}/>}
                </motion.div>
              </AnimatePresence>
            </motion.button>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: '68px', left: '1rem', right: '1rem', zIndex: 49,
              background: 'rgba(4,10,20,0.97)', backdropFilter: 'blur(28px)',
              border: '1px solid rgba(96,165,250,0.1)', borderRadius: '1.25rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(96,165,250,0.5),transparent)' }} />
            <div style={{ padding: '0.75rem' }}>
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.85rem 1rem', borderRadius: '0.75rem',
                    fontSize: '0.95rem', fontWeight: 500,
                    color: active === l.href ? '#93c5fd' : '#94a3b8',
                    fontFamily: 'sans-serif',
                    borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.07)'; e.currentTarget.style.color = '#cbd5e1' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = active === l.href ? '#93c5fd' : '#94a3b8' }}
                >
                  <span>{l.label}</span>
                  <span style={{ fontSize: '0.65rem', color: '#1e3a5f', fontFamily: 'JetBrains Mono,monospace' }}>0{i + 1}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; max-width: 100vw; }

        .nav-desktop { display: flex !important; }
        .hamburger   { display: none !important; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  )
}