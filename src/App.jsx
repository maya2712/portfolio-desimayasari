import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060b18] text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <Divider />

        <About />
        <Divider />

        <Skills />
        <Divider />

        <Projects />
        <Divider />

        <Experience />
        <Divider />

        <Certificates />
        <Divider />

        <Contact />
      </main>
      <Footer />
    </div>
  )
}