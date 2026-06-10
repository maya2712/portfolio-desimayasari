import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'

const f = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] } },
})

export default function Hero() {
  const go = (s) => document.querySelector(s)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: '80px',
    }}>

      {/* ── BACKGROUND ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>

        {/* Deep base */}
        <div style={{ position: 'absolute', inset: 0, background: '#020509' }}/>

        {/* Large soft glow — top left, posisi konten */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-20%', left: '-15%',
            width: '750px', height: '750px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,78,216,0.22) 0%, rgba(17,24,39,0) 65%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Glow bottom right */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', bottom: '-10%', right: '-10%',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Center beam — vertical light streak */}
        <div style={{
          position: 'absolute', top: 0, left: '42%',
          width: '1px', height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(59,130,246,0.12) 30%, rgba(59,130,246,0.06) 60%, transparent 100%)',
        }}/>

        {/* Diagonal lines — subtle, bukan grid */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: 0, bottom: 0,
            left: `${20 + i * 14}%`,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.04), transparent)',
            transform: 'skewX(-12deg)',
          }}/>
        ))}

        {/* Floating orbs — various sizes */}
        {[
          { l: '65%', t: '18%', w: '6px', op: 0.5 },
          { l: '78%', t: '38%', w: '3px', op: 0.3 },
          { l: '58%', t: '60%', w: '4px', op: 0.4 },
          { l: '88%', t: '55%', w: '5px', op: 0.35 },
          { l: '72%', t: '75%', w: '3px', op: 0.25 },
          { l: '50%', t: '25%', w: '2px', op: 0.3 },
        ].map((p, i) => (
          <motion.div key={i}
            animate={{ y: [0, -14, 0], opacity: [p.op * 0.5, p.op, p.op * 0.5] }}
            transition={{ duration: 5 + i * 1.2, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: p.l, top: p.t,
              width: p.w, height: p.w, borderRadius: '50%',
              background: 'rgba(96,165,250,0.8)',
              boxShadow: '0 0 8px rgba(96,165,250,0.5)',
            }}
          />
        ))}

        {/* Arc / curve shape — kanan */}
        <svg
          style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', opacity: 0.04 }}
          width="500" height="600" viewBox="0 0 500 600"
        >
          <ellipse cx="450" cy="300" rx="380" ry="280" stroke="#60a5fa" strokeWidth="1" fill="none"/>
          <ellipse cx="450" cy="300" rx="280" ry="200" stroke="#60a5fa" strokeWidth="0.5" fill="none"/>
          <ellipse cx="450" cy="300" rx="180" ry="130" stroke="#60a5fa" strokeWidth="0.5" fill="none"/>
        </svg>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to top, #020509, transparent)',
        }}/>
      </div>

      {/* ── CONTENT — rata kiri ── */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '1100px',
        margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
      }}>

        {/* Kecil — label atas */}
        <motion.div variants={f(0)} initial="hidden" animate="show"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}
        >
          
        </motion.div>

        {/* "My Portfolio" — sedang, bukan raksasa */}
        <motion.div variants={f(0.12)} initial="hidden" animate="show">
          <p style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            fontFamily: 'JetBrains Mono,monospace',
            color: '#334155', letterSpacing: '0.06em',
            marginBottom: '0.35rem',
          }}>
            Welcome to
          </p>
          <h1 style={{
            fontWeight: 700,
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            background: 'linear-gradient(135deg, #f8fafc 20%, #93c5fd 65%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 0,
          }}>
            My Portfolio
          </h1>
        </motion.div>

        {/* Thin divider */}
        <motion.div variants={f(0.24)} initial="hidden" animate="show"
          style={{
            width: '3rem', height: '2px', borderRadius: '2px',
            background: 'linear-gradient(90deg,#3b82f6,#1d4ed8)',
            margin: '1.5rem 0',
          }}
        />

        {/* Deskripsi */}
        <motion.div variants={f(0.34)} initial="hidden" animate="show" style={{ maxWidth: '700px' }}>
          <p style={{
            fontSize: 'clamp(0.88rem, 1.5vw, 1rem)',
            color: '#64748b', lineHeight: 1.9,
          }}>
            Hello! I'm{' '}
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Desi Maya Sari</span>
            , an Informatics Engineering graduate dedicated to creating efficient digital solutions through{' '}
            <span style={{ color: '#93c5fd' }}>web development</span>,{' '}
            <span style={{ color: '#93c5fd' }}>IT support</span>, and{' '}
            <span style={{ color: '#93c5fd' }}>data management</span>.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={f(0.46)} initial="hidden" animate="show"
          style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}
        >
          <button className="btn-primary" onClick={() => go('#projects')}>
            My Projects <ArrowRight size={15}/>
          </button>
          <button className="btn-ghost" onClick={() => go('#contact')}>
            <Mail size={15}/> Contact Me
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={f(0.58)} initial="hidden" animate="show"
          style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem' }}
        >
          
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
        style={{
          position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
        }}
      >
        <span style={{ fontSize: '0.55rem', fontFamily: 'JetBrains Mono,monospace', color: '#1e293b', letterSpacing: '0.25em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.9 }}>
          <ChevronDown size={12} style={{ color: 'rgba(96,165,250,0.2)' }}/>
        </motion.div>
      </motion.div>
    </section>
  )
}