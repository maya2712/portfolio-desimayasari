# Portfolio Desi Maya Sari

Website portofolio pribadi yang dibangun dengan React + Vite + Tailwind CSS + Framer Motion.

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka browser dan akses `http://localhost:5173`

---

## Struktur Folder

```
portfolio-desimayasari/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigasi atas dengan mobile menu
│   │   ├── Hero.jsx           # Section pertama / landing
│   │   ├── About.jsx          # Tentang saya
│   │   ├── Skills.jsx         # Hard/Soft/Other Skills
│   │   ├── Certificates.jsx   # Sertifikat & lisensi
│   │   ├── Experience.jsx     # Timeline magang & organisasi
│   │   ├── Projects.jsx       # Card proyek
│   │   ├── Contact.jsx        # Informasi kontak
│   │   ├── Footer.jsx         # Footer
│   │   └── Divider.jsx        # Garis pemisah section
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Teknologi

- **React 18** — Library UI
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animasi halus
- **Lucide React** — Icon set

## Personalisasi

Untuk mengubah data, edit langsung di file masing-masing komponen:
- Info kontak → `src/components/Contact.jsx`
- Proyek → `src/components/Projects.jsx`
- Skill → `src/components/Skills.jsx`
- Pengalaman → `src/components/Experience.jsx`
- Sertifikat → `src/components/Certificates.jsx`

## Build untuk Production

```bash
npm run build
```

Output tersimpan di folder `dist/`.
