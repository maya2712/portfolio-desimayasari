import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Code2, Users, Layers, ChevronDown } from 'lucide-react'

const cats = [
  {
    icon: Code2, label: 'Hard Skills', accent: '#3b82f6', accentDim: '#1d4ed8',
    items: ['PHP','Laravel','MySQL','HTML','CSS','JavaScript','Note.js','React.js', 'Vue.js'],
  },
  {
    icon: Users, label: 'Soft Skills', accent: '#6366f1', accentDim: '#4338ca',
    items: ['Communication','Teamwork','Leadership','Time Management','Problem Solving','Adaptation'],
  },
  {
    icon: Layers, label: 'Other Skills', accent: '#0ea5e9', accentDim: '#0369a1',
    items: ['Web Development','UI/UX Design','Figma','Canva','Project Management','Administration','Graphic Desig'],
  },
]

function Tag({ skill, accent, index, inView }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, y: 8 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 8 }}
      transition={{ delay: 0.2 + index * 0.055, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, y: -2 }}
      style={{
        padding: '0.32rem 0.78rem', fontSize: '0.72rem', fontWeight: 500,
        borderRadius: '0.45rem', background: `${accent}0d`, color: `${accent}cc`,
        border: `1px solid ${accent}22`, fontFamily: 'JetBrains Mono,monospace',
        cursor: 'default', display: 'inline-block',
      }}
    >{skill}</motion.span>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const inView     = useInView(sectionRef, { once: false, margin: '-60px' })
  const headerInView = useInView(headerRef, { once: false, margin: '-60px' })

  // Scroll progress for stacking animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  // Card 0 (Hard) — starts left-back, moves to final position
  const card0X     = useTransform(scrollYProgress, [0, 0.6, 1], ['-18%', '-8%', '0%'])
  const card0Scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.82, 0.9, 1])
  const card0Z     = useTransform(scrollYProgress, [0, 1], [0, 0])
  const card0Rot   = useTransform(scrollYProgress, [0, 0.5, 1], [-6, -2, 0])

  // Card 1 (Soft) — center, comes forward on top
  const card1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.78, 0.92, 1])
  const card1Y     = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 0])

  // Card 2 (Other) — starts right-back, moves to final position
  const card2X     = useTransform(scrollYProgress, [0, 0.6, 1], ['18%', '8%', '0%'])
  const card2Scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.82, 0.9, 1])
  const card2Rot   = useTransform(scrollYProgress, [0, 0.5, 1], [6, 2, 0])

  const [expanded, setExpanded] = useState([true, true, true])
  const toggle = (i) => setExpanded(prev => prev.map((v, idx) => idx === i ? !v : v))

  const cardMotionProps = [
    { x: card0X, scale: card0Scale, rotate: card0Rot, zIndex: 1 },
    { scale: card1Scale, y: card1Y, zIndex: 3 },
    { x: card2X, scale: card2Scale, rotate: card2Rot, zIndex: 1 },
  ]

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden', background: '#031432' }}>

      {/* Background blobs */}
      <div style={{ position: 'absolute', top: '20%', right: '-8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }}/>

      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#60a5fa"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <motion.div
                initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '22px', height: '2px', background: 'linear-gradient(90deg,#3b82f6,#60a5fa)', borderRadius: '2px', transformOrigin: 'right' }}
              />
              <span style={{ fontSize: '0.68rem', fontFamily: 'JetBrains Mono,monospace', color: '#3b82f6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Skills</span>
              <motion.div
                initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '22px', height: '2px', background: 'linear-gradient(90deg,#60a5fa,#3b82f6)', borderRadius: '2px', transformOrigin: 'left' }}
              />
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f1f5f9', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {['Skills', '&', 'Competencies'].map((w, i) => (
                <motion.span key={w}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.1 }}
                  style={{
                    display: 'inline-block', marginRight: '0.35rem',
                    color: w === 'Competencies' ? 'transparent' : '#f1f5f9',
                    background: w === 'Competencies' ? 'linear-gradient(135deg,#93c5fd,#60a5fa)' : 'none',
                    WebkitBackgroundClip: w === 'Competencies' ? 'text' : 'unset',
                    backgroundClip: w === 'Competencies' ? 'text' : 'unset',
                    WebkitTextFillColor: w === 'Competencies' ? 'transparent' : 'unset',
                  }}
                >{w}</motion.span>
              ))}
            </h2>
          </motion.div>
        </div>

        {/* ── Stacking cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', alignItems: 'stretch' }} className="skills-grid">
          {cats.map((cat, i) => {
            const Icon = cat.icon
            const mp   = cardMotionProps[i]

            return (
              <motion.div
                key={cat.label}
                style={{
                  x: mp.x, y: mp.y,
                  scale: mp.scale,
                  rotate: mp.rotate,
                  zIndex: mp.zIndex,
                  position: 'relative',
                  background: 'rgba(7,14,28,0.82)',
                  border: `1px solid ${cat.accent}20`,
                  borderRadius: '1.25rem',
                  backdropFilter: 'blur(18px)',
                  overflow: 'hidden',
                  boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px ${cat.accent}08`,
                  willChange: 'transform',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                whileHover={{ y: -6, boxShadow: `0 28px 60px ${cat.accent}20, 0 0 0 1px ${cat.accent}18` }}
                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              >
                {/* Top glow line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.9, delay: i * 0.12 + 0.3 }}
                  style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1.5px', background: `linear-gradient(90deg,transparent,${cat.accent}80,transparent)`, transformOrigin: 'left' }}
                />

                {/* Corner glow */}
                <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '50%', background: `${cat.accent}0b`, filter: 'blur(25px)', pointerEvents: 'none' }}/>

                {/* Header */}
                <div style={{ padding: '1.5rem 1.5rem 1.1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                      <motion.div
                        animate={{ boxShadow: [`0 0 0px ${cat.accent}00`, `0 0 16px ${cat.accent}55`, `0 0 0px ${cat.accent}00`] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
                        style={{ width: '40px', height: '40px', borderRadius: '11px', background: `linear-gradient(135deg,${cat.accent}1a,${cat.accentDim}0a)`, border: `1px solid ${cat.accent}28`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Icon size={17} style={{ color: cat.accent }}/>
                      </motion.div>
                      <div>
                        <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '2px' }}>{cat.label}</h3>
                        <p style={{ fontSize: '0.6rem', color: '#334155', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.08em' }}>{cat.items.length} skills</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => toggle(i)}
                      animate={{ rotate: expanded[i] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ background: `${cat.accent}10`, border: `1px solid ${cat.accent}18`, borderRadius: '8px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: cat.accent, flexShrink: 0 }}
                    >
                      <ChevronDown size={13}/>
                    </motion.button>
                  </div>
                  <div style={{ height: '1px', background: `linear-gradient(90deg,${cat.accent}22,transparent)`, marginTop: '1rem' }}/>
                </div>

                {/* Tags */}
                <AnimatePresence initial={false}>
                  {expanded[i] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.42rem', flex: 1, alignContent: 'flex-start' }}>
                        {cat.items.map((skill, si) => (
                          <Tag key={skill} skill={skill} accent={cat.accent} index={si} inView={inView}/>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: i * 0.12 + 0.5 }}
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg,transparent,${cat.accent}45,transparent)`, transformOrigin: 'left' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}