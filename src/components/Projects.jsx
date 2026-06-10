import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ImageIcon, ArrowRight } from 'lucide-react'

import cert1 from './assets/certs/sertifikat1.jpg'
import pro1 from './assets/project/pro1.png'
import pro2 from './assets/project/pro2.png'
import pro3 from './assets/project/pro3.png'
import pro4 from './assets/project/pro4.png'
import pro5 from './assets/project/pro5.png'
import pro6 from './assets/project/pro6.png'
import pro7 from './assets/project/pro7.png'


// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const projects = [
  {
    id: 'tanjak',
    title: 'Tanjak Berseri',
    sub: 'Web Application · Imigrasi Riau',
    desc: 'Designed and developed a modern, responsive official landing page for Tanjak Berseri, a digital immigration consultation innovation at the Regional Office of the Directorate General of Immigration, Riau.',
    tech: ['Vue.js','Supabase', 'HTML', 'CSS', 'JavaScript','UI Design'],
    github: 'https://github.com/maya2712/Aplikasi-Tanjak-Berseri',
    images: [pro1, pro2, pro3],
    gradient: 'linear-gradient(135deg, #1a6b6b 0%, #1e4d7b 60%, #162a52 100%)',
    layout: 'hero',
  },
  {
    id: 'consulting',
    title: 'Academic Consulting Application',
    sub: 'Web Application · Penjadwalan',
    desc: 'A web-based consultation platform for managing communication and scheduling between students and lecturers in the Informatics Engineering Study Program at University of Riau.',
    tech: ['Laravel', 'PHP', 'HTML','CSS','MySQL'],
    github: 'https://github.com/maya2712/Skripsi-Aplikasi-Konsultasi.git',
    images: [pro4],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a7a 100%)',
    layout: 'twin-left',
  },
  {
    id: 'redesign',
    title: 'Website Redesign for Informatics Engineering',
    sub: 'Web Design · UNRI',
    desc: 'Redesigned the Informatics Engineering Study Program website at University of Riau by improving the user interface, user experience, and overall usability.',
    tech: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
    github: 'https://github.com/maya2712/Redesain_Web_TI_UNRI.git',
    images: [pro5],
    gradient: 'linear-gradient(135deg, #1a2d5a 0%, #2a3f7a 100%)',
    layout: 'twin-right',
  },
  {
    id: 'ecoswap',
    title: 'EcoSwap',
    sub: 'Second-Hand Goods Promotion App',
    desc: 'Designed the UI/UX for EcoSwap, a second-hand goods platform that promotes sustainable consumption through an intuitive and user-friendly experience.',
    tech: ['UI Design','UX Design', 'Figma', 'Adobe XD'],
    github: 'https://www.figma.com/design/RXZT0Arat8g0BTnOSpDOmr/EcoSwap?node-id=0-1&p=f',
    images: [pro6, pro7],
    gradient: 'linear-gradient(135deg, #0d1b3e 0%, #1a2d5a 100%)',
    layout: 'reverse',
  },
]

// ── Placeholder foto ─────────────────────────
function PhotoPlaceholder({ style = {} }) {
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: '120px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(255,255,255,0.06)', gap: '8px', ...style
    }}>
      <ImageIcon size={28} style={{ color: 'rgba(255,255,255,0.2)' }} />
      <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>foto proyek</span>
    </div>
  )
}

// ── Tombol View ──────────────────────────────
function ViewBtn({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="view-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '0.38rem 1rem',
        borderRadius: '2rem',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.18)',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.75rem',
        fontWeight: 600,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease',
        boxShadow: 'none',
        letterSpacing: '0.03em',
        whiteSpace: 'nowrap',
        alignSelf: 'flex-start',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)'
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.color = '#fff'
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(99,102,241,0.5)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      View <ExternalLink size={11} />
    </a>
  )
}

// ── Built With inline text ───────────────────
function BuiltWith({ tech }) {
  return (
    <p style={{
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.5)',
      fontFamily: 'JetBrains Mono, monospace',
      lineHeight: 1.5,
      marginBottom: '1.5rem',
    }}>
      <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: '0.3rem' }}>Built With:</span>
      {tech.join(', ')}
    </p>
  )
}

// ── Project title style ──────────────────────
const titleStyle = (size = 'clamp(1.6rem, 3vw, 2.4rem)') => ({
  fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
  fontWeight: 700,
  fontStyle: 'normal',
  fontSize: size,
  color: '#fff',
  lineHeight: 1.15,
  marginBottom: '1rem',
  letterSpacing: '-0.01em',
})

// ── CARD 1 — Hero full-width ─────────────────
function HeroCard({ proj, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -6,
        boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
        transition: { duration: 0.3 },
      }}
      style={{
        background: proj.gradient,
        borderRadius: '1.25rem', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1fr auto',
        minHeight: '260px', position: 'relative',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        cursor: 'default',
      }}
      className="proj-hero"
    >
      {/* Glow overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      {/* Left: teks */}
      <div style={{ padding: '2.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 1 }}>
        <div>
          <h3 style={titleStyle()}>
            {proj.title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', marginBottom: '1rem' }}>
            {proj.desc}
          </p>
          <BuiltWith tech={proj.tech} />
        </div>
        <ViewBtn href={proj.github} />
      </div>

      {/* Right: 3 mockup phones */}
      <div
        style={{
          display: 'flex', alignItems: 'flex-end', gap: '0.75rem',
          paddingRight: '2rem', paddingBottom: '0', paddingTop: '1.5rem',
          position: 'relative', zIndex: 1,
        }}
        className="hero-phones"
      >
        {proj.images.map((src, i) => (
          <div key={i} style={{
            width: '110px', borderRadius: '16px 16px 0 0',
            overflow: 'hidden', flexShrink: 0,
            height: i === 1 ? '220px' : '185px',
            background: 'rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            transform: i === 0 ? 'translateY(20px)' : i === 2 ? 'translateY(20px)' : 'translateY(0)',
          }}>
            {src
              ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <PhotoPlaceholder />}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ── CARD 2 & 3 — Twin cards ──────────────────
function TwinCard({ proj, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -5,
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        transition: { duration: 0.28 },
      }}
      style={{
        background: proj.gradient,
        borderRadius: '1.25rem', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1fr 160px',
        minHeight: '220px', position: 'relative',
        flex: 1,
        boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
        cursor: 'default',
      }}
      className="twin-card"
    >
      {/* Left: teks */}
      <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 1 }}>
        <div>
          <h3 style={titleStyle('1.35rem')}>
            {proj.title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {proj.desc}
          </p>
          <BuiltWith tech={proj.tech} />
        </div>
        <ViewBtn href={proj.github} />
      </div>

      {/* Right: foto dengan diagonal clip */}
      <div style={{ position: 'relative', overflow: 'hidden' }} className="twin-img-panel">
        <div style={{
          position: 'absolute', left: '-1px', top: 0, bottom: 0, width: '2px',
          background: 'rgba(255,255,255,0.15)',
          transform: 'skewX(-8deg)',
          zIndex: 2,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
          background: 'rgba(0,0,0,0.2)',
        }}>
          {proj.images[0]
            ? <img src={proj.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <PhotoPlaceholder />}
        </div>
      </div>
    </motion.div>
  )
}

// ── CARD 4 — Reverse: foto kiri, teks kanan ──
function ReverseCard({ proj, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -6,
        boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
        transition: { duration: 0.3 },
      }}
      style={{
        background: proj.gradient,
        borderRadius: '1.25rem', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '380px 1fr',
        minHeight: '260px', position: 'relative',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        cursor: 'default',
      }}
      className="proj-reverse"
    >
      {/* Left: 2 foto panels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', overflow: 'hidden', borderRadius: '1.25rem 0 0 1.25rem' }} className="reverse-img-grid">
        {proj.images.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
            {src
              ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <PhotoPlaceholder style={{ minHeight: '100%' }} />}
          </div>
        ))}
      </div>

      {/* Right: teks */}
      <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right', zIndex: 1 }}>
        <h3 style={{ ...titleStyle('clamp(1.6rem, 2.5vw, 2.2rem)'), marginBottom: '0.4rem' }}>
          {proj.title}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
          {proj.sub}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '380px', marginBottom: '0.75rem' }}>
          {proj.desc}
        </p>
        <BuiltWith tech={proj.tech} />
        <div style={{ alignSelf: 'flex-end' }}>
          <ViewBtn href={proj.github} />
        </div>
      </div>
    </motion.div>
  )
}

// ── CTA Section — Want to See More? ──────────
function CtaSection({ inView }) {
  const handleContactClick = () => {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        marginTop: '3.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '0 1rem',
      }}
    >
      {/* Divider line */}
      <div style={{
        width: '48px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)',
        marginBottom: '0.5rem',
      }} />

      {/* Heading */}
      <h3 style={{
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
        color: '#fff',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        margin: 0,
      }}>
        Want to See{' '}
        <span style={{
          background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          More?
        </span>
      </h3>

      {/* Body text */}
      <p style={{
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 'clamp(0.88rem, 2vw, 1rem)',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.75,
        maxWidth: '520px',
        margin: 0,
      }}>
        These projects highlight some of my experience and skills. I'm always open to new challenges,
        collaborations, and opportunities to create meaningful digital solutions.
        So feel free to connect with me.
      </p>

      {/* Contact Me button */}
      <button
        onClick={handleContactClick}
        className="cta-contact-btn"
        style={{
          marginTop: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0.72rem 1.8rem',
          borderRadius: '2rem',
          background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
          border: 'none',
          color: '#fff',
          fontSize: '0.9rem',
          fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
          fontWeight: 700,
          letterSpacing: '0.02em',
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(99,102,241,0.4)',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.4)'
        }}
      >
        Contact Me <ArrowRight size={15} />
      </button>
    </motion.div>
  )
}

// ── Section utama ────────────────────────────
export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-80px' })

  const hero    = projects.find(p => p.layout === 'hero')
  const twinL   = projects.find(p => p.layout === 'twin-left')
  const twinR   = projects.find(p => p.layout === 'twin-right')
  const reverse = projects.find(p => p.layout === 'reverse')

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 1.5rem 5rem', position: 'relative' }}>
      {/* bg glow */}
      <div style={{ position: 'absolute', top: '15%', left: '0', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,123,0.12) 0%,transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div className="s-tag" style={{ justifyContent: 'center' }}>Project Showcase</div>
          <h2 className="s-title" style={{
            fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            letterSpacing: '-0.02em',
          }}>
            My <span className="gt">Projects</span>
          </h2>
        </motion.div>

        {/* Card 1 — Hero */}
        {hero && <HeroCard proj={hero} inView={inView} delay={0.1} />}

        {/* Card 2 & 3 — Twin row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="twin-row">
          {twinL && <TwinCard proj={twinL} inView={inView} delay={0.2} />}
          {twinR && <TwinCard proj={twinR} inView={inView} delay={0.3} />}
        </div>

        {/* Card 4 — Reverse */}
        {reverse && <ReverseCard proj={reverse} inView={inView} delay={0.4} />}

        {/* CTA — Want to See More? */}
        <CtaSection inView={inView} />
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        /* ─── Hero Card ─── */
        @media (max-width: 768px) {
          .proj-hero {
            grid-template-columns: 1fr !important;
          }
          .hero-phones {
            padding: 0 1.5rem 0 !important;
            padding-top: 0 !important;
            justify-content: center;
            align-items: flex-end;
            gap: 0.6rem !important;
            overflow: hidden;
            height: 200px;
          }
          .hero-phones > div {
            width: 90px !important;
            height: 165px !important;
            transform: none !important;
          }
          .hero-phones > div:nth-child(2) {
            height: 190px !important;
            transform: none !important;
          }
        }

        @media (max-width: 480px) {
          .hero-phones {
            height: 170px;
          }
          .hero-phones > div {
            width: 72px !important;
            height: 138px !important;
          }
          .hero-phones > div:nth-child(2) {
            height: 158px !important;
          }
        }

        /* ─── Twin Row ─── */
        @media (max-width: 768px) {
          .twin-row {
            grid-template-columns: 1fr !important;
          }

          /* Pastikan gambar twin card tetap tampil di mobile */
          .twin-card {
            grid-template-columns: 1fr 140px !important;
            min-height: 200px !important;
          }

          .twin-img-panel {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .twin-card {
            grid-template-columns: 1fr 110px !important;
          }
        }

        /* ─── Reverse Card ─── */
        @media (max-width: 768px) {
          .proj-reverse {
            grid-template-columns: 1fr !important;
          }
          .reverse-img-grid {
            height: 200px;
            border-radius: 1.25rem 1.25rem 0 0 !important;
            grid-template-columns: 1fr 1fr !important;
            display: grid !important;
          }
          .proj-reverse > div:last-child {
            text-align: left !important;
            align-items: flex-start !important;
          }
        }

        /* ─── CTA Button ─── */
        @media (prefers-reduced-motion: reduce) {
          .view-btn,
          .cta-contact-btn {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}