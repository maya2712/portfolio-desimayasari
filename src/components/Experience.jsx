import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

import foto1 from './assets/expre/foto1.jpg'
import foto2 from './assets/expre/foto2.jpg'
import foto3 from './assets/expre/foto3.jpg'
import foto4 from './assets/expre/foto4.jpg'
import foto5 from './assets/expre/foto5.jpg'
import foto6 from './assets/expre/foto6.jpg'

import inters1 from './assets/inters/inters1.jpg'
import inters2 from './assets/inters/inters2.jpg'


// ── Data ────────────────────────────────────────────────
const internships = [
  {
    label: 'Internship School',
    year: 'Nov 2024',
    role: 'IT Support',
    company: 'UPT Puskesmas Melur Pekanbaru',
    photos: [inters1, null, null, null],
  },
  {
    label: 'Magang Nasional Batch II',
    year: 'Nov 2025 - Mei 2026',
    role: 'Public Facilities Officer',
    company: 'Kanwil Ditjen Imigrasi Riau',
    photos: [inters2, null, null, null],
  },
]

const internTimeline = [
  { year: 'Nov 2024', role: 'IT Support' },
  { year: 'Nov 2025 – Mei 2026', role: 'Public Facilities Officer' },
]

const projectItems = [
  { label: 'BEM FT UNRI', sub: 'Organization', bg: '...', overlay: 'rgba(26,16,64,0.55)', img: foto2 },
  { label: 'HIMATRO UNRI', sub: 'leader', bg: '...', overlay: 'rgba(13,51,32,0.55)', img: foto1 },
  { label: 'FORMADIKSI UNRI', sub: 'Kominfo', bg: '...', overlay: 'rgba(26,26,0,0.55)', img: foto4 },
  { label: 'OSIS SMAN 1 BP', sub: 'leader', bg: '...', overlay: 'rgba(10,26,58,0.55)', img: foto5 },
  { label: 'HIMATRO UNRI', sub: 'Organization', bg: '...', overlay: 'rgba(26,0,48,0.55)', img: foto6 },
  { label: 'FORMADIKSI UNRI', sub: 'Organization', bg: '...', overlay: 'rgba(0,26,26,0.55)', img: foto3 },
]

const orgTimeline = [
  { year: '2020', role: 'High School Student Council President' },
  { year: '2023', role: 'Staff Kaderisasi HIMATRO UNRI' },
  { year: '2024', role: 'Head of Interests and Talents Division HIMATRO UNRI' },
  { year: '2024', role: 'Secretary of the Partnership and Business Department BEM FT UNRI' },
  { year: '2025', role: 'Head of Visual Communication Design Division Formadiksi UNRI' },
]

// ── Styles ───────────────────────────────────────────────
const S = {
  wrap: {
    background: '#031432',
    fontFamily: "'Inter', sans-serif",
    color: '#e2e8f0',
    width: '100%',
  },
  header: {
    padding: '3rem 1.5rem 2rem',
    textAlign: 'center',
  },
  tagLine: {
    display: 'flex', alignItems: 'center', gap: '10px',
    justifyContent: 'center', fontSize: '10px', letterSpacing: '3px',
    color: '#3a4a5e', textTransform: 'uppercase', marginBottom: '10px',
  },
  tagDash: { width: '30px', height: '1px', background: '#1e2d42' },
  icBadge: {
    fontSize: '10px', color: '#3a5070',
    letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px',
  },
  icRole: {
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    fontWeight: 800, color: '#fff',
    marginBottom: '4px', lineHeight: 1.2,
  },
  icCompany: { fontSize: '12px', color: '#3a82d4' },
  icYearBadge: {
    display: 'inline-block', fontSize: '11px', color: '#4a7ab5',
    background: 'rgba(30,58,100,0.5)', border: '1px solid #1e3a64',
    borderRadius: '20px', padding: '3px 14px', marginTop: '10px',
    alignSelf: 'flex-start',
  },
  orgSection: {
    background: 'linear-gradient(180deg,#0a0f1e 0%,#0d1530 60%,#0a0f1e 100%)',
    padding: '48px 0 48px',
    position: 'relative',
    overflow: 'hidden',
  },
  orgGlow: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% 60%,rgba(60,80,200,0.15) 0%,transparent 65%)',
    pointerEvents: 'none',
  },
  navBtn: {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    width: '36px', height: '36px', borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
    color: '#fff', fontSize: '18px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
  },
  projLabel: {
    textAlign: 'center', letterSpacing: '4px', fontSize: '11px',
    color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', marginTop: '8px',
  },
  orgTl: { maxWidth: '860px', margin: '40px auto 0', padding: '0 24px' },
  orgTlItems: { display: 'flex', justifyContent: 'space-between' },
  orgTlItem: { textAlign: 'center', maxWidth: '130px' },
  orgTlYear: { fontSize: '13px', fontWeight: 700, color: '#e2e8f0' },
  orgTlLine: {
    position: 'relative', height: '2px',
    background: 'linear-gradient(90deg,#1a2235 0%,#4f8ef7 30%,#4f8ef7 90%,#1a2235 100%)',
    margin: '16px 0 8px',
  },
  orgDotRow: { display: 'flex', justifyContent: 'space-between', marginTop: '-7px' },
  orgDot: {
    width: '12px', height: '12px', borderRadius: '50%',
    background: '#4f8ef7', border: '2px solid #080e1d',
    boxShadow: '0 0 10px rgba(79,142,247,0.5)',
  },
  orgTlRole: { fontSize: '10px', color: '#64748b', lineHeight: 1.4, marginTop: '10px' },
}

// ── useIsMobile hook ─────────────────────────────────────
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  )
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [breakpoint])
  return isMobile
}

// ── ResponsiveInternSection ──────────────────────────────
function ResponsiveInternSection({ inView }) {
  const isMobile = useIsMobile(640)

  return (
    <>
      {/* ── Intern Cards ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        width: '100%',
        borderTop: '1px solid #141f35',
      }}>
        {internships.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{
              background: i === 0 ? '#0b1320' : '#0f1929',
              borderRight: i === 0 && !isMobile ? '1px solid #141f35' : 'none',
              borderBottom: isMobile && i === 0 ? '1px solid #141f35' : 'none',
              padding: isMobile ? '24px 20px' : '28px 32px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '20px',
              minHeight: '160px',
            }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={S.icBadge}>{item.label}</div>
              <div style={S.icRole}>{item.role}</div>
              <div style={S.icCompany}>{item.company}</div>
              <span style={S.icYearBadge}>{item.year}</span>
            </div>

            <div style={{
              width: isMobile ? '110px' : '140px',
              height: isMobile ? '90px' : '110px',
              flexShrink: 0,
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#111d2e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {item.photos[0]
                ? <img src={item.photos[0]} alt="foto" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#1e3554', fontSize: '11px' }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span>Foto</span>
                  </div>
                )
              }
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Timeline Internship ── */}
      <div style={{ background: '#031432', padding: isMobile ? '48px 24px' : '48px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {(() => {
            const n = internTimeline.length
            const PAD = 15
            const positions = internTimeline.map((_, i) => PAD + (i / (n - 1)) * (100 - PAD * 2))
            return (
              <div style={{ position: 'relative' }}>
                {/* Year labels atas */}
                <div style={{ position: 'relative', height: '24px', marginBottom: '10px' }}>
                  {internTimeline.map((item, i) => (
                    <div key={i} style={{
                      position: 'absolute', bottom: 0,
                      left: `${positions[i]}%`,
                      transform: 'translateX(-50%)',
                      fontSize: '13px', fontWeight: 700,
                      color: '#e2e8f0', whiteSpace: 'nowrap', textAlign: 'center',
                    }}>
                      {item.year}
                    </div>
                  ))}
                </div>
                {/* Garis + dots */}
                <div style={{ position: 'relative', height: '12px' }}>
                  <div style={{
                    position: 'absolute', top: '50%',
                    left: `${PAD}%`, right: `${PAD}%`,
                    height: '2px', transform: 'translateY(-50%)',
                    background: 'linear-gradient(90deg,#1a2235 0%,#4f8ef7 30%,#4f8ef7 90%,#1a2235 100%)',
                  }} />
                  {internTimeline.map((_, i) => (
                    <div key={i} style={{
                      position: 'absolute', top: '50%',
                      left: `${positions[i]}%`,
                      transform: 'translate(-50%, -50%)',
                      width: '12px', height: '12px', borderRadius: '50%',
                      background: '#4f8ef7', border: '2px solid #031432',
                      boxShadow: '0 0 10px rgba(79,142,247,0.5)',
                      boxSizing: 'border-box', zIndex: 1,
                    }} />
                  ))}
                </div>
                {/* Role labels bawah */}
                <div style={{ position: 'relative', height: '48px', marginTop: '10px' }}>
                  {internTimeline.map((item, i) => (
                    <div key={i} style={{
                      position: 'absolute', top: 0,
                      left: `${positions[i]}%`,
                      transform: 'translateX(-50%)',
                      width: '140px', fontSize: '11px',
                      color: '#64748b', lineHeight: 1.4, textAlign: 'center',
                    }}>
                      {item.role}
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </>
  )
}

// ── OrgTimeline ──────────────────────────────────────────
function OrgTimeline() {
  const isMobile = useIsMobile(640)

  if (isMobile) {
    // Layout vertikal untuk mobile
    return (
      <div style={{ maxWidth: '860px', margin: '40px auto 0', padding: '0 28px' }}>
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          {/* Garis vertikal */}
          <div style={{
            position: 'absolute', left: '5px', top: '6px', bottom: '6px',
            width: '2px',
            background: 'linear-gradient(180deg,#1a2235 0%,#4f8ef7 20%,#4f8ef7 90%,#1a2235 100%)',
          }} />

          {orgTimeline.map((item, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < orgTimeline.length - 1 ? '24px' : 0 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-23px', top: '3px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: '#4f8ef7', border: '2px solid #080e1d',
                boxShadow: '0 0 10px rgba(79,142,247,0.5)',
                boxSizing: 'border-box',
              }} />
              {/* Konten */}
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0', marginBottom: '2px' }}>
                {item.year}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.4 }}>
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Layout horizontal untuk desktop
  const PAD = 10
  const n = orgTimeline.length
  const positions = orgTimeline.map((_, i) => PAD + (i / (n - 1)) * (100 - PAD * 2))
  return (
    <div style={{ maxWidth: '860px', margin: '40px auto 0', padding: '0 24px' }}>
      <div style={{ position: 'relative' }}>
        {/* Year labels atas */}
        <div style={{ position: 'relative', height: '24px', marginBottom: '10px' }}>
          {orgTimeline.map((item, i) => (
            <div key={i} style={{
              position: 'absolute', bottom: 0,
              left: `${positions[i]}%`,
              transform: 'translateX(-50%)',
              fontSize: '13px', fontWeight: 700,
              color: '#e2e8f0', whiteSpace: 'nowrap', textAlign: 'center',
            }}>
              {item.year}
            </div>
          ))}
        </div>
        {/* Garis + dots */}
        <div style={{ position: 'relative', height: '12px' }}>
          <div style={{
            position: 'absolute', top: '50%',
            left: `${PAD}%`, right: `${PAD}%`,
            height: '2px', transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg,#1a2235 0%,#4f8ef7 30%,#4f8ef7 90%,#1a2235 100%)',
          }} />
          {orgTimeline.map((_, i) => (
            <div key={i} style={{
              position: 'absolute', top: '50%',
              left: `${positions[i]}%`,
              transform: 'translate(-50%, -50%)',
              width: '12px', height: '12px', borderRadius: '50%',
              background: '#4f8ef7', border: '2px solid #080e1d',
              boxShadow: '0 0 10px rgba(79,142,247,0.5)',
              boxSizing: 'border-box', zIndex: 1,
            }} />
          ))}
        </div>
        {/* Role labels bawah */}
        <div style={{ position: 'relative', height: '72px', marginTop: '10px' }}>
          {orgTimeline.map((item, i) => (
            <div key={i} style={{
              position: 'absolute', top: 0,
              left: `${positions[i]}%`,
              transform: 'translateX(-50%)',
              width: '110px', fontSize: '10px',
              color: '#64748b', lineHeight: 1.4, textAlign: 'center',
            }}>
              {item.role}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── InfiniteCarousel ─────────────────────────────────────
const ITEM_W = 100
const OUTER_W = 340

function getOffset(idx) {
  return OUTER_W / 2 - ITEM_W / 2 - idx * ITEM_W
}

function InfiniteCarousel() {
  const total = projectItems.length
  const cloned = [...projectItems, ...projectItems, ...projectItems]

  const [slide, setSlide] = useState(0)
  const [trackOffset, setTrackOffset] = useState(getOffset(total))
  const [animated, setAnimated] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [lightbox, setLightbox] = useState(null) // item yg dibuka
  const dragStartX = useRef(0)
  const autoRef = useRef(null)

  function goTo(dir) {
    if (isTransitioning) return
    setIsTransitioning(true)
    const next = (slide + dir + total) % total
    const targetGlobal = total + next
    setAnimated(true)
    setTrackOffset(getOffset(targetGlobal))
    setSlide(next)
    setTimeout(() => {
      setAnimated(false)
      setTrackOffset(getOffset(total + next))
      setTimeout(() => {
        setAnimated(true)
        setIsTransitioning(false)
      }, 20)
    }, 420)
  }

  function resetAuto() {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => goTo(1), 3000)
  }

  useEffect(() => {
    autoRef.current = setInterval(() => goTo(1), 3000)
    return () => clearInterval(autoRef.current)
  }, [slide, isTransitioning])

  // tutup lightbox pakai Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div style={{ position: 'relative' }}>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative', borderRadius: '16px', overflow: 'hidden',
              maxWidth: '420px', width: '100%',
              boxShadow: '0 0 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* Tombol X */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '10px', right: '10px', zIndex: 10,
                width: '30px', height: '30px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', fontSize: '16px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                lineHeight: 1,
              }}
            >✕</button>

            {/* foto / placeholder */}
            {lightbox.img
              ? (
                <img
                  src={lightbox.img}
                  alt={lightbox.label}
                  style={{
                    width: '100%', display: 'block',
                    maxHeight: '75vh',
                    objectFit: 'contain',
                    background: lightbox.bg,
                  }}
                />
              )
              : (
                <div style={{
                  width: '100%', height: '320px',
                  background: lightbox.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '12px',
                }}>
                  <svg width="48" height="48" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="3"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Belum ada foto</span>
                </div>
              )
            }

            {/* label bawah */}
            <div style={{
              background: lightbox.bg,
              padding: '14px 18px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              {lightbox.sub && (
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '3px' }}>{lightbox.sub}</div>
              )}
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {lightbox.label}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Track ── */}
      <div
        style={{ position: 'relative', width: `${OUTER_W}px`, margin: '0 auto 8px', overflow: 'hidden', cursor: 'grab' }}
        onMouseDown={e => { dragStartX.current = e.clientX }}
        onMouseUp={e => {
          const diff = dragStartX.current - e.clientX
          if (Math.abs(diff) > 40) { resetAuto(); goTo(diff > 0 ? 1 : -1) }
        }}
        onTouchStart={e => { dragStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          const diff = dragStartX.current - e.changedTouches[0].clientX
          if (Math.abs(diff) > 40) { resetAuto(); goTo(diff > 0 ? 1 : -1) }
        }}
      >
        <button style={{ ...S.navBtn, left: 0 }} onClick={() => { resetAuto(); goTo(-1) }} aria-label="Previous">‹</button>

        <div style={{
          display: 'flex', alignItems: 'center', height: '200px',
          transform: `translateX(${trackOffset}px)`,
          transition: animated ? 'transform 0.4s cubic-bezier(.4,0,.2,1)' : 'none',
        }}>
          {cloned.map((item, idx) => {
            const diff = idx - (total + slide)
            const isMain = diff === 0
            return (
              <div key={idx} style={{ minWidth: `${ITEM_W}px`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div
                  onClick={() => { if (isMain) setLightbox(item) }}
                  style={{
                    position: 'relative',
                    width: isMain ? '120px' : '90px',
                    height: isMain ? '180px' : '145px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: item.bg,
                    opacity: isMain ? 1 : 0.6,
                    transform: isMain ? 'scale(1)' : 'scale(0.92)',
                    transition: 'all 0.4s ease',
                    flexShrink: 0,
                    cursor: isMain ? 'pointer' : 'default',
                  }}
                >
                  {/* Foto (kalau ada) */}
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.label}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                      }}
                    />
                  )}

                  {/* Overlay warna — selalu ada supaya warna tetap keliatan */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: item.img ? item.overlay : 'transparent',
                    pointerEvents: 'none',
                  }} />

                  {/* Label bawah */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '24px 10px 10px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  }}>
                    {item.sub && (
                      <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px', letterSpacing: '0.5px' }}>
                        {item.sub}
                      </div>
                    )}
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.3 }}>
                      {item.label}
                    </div>
                  </div>

                  {/* Icon view kalau main + ada foto */}
                  {isMain && item.img && (
                    <div style={{
                      position: 'absolute', top: '8px', right: '8px',
                      background: 'rgba(0,0,0,0.4)', borderRadius: '6px',
                      padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <button style={{ ...S.navBtn, right: 0 }} onClick={() => { resetAuto(); goTo(1) }} aria-label="Next">›</button>
      </div>

      {/* Label + dots */}
      <div style={{ textAlign: 'center', marginTop: '4px' }}>
        <div style={S.projLabel}>MY &nbsp; Experience</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '10px' }}>
          {projectItems.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                if (isTransitioning) return
                resetAuto()
                setAnimated(false)
                setTrackOffset(getOffset(total + i))
                setSlide(i)
                setTimeout(() => setAnimated(true), 20)
              }}
              style={{
                width: i === slide ? '20px' : '6px',
                height: '6px', borderRadius: '3px',
                background: i === slide ? '#5b9cf6' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────
export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={S.wrap}>

      {/* ── Header ── */}
      <div style={S.header}>
        <div style={S.tagLine}>
          <span style={S.tagDash} />
          MY JOURNEY
          <span style={S.tagDash} />
        </div>
        <motion.h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            fontFamily: "'Arial', sans-serif",
            margin: 0,
            background: 'linear-gradient(110deg, #ffffff 0%, #a8c8ff 40%, #5b9cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Internship
        </motion.h2>
      </div>

      {/* ── Intern Cards + Timeline ── */}
      <ResponsiveInternSection inView={inView} />

      {/* ── Organisasi Section ── */}
      <div style={S.orgSection}>
        <div style={S.orgGlow} />

        {/* Judul */}
        <div style={{ textAlign: 'center', padding: '0 1.5rem 32px' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            fontFamily: "'Arial', sans-serif",
            background: 'linear-gradient(110deg, #ffffff 0%, #a8c8ff 40%, #5b9cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0 0 10px',
          }}>
            Organizational Experience
          </h2>
          <p style={{ fontSize: '13px', color: '#4a6080', margin: 0, letterSpacing: '0.3px' }}>
            A timeline of leadership, collaboration, and growth throughout my academic journey.
          </p>
        </div>

        {/* ── Infinite Carousel ── */}
        <InfiniteCarousel />

        {/* ── Org Timeline ── */}
        <OrgTimeline />

      </div>

    </section>
  )
}