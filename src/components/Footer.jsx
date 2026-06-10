import { motion } from "framer-motion";

const focusAreas = ["Web Development", "IT Support", "Administration", "Data Management"];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/desimayasari/?isSelfProfile=false",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/maya2712",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/desi.mysr?igsh=MWk3emZncWY0M25mMw==",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const contactInfo = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Pekanbaru, Riau, Indonesia",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    text: "Open to remote work & collaborations",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0d1526 0%, #0a1020 100%)",
        borderTop: "0.5px solid rgba(59,130,246,0.12)",
        padding: "2.5rem 1.5rem 1.5rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="footer-main"
      >
        {/* Brand */}
        <div>
          {/* Gradient name — using inline SVG text trick for reliable cross-browser gradient */}
          <div style={{ marginBottom: "0.8rem" }}>
            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                fontSize: "1.45rem",
                letterSpacing: "0.01em",
                background: "linear-gradient(90deg, #93c5fd 0%, #3b82f6 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Desi Maya Sari
            </span>
          </div>

          <p
            style={{
              fontSize: "0.78rem",
              color: "#8fa0b8",
              lineHeight: 1.75,
              fontFamily: "Arial, sans-serif",
              maxWidth: "320px",
              margin: "0 0 1.1rem 0",
            }}
          >
            Informatics Engineering graduate from Universitas Riau, passionate
            in web development, UI/UX design, and building meaningful digital
            experiences.
          </p>

          {/* Focus Areas */}
          <div style={{ marginBottom: "1.2rem" }}>
            <p style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#334155",
              margin: "0 0 0.55rem 0",
            }}>
              Focus Areas
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {focusAreas.map((area) => (
                <span
                  key={area}
                  style={{
                    fontSize: "0.72rem",
                    padding: "4px 11px",
                    borderRadius: "6px",
                    border: "0.5px solid rgba(59,130,246,0.22)",
                    color: "#60a5fa",
                    background: "rgba(59,130,246,0.07)",
                    fontFamily: "Arial, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: "0.55rem" }}>
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  border: "0.5px solid rgba(59,130,246,0.18)",
                  background: "rgba(59,130,246,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#475569",
                  textDecoration: "none",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <p style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: "#8fa0b8",
            margin: "0 0 1rem 0",
          }}>
            Get in Touch
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {contactInfo.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <span style={{ marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: "0.77rem", color: "#8fa0b8", fontFamily: "Arial, sans-serif", lineHeight: 1.55 }}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Divider */}
      <div style={{
        maxWidth: "1100px",
        margin: "2rem auto 1.2rem",
        height: "0.5px",
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2) 30%, rgba(59,130,246,0.2) 70%, transparent)",
      }} />

      {/* Copyright centered */}
      <p style={{
        textAlign: "center",
        fontSize: "0.72rem",
        color: "#334155",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}>
        © {new Date().getFullYear()} Desi Maya Sari · Teknik Informatika · Universitas Riau
      </p>

      <style>{`
        @media (max-width: 640px) {
          .footer-main {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}