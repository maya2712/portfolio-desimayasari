import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import cert1 from './assets/certs/sertifikat1.jpg'
import cert2 from './assets/certs/sertifikat2.jpg'
import cert3 from './assets/certs/sertifikat3.jpg'
import cert4a from './assets/certs/sertifikat4a.jpg'
import cert4b from './assets/certs/sertifikat4b.jpg'
import cert5 from './assets/certs/sertifikat5.jpg'
import cert6a from './assets/certs/sertifikat6a.jpg'
import cert6b from './assets/certs/sertifikat6b.jpg'
import cert7a from './assets/certs/sertifikat7a.jpg'
import cert7b from './assets/certs/sertifikat7b.jpg'

const certs = [
  {
    title: 'Sertifikat Pemagangan Nasional Batch II',
    issuer: 'Program Magang Nasional',
    year: '2026',
    cat: 'Internship',
    accent: '#3b82f6',
    image: cert1,
    viewUrl: null,
  },
  {
    title: 'Public Facilities Officer - Kanwil Ditjen Imigrasi Riau',
    issuer: 'Program Magang Nasional',
    year: '2026',
    cat: 'Internship',
    accent: '#3b82f6',
    image: cert5,
    viewUrl: null,
  },
  {
    title: 'Introduction to Project Management',
    issuer: 'MySkill',
    year: '2025',
    cat: 'Project Mgmt',
    accent: '#6366f1',
    image: cert2,
    viewUrl: null,
  },
  {
    title: 'Junior Graphic Designer',
    issuer: 'BNSP',
    year: '2024',
    cat: 'Sertifikasi Nasional',
    accent: '#8b5cf6',
    image: [cert4a, cert4b],
    viewUrl: null,
  },
  {
    title: 'Independent Study Program Batch 6',
    issuer: 'MSIB - Kampus Merdeka',
    year: '2024',
    cat: 'Training Program',
    accent: '#0ea5e9',
    image: cert3,
    viewUrl: null,
  },
  {
    title: 'UI/UX Design Bootcamp',
    issuer: 'PT GreatEdu Global Mahardika',
    year: '2024',
    cat: 'Training Program',
    accent: '#0ea5e9',
    image: [cert7a, cert7b],
    viewUrl: null,
  },
  {
    title: 'IT Support',
    issuer: 'UPT Puskesmas Melur Pekanbaru',
    year: '2023',
    cat: 'Internship',
    accent: '#3b82f6',
    image: null,
    viewUrl: null,
  },
  {
    title: 'Database Design & Programming with SQL',
    issuer: 'Talent Scouting Academy',
    year: '2023',
    cat: 'Training Program',
    accent: '#3b82f6',
    image: [cert6a, cert6b],
    viewUrl: null,
  },
]

const ITEMS_PER_PAGE = 4

// ── Orb ──
function Orb({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], opacity: [style.op0, style.op1, style.op0] }}
      transition={{ duration: style.dur, repeat: Infinity, ease: 'easeInOut', delay: style.delay }}
      style={{
        position: 'absolute', borderRadius: '50%',
        width: style.size, height: style.size,
        background: style.color, filter: 'blur(60px)',
        top: style.top, left: style.left, right: style.right,
        pointerEvents: 'none',
      }}
    />
  )
}

// ── Modal ──
function Modal({ cert, onClose }) {
  const images = Array.isArray(cert.image) ? cert.image : cert.image ? [cert.image] : []
  const [imgIdx, setImgIdx] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'rgba(7,14,28,0.99)',
          border: `1px solid ${cert.accent}35`,
          borderRadius: '1.5rem',
          maxWidth: '680px', width: '100%',
          overflow: 'hidden',
          boxShadow: `0 40px 100px rgba(0,0,0,0.7)`,
        }}
      >
        {/* Top accent line */}
        <div style={{ height: '3px', background: `linear-gradient(90deg,transparent,${cert.accent},transparent)` }}/>

        {/* Image area wrapper */}
        <div style={{
          position: 'relative',
          background: `linear-gradient(135deg,${cert.accent}08,rgba(7,14,28,0.98))`,
        }}>
          {/* Tombol Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '0.75rem', right: '0.75rem',
              background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px', width: '32px', height: '32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#94a3b8', zIndex: 10,
            }}
          >
            <X size={14}/>
          </button>

          {/* Tombol PREV */}
          {images.length > 1 && (
            <button
              onClick={() => setImgIdx(i => Math.max(i - 1, 0))}
              style={{
                position: 'absolute', left: '0.6rem', top: '50%', transform: 'translateY(-50%)',
                width: '36px', height: '36px', borderRadius: '50%', zIndex: 5,
                background: imgIdx === 0 ? 'rgba(255,255,255,0.04)' : `${cert.accent}25`,
                border: `1px solid ${imgIdx === 0 ? 'rgba(255,255,255,0.08)' : cert.accent + '55'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: imgIdx === 0 ? 'not-allowed' : 'pointer',
                color: imgIdx === 0 ? '#2d3a50' : cert.accent,
                transition: 'all 0.2s',
              }}
            >
              <ChevronLeft size={17}/>
            </button>
          )}

          {/* Gambar — padding horizontal besar supaya tidak ketutup tombol */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: images.length > 1 ? '1rem 3.8rem' : '1rem',
            minHeight: '160px',
          }}>
            {images.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={images[imgIdx]}
                  alt={`${cert.title} - ${imgIdx + 1}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%', height: 'auto',
                    maxHeight: '65vh', objectFit: 'contain',
                    borderRadius: '0.5rem',
                  }}
                />
              </AnimatePresence>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    width: '80px', height: '80px', borderRadius: '20px',
                    background: `${cert.accent}18`, border: `1px solid ${cert.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 0.75rem',
                  }}
                >
                  <Award size={36} style={{ color: cert.accent }}/>
                </motion.div>
                <p style={{ color: '#334155', fontSize: '0.72rem', fontFamily: 'JetBrains Mono,monospace' }}>
                  Lampirkan foto sertifikat
                </p>
                <p style={{ color: '#1e293b', fontSize: '0.62rem', fontFamily: 'JetBrains Mono,monospace', marginTop: '0.2rem' }}>
                  image: '/certs/namafile.jpg'
                </p>
              </div>
            )}
          </div>

          {/* Tombol NEXT */}
          {images.length > 1 && (
            <button
              onClick={() => setImgIdx(i => Math.min(i + 1, images.length - 1))}
              style={{
                position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)',
                width: '36px', height: '36px', borderRadius: '50%', zIndex: 5,
                background: imgIdx === images.length - 1 ? 'rgba(255,255,255,0.04)' : `${cert.accent}25`,
                border: `1px solid ${imgIdx === images.length - 1 ? 'rgba(255,255,255,0.08)' : cert.accent + '55'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: imgIdx === images.length - 1 ? 'not-allowed' : 'pointer',
                color: imgIdx === images.length - 1 ? '#2d3a50' : cert.accent,
                transition: 'all 0.2s',
              }}
            >
              <ChevronRight size={17}/>
            </button>
          )}

          {/* Dots indicator */}
          {images.length > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', paddingBottom: '0.85rem' }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  style={{
                    width: i === imgIdx ? '20px' : '7px', height: '7px',
                    borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0,
                    background: i === imgIdx ? cert.accent : `${cert.accent}40`,
                    transition: 'all 0.25s',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '1.5rem' }}>
          {images.length > 1 && (
            <p style={{ fontSize: '0.6rem', color: cert.accent + '80', fontFamily: 'JetBrains Mono,monospace', marginBottom: '0.5rem' }}>
              {imgIdx + 1} / {images.length}
            </p>
          )}
          <span style={{ fontSize: '0.62rem', fontFamily: 'JetBrains Mono,monospace', color: cert.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {cert.cat}
          </span>
          <h3 style={{ color: '#f1f5f9', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '1.05rem', marginTop: '0.4rem', marginBottom: '1rem', lineHeight: 1.35 }}>
            {cert.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <p style={{ color: '#64748b', fontSize: '0.78rem', fontFamily: 'Arial, sans-serif' }}>{cert.issuer}</p>
              <p style={{ color: '#334155', fontSize: '0.7rem', fontFamily: 'JetBrains Mono,monospace', marginTop: '2px' }}>{cert.year}</p>
            </div>
            {cert.viewUrl && (
              <a href={cert.viewUrl} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', borderRadius: '0.6rem', background: `${cert.accent}15`, border: `1px solid ${cert.accent}35`, color: cert.accent, fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'JetBrains Mono,monospace' }}
              >
                <ExternalLink size={13}/> Buka Sertifikat
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Card ──
function CertCard({ cert, index, inView, onView }) {
  const [hov, setHov] = useState(false)

  // Ambil gambar pertama kalau array, untuk thumbnail
  const thumbSrc = Array.isArray(cert.image) ? cert.image[0] : cert.image

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.88 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.88 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? `linear-gradient(145deg, rgba(10,20,40,0.95), rgba(${
              cert.accent === '#3b82f6' ? '59,130,246'
              : cert.accent === '#6366f1' ? '99,102,241'
              : cert.accent === '#8b5cf6' ? '139,92,246'
              : cert.accent === '#0ea5e9' ? '14,165,233'
              : cert.accent === '#10b981' ? '16,185,129'
              : '245,158,11'
            },0.06))`
          : 'rgba(8,16,32,0.7)',
        border: `1px solid ${hov ? cert.accent + '40' : cert.accent + '1a'}`,
        borderRadius: '1.2rem',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        transform: hov ? 'translateY(-7px)' : 'translateY(0)',
        boxShadow: hov
          ? `0 30px 70px ${cert.accent}20, 0 0 0 1px ${cert.accent}15`
          : '0 4px 24px rgba(0,0,0,0.35)',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* animated top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: index * 0.1 + 0.3 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg,transparent,${cert.accent}80,transparent)`, transformOrigin: 'left', zIndex: 1 }}
      />

      {/* corner glow */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0.4 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: `${cert.accent}18`, filter: 'blur(20px)', pointerEvents: 'none' }}
      />

      {/* thumbnail */}
      <div style={{
        height: '130px', flexShrink: 0, overflow: 'hidden',
        background: `linear-gradient(135deg,${cert.accent}16,rgba(5,12,24,0.95))`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        {thumbSrc ? (
          <>
            <img
              src={thumbSrc}
              alt={cert.title}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hov ? 'scale(1.07)' : 'scale(1)',
                transition: 'transform 0.4s',
              }}
            />
            {/* Badge jumlah gambar kalau array */}
            {Array.isArray(cert.image) && cert.image.length > 1 && (
              <div style={{
                position: 'absolute', bottom: '0.4rem', right: '0.4rem',
                background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)',
                border: `1px solid ${cert.accent}40`,
                borderRadius: '6px', padding: '2px 7px',
                fontSize: '0.58rem', color: cert.accent,
                fontFamily: 'JetBrains Mono,monospace',
                display: 'flex', alignItems: 'center', gap: '3px',
              }}>
                1/{cert.image.length}
              </div>
            )}
          </>
        ) : (
          <motion.div
            animate={{
              boxShadow: hov
                ? [`0 0 0px ${cert.accent}00`, `0 0 30px ${cert.accent}70`, `0 0 0px ${cert.accent}00`]
                : [`0 0 0px ${cert.accent}00`, `0 0 18px ${cert.accent}45`, `0 0 0px ${cert.accent}00`],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            style={{ width: '54px', height: '54px', borderRadius: '14px', background: `${cert.accent}16`, border: `1px solid ${cert.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Award size={24} style={{ color: cert.accent }}/>
          </motion.div>
        )}

        {/* shimmer sweep on hover */}
        <motion.div
          animate={{ x: hov ? ['-100%', '200%'] : '-100%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)', pointerEvents: 'none' }}
        />
      </div>

      {/* content */}
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* category badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.55rem' }}>
          <motion.span
            animate={{ scale: hov ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.4 }}
            style={{ width: '5px', height: '5px', borderRadius: '50%', background: cert.accent, display: 'inline-block', flexShrink: 0 }}
          />
          <span style={{ fontSize: '0.58rem', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.1em', color: `${cert.accent}cc`, textTransform: 'uppercase' }}>{cert.cat}</span>
        </div>

        {/* title */}
        <h3 style={{
          color: hov ? '#f1f5f9' : '#cbd5e1',
          fontSize: '0.8rem', fontWeight: 600,
          fontFamily: 'Arial, sans-serif',
          lineHeight: 1.45, flex: 1, marginBottom: '0.85rem',
          transition: 'color 0.25s',
        }}>{cert.title}</h3>

        {/* issuer + year */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ color: '#475569', fontSize: '0.68rem', fontFamily: 'Arial, sans-serif' }}>{cert.issuer}</span>
          <span style={{ color: '#334155', fontSize: '0.65rem', fontFamily: 'JetBrains Mono,monospace' }}>{cert.year}</span>
        </div>

        {/* view button */}
        <motion.button
          onClick={onView}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            width: '100%', padding: '0.52rem',
            borderRadius: '0.6rem',
            background: hov ? `${cert.accent}22` : `${cert.accent}0e`,
            border: `1px solid ${hov ? cert.accent + '45' : cert.accent + '25'}`,
            color: cert.accent,
            fontSize: '0.72rem', fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'JetBrains Mono,monospace',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            transition: 'all 0.25s',
          }}
        >
          <ExternalLink size={11}/> View
        </motion.button>
      </div>

      {/* bottom bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1.5px', background: `linear-gradient(90deg,transparent,${cert.accent}45,transparent)`, transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

// ── Main ──
export default function Certificates() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-80px' })

  const totalPages = Math.ceil(certs.length / ITEMS_PER_PAGE)
  const [page, setPage]         = useState(0)
  const [dir, setDir]           = useState(1)
  const [selected, setSelected] = useState(null)

  const paginate = (d) => {
    const next = page + d
    if (next < 0 || next >= totalPages) return
    setDir(d); setPage(next)
  }

  const visible = certs.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 70 : -70 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -70 : 70 }),
  }

  return (
    <section id="certificates" ref={ref} style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(5,10,22,0) 0%,rgba(12,8,32,0.7) 40%,rgba(5,10,22,0) 100%)', pointerEvents: 'none' }}/>

      <Orb style={{ size:'500px', top:'5%', left:'-10%', color:'rgba(99,102,241,0.12)', op0:0.4, op1:0.7, dur:10, delay:0 }}/>
      <Orb style={{ size:'400px', top:'30%', right:'-8%', left:'auto', color:'rgba(139,92,246,0.1)', op0:0.3, op1:0.6, dur:13, delay:3 }}/>
      <Orb style={{ size:'350px', top:'60%', left:'30%', color:'rgba(59,130,246,0.08)', op0:0.3, op1:0.5, dur:11, delay:1.5 }}/>

      {/* Diagonal stripe texture */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.018 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#818cf8" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)"/>
        </svg>
      </div>

      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(99,102,241,0.25),transparent)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(99,102,241,0.15),transparent)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ width: '22px', height: '2px', background: 'linear-gradient(90deg,#8b5cf6,#6366f1)', borderRadius: '2px', transformOrigin: 'right' }}/>
            <span style={{ fontSize: '0.68rem', fontFamily: 'JetBrains Mono,monospace', color: '#8b5cf6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Achievements</span>
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ width: '22px', height: '2px', background: 'linear-gradient(90deg,#6366f1,#8b5cf6)', borderRadius: '2px', transformOrigin: 'left' }}/>
          </div>

          <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f1f5f9', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            {['Certifications', '&', 'Licenses'].map((w, i) => (
              <motion.span key={w}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.1 }}
                style={{
                  display: 'inline-block', marginRight: '0.35rem',
                  color: w === 'Licenses' ? 'transparent' : '#f1f5f9',
                  background: w === 'Licenses' ? 'linear-gradient(135deg,#c4b5fd,#818cf8)' : 'none',
                  WebkitBackgroundClip: w === 'Licenses' ? 'text' : 'unset',
                  backgroundClip: w === 'Licenses' ? 'text' : 'unset',
                  WebkitTextFillColor: w === 'Licenses' ? 'transparent' : 'unset',
                }}
              >{w}</motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Slider */}
        <div style={{ position: 'relative' }}>

          {/* Arrow LEFT */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={page > 0 ? { scale: 1.12 } : {}}
            whileTap={page > 0 ? { scale: 0.92 } : {}}
            style={{
              position: 'absolute', left: '-52px', top: '50%', transform: 'translateY(-50%)',
              width: '40px', height: '40px', borderRadius: '50%', zIndex: 2,
              background: page === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(99,102,241,0.14)',
              border: `1px solid ${page === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.4)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: page === 0 ? 'not-allowed' : 'pointer',
              color: page === 0 ? '#1e293b' : '#818cf8',
              boxShadow: page > 0 ? '0 0 16px rgba(99,102,241,0.2)' : 'none',
              transition: 'all 0.25s',
            }}
          ><ChevronLeft size={18}/></motion.button>

          {/* Arrow RIGHT */}
          <motion.button
            onClick={() => paginate(1)}
            whileHover={page < totalPages - 1 ? { scale: 1.12 } : {}}
            whileTap={page < totalPages - 1 ? { scale: 0.92 } : {}}
            style={{
              position: 'absolute', right: '-52px', top: '50%', transform: 'translateY(-50%)',
              width: '40px', height: '40px', borderRadius: '50%', zIndex: 2,
              background: page === totalPages - 1 ? 'rgba(255,255,255,0.02)' : 'rgba(99,102,241,0.14)',
              border: `1px solid ${page === totalPages - 1 ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.4)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
              color: page === totalPages - 1 ? '#1e293b' : '#818cf8',
              boxShadow: page < totalPages - 1 ? '0 0 16px rgba(99,102,241,0.2)' : 'none',
              transition: 'all 0.25s',
            }}
          ><ChevronRight size={18}/></motion.button>

          {/* Cards */}
          <div style={{ overflow: 'hidden' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', alignItems: 'stretch' }}
                className="certs-grid"
              >
                {visible.map((c, i) => (
                  <CertCard key={c.title} cert={c} index={i} inView={inView} onView={() => setSelected(c)}/>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots + counter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => { setDir(i > page ? 1 : -1); setPage(i) }}
              animate={{ width: i === page ? '24px' : '8px', background: i === page ? '#6366f1' : 'rgba(99,102,241,0.22)' }}
              transition={{ duration: 0.3 }}
              style={{ height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0 }}
            />
          ))}
          <span style={{ color: '#334155', fontSize: '0.65rem', fontFamily: 'JetBrains Mono,monospace', marginLeft: '0.4rem' }}>
            {page + 1} / {totalPages}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal cert={selected} onClose={() => setSelected(null)}/>}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .certs-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .certs-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}