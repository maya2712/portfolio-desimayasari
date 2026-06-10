import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Github, Instagram } from 'lucide-react'

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/desimayasari/?isSelfProfile=false',
    accent: '#0ea5e9',
    glow: 'rgba(14,165,233,0.35)',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/maya2712',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.35)',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/desi.mysr?igsh=MWk3emZncWY0M25mMw==',
    accent: '#f472b6',
    glow: 'rgba(244,114,182,0.35)',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '7rem 1.5rem 6rem',
        position: 'relative',
        overflow: 'hidden',
        /* latar belakang section — gelap keunguan dalam */
        background: 'radial-gradient(ellipse at 50% 60%, rgba(28, 73, 108, 0.7) 0%, transparent 70%)',
      }}
    >
      {/* ── Background gradasi utama ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(15,10,35,0.5) 60%, rgba(10,8,28,0.7) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Glow ungu besar di tengah */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, rgba(139,92,246,0.07) 40%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />
      {/* Glow biru kiri bawah */}
      <div style={{
        position: 'absolute', bottom: '5%', left: '5%',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.09) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />
      {/* Glow pink kanan bawah */}
      <div style={{
        position: 'absolute', bottom: '8%', right: '5%',
        width: '280px', height: '280px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '580px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Main glass card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(99,102,241,0.045) 50%, rgba(14,165,233,0.035) 100%)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: '2rem',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Shimmer line atas */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.55), rgba(56,189,248,0.45), transparent)',
            pointerEvents: 'none',
          }} />
          {/* Inner glow atas */}
          <div style={{
            position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)',
            width: '350px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* ── Tag ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="s-tag" style={{ justifyContent: 'center' }}>Let's Connect</div>
          </motion.div>

          {/* ── Heading 2 baris ── */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: '#fff',
              margin: '0 0 1.25rem',
            }}
          >
            Feel free to<br />
            <span className="gt">contact me</span>
          </motion.h2>

          {/* ── Deskripsi ── */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32 }}
            style={{
              fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
              color: 'rgba(255,255,255,0.40)',
              fontSize: '0.875rem',
              lineHeight: 1.85,
              maxWidth: '380px',
              margin: '0 auto 2.75rem',
            }}
          >
            I'm always open to new opportunities, collaborations, and
            meaningful conversations in technology, design, and innovation.
            Every great opportunity starts with a conversation.
          </motion.p>

          {/* ── Social icons ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.42 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.1rem',
            }}
          >
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.93 }}
                  style={{
                    width: '54px', height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1.5px solid rgba(255,255,255,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${s.accent}1a`
                    e.currentTarget.style.borderColor = `${s.accent}55`
                    e.currentTarget.style.boxShadow = `0 8px 30px ${s.glow}`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={21} style={{ color: s.accent }} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Shimmer line bawah */}
          <div style={{
            position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
            pointerEvents: 'none',
          }} />
        </motion.div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  )
}