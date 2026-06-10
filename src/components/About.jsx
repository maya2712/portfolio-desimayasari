import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const skills = ['Web Development', 'IT Support', 'Administration', 'Data Management']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>

      {/* ── Deep layered background ── */}
      {/* Base noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px', opacity: 0.4,
      }} />

      {/* Diagonal fine lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.025 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diag-about" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="32" stroke="#60a5fa" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-about)"/>
        </svg>
      </div>

      {/* Large ambient blobs — static */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-12%', right: '-8%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '55%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      </div>

      {/* Glowing horizontal rule top */}
      <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3), rgba(129,140,248,0.3), transparent)', zIndex: 0, pointerEvents: 'none' }} />
      {/* Glowing horizontal rule bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: '5%', right: '5%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.15), transparent)', zIndex: 0, pointerEvents: 'none' }} />

      {/* Static decorative dots — corners */}
      {[
        { top: '8%', left: '4%' },
        { top: '8%', right: '4%', left: 'auto' },
        { bottom: '8%', left: '4%', top: 'auto' },
        { bottom: '8%', right: '4%', left: 'auto', top: 'auto' },
      ].map((pos, i) => (
        <div key={i} style={{ position: 'absolute', ...pos, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(96,165,250,0.25)', boxShadow: '0 0 12px rgba(96,165,250,0.4)' }} />
        </div>
      ))}

      {/* Floating orbs — subtle, slow */}
      {[
        { w: '180px', top: '12%', left: '2%', color: 'rgba(59,130,246,0.06)', dur: 12, delay: 0 },
        { w: '120px', top: '65%', right: '3%', left: 'auto', color: 'rgba(139,92,246,0.07)', dur: 15, delay: 3 },
        { w: '100px', top: '35%', left: '88%', color: 'rgba(14,165,233,0.06)', dur: 10, delay: 6 },
      ].map((orb, i) => (
        <motion.div key={i}
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
          style={{ position: 'absolute', top: orb.top, left: orb.left, right: orb.right, width: orb.w, height: orb.w, borderRadius: '50%', background: orb.color, filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }}
        />
      ))}

      {/* ── Content ── */}
      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'inline-block', width: '22px', height: '2px', background: 'linear-gradient(90deg,#3b82f6,#60a5fa)', borderRadius: '2px', transformOrigin: 'right' }}
            />
            <span style={{ fontSize: '0.68rem', fontFamily: 'JetBrains Mono,monospace', color: '#3b82f6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>About Me</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'inline-block', width: '22px', height: '2px', background: 'linear-gradient(90deg,#60a5fa,#3b82f6)', borderRadius: '2px', transformOrigin: 'left' }}
            />
          </div>

          <h2 style={{
            fontFamily: 'Arial, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f1f5f9',
            letterSpacing: '-0.02em', lineHeight: 1.15,
            display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {['Who', 'I', 'Am'].map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >{word}</motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 32px 80px rgba(59,130,246,0.13), 0 0 0 1px rgba(96,165,250,0.12)' }}
            transition={{ duration: 0.35 }}
            style={{
              background: 'linear-gradient(145deg, rgba(9,18,40,0.85) 0%, rgba(6,12,28,0.9) 100%)',
              border: '1px solid rgba(96,165,250,0.1)',
              borderRadius: '1.5rem',
              backdropFilter: 'blur(24px)',
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '1.25rem',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Card inner top glow line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(96,165,250,0.6),rgba(129,140,248,0.6),transparent)', transformOrigin: 'left' }}
            />

            {/* Card glow corner top-right */}
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(59,130,246,0.07)', filter: 'blur(30px)', pointerEvents: 'none' }} />
            {/* Card glow corner bottom-left */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(99,102,241,0.06)', filter: 'blur(25px)', pointerEvents: 'none' }} />

            {/* Sparkle icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ marginBottom: '1.25rem', display: 'inline-block' }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(59,130,246,0.15),rgba(99,102,241,0.15))', border: '1px solid rgba(96,165,250,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(59,130,246,0.15)' }}>
                <Sparkles size={16} style={{ color: '#60a5fa' }}/>
              </div>
            </motion.div>

            <p style={{ color: '#64748b', fontSize: 'clamp(0.85rem,1.3vw,0.95rem)', lineHeight: 1.95, marginBottom: '1.5rem' }}>
              I am an{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>Informatics Engineering graduate</span>
              {' '}from the{' '}
              <span style={{ color: '#93c5fd', fontWeight: 500 }}>University of Riau</span>.
              Through academic projects, organizational activities, and internship experiences, I have developed skills in web development, IT support, administration, and data management.
            </p>
            <p style={{ color: '#64748b', fontSize: 'clamp(0.85rem,1.3vw,0.95rem)', lineHeight: 1.95 }}>
              I am eager to continue learning and contribute to{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>meaningful digital projects</span>.
            </p>

            {/* Bottom bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.7 }}
              style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(96,165,250,0.3),transparent)', transformOrigin: 'left' }}
            />
          </motion.div>

          {/* Skill tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              background: 'linear-gradient(145deg, rgba(9,18,40,0.7), rgba(6,12,28,0.75))',
              border: '1px solid rgba(96,165,250,0.08)',
              borderRadius: '1.1rem',
              backdropFilter: 'blur(18px)',
              padding: '1.4rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
          >
            {/* Skill card top glow */}
            <div style={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(96,165,250,0.3),transparent)', pointerEvents: 'none' }} />

            <p style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono,monospace', color: '#334155', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
              Focus Areas
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.map((s, i) => (
                <motion.span key={s}
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.07, background: 'rgba(59,130,246,0.18)', borderColor: 'rgba(96,165,250,0.4)', color: '#bfdbfe', boxShadow: '0 0 16px rgba(59,130,246,0.2)' }}
                  style={{
                    padding: '0.38rem 0.9rem', fontSize: '0.75rem', fontWeight: 500,
                    borderRadius: '2rem', fontFamily: 'JetBrains Mono,monospace',
                    background: 'rgba(59,130,246,0.08)', color: '#93c5fd',
                    border: '1px solid rgba(96,165,250,0.14)',
                    cursor: 'default', transition: 'all 0.25s',
                  }}
                >{s}</motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}