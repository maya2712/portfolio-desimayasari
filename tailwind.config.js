/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"','sans-serif'],
        body: ['"Inter"','sans-serif'],
        mono: ['"JetBrains Mono"','monospace'],
      },
      colors: {
        base: { 950:'#020509', 900:'#060d18', 800:'#091222', 700:'#0d1a30' },
        blue: { 300:'#93c5fd', 400:'#60a5fa', 500:'#3b82f6', 600:'#2563eb' },
        slate: { 400:'#94a3b8', 500:'#64748b', 600:'#475569', 800:'#1e293b' },
      },
      transitionDuration: { 400:'400ms' },
    },
  },
  plugins: [],
}
