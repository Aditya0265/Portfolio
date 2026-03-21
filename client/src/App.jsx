import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Achievements from './pages/Achievements'
import Blog from './pages/Blog'
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
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}