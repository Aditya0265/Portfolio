import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
//import SectionNav from './components/SectionNav'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Achievements from './pages/Achievements'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}