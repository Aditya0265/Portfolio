import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolioData'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [active, setActive]     = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const mainLinks = navLinks.filter(l => l.label !== 'Resume')

  const resumeLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    border: '1px solid var(--accent)',
    color: 'var(--accent)',
    background: 'transparent',
    transition: 'all 0.2s',
    textDecoration: 'none',
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 24px',
      }}>
        <div style={{
          maxWidth: 'var(--max-w)', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: '64px',
          gap: '24px',
        }}>

          <button onClick={() => handleNav('#home')} style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-head)', fontSize: '20px',
            color: 'var(--accent)', cursor: 'pointer',
            letterSpacing: '0.02em', flexShrink: 0,
          }}>
            Aditya<span style={{ color: 'var(--text)' }}>.</span>
          </button>

          <ul style={{
            display: 'flex', gap: '28px', listStyle: 'none',
            alignItems: 'center', flex: 1, justifyContent: 'center',
          }} className="desktop-nav">
            {mainLinks.map(link => (
              <li key={link.href}>
                <button onClick={() => handleNav(link.href)} style={{
                  background: 'none', border: 'none',
                  fontFamily: 'var(--font-body)', fontSize: '12px',
                  fontWeight: 500, letterSpacing: '0.08em',
                  color: active === link.href.replace('#', '') ? 'var(--accent)' : 'var(--muted)',
                  cursor: 'pointer', textTransform: 'uppercase',
                  transition: 'color 0.2s', paddingBottom: '2px',
                  borderBottom: active === link.href.replace('#', '')
                    ? '1px solid var(--accent)' : '1px solid transparent',
                }}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }} className="desktop-nav">
            <ThemeToggle />
            <button onClick={() => window.open('/Aditya_Resume.pdf', '_blank')}
             style={resumeLinkStyle}
             onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)' }}
             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >
              <FiDownload size={12} /> Resume
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none', background: 'none', border: 'none',
            color: 'var(--text)', fontSize: '24px', cursor: 'pointer',
          }} className="hamburger">
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          zIndex: 99, padding: '20px 24px 32px',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <button onClick={() => handleNav(link.href)} style={{
                  background: 'none', border: 'none',
                  fontFamily: 'var(--font-body)', fontSize: '15px',
                  color: active === link.href.replace('#', '') ? 'var(--accent)' : 'var(--text)',
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                }}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
            <ThemeToggle />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger  { display: flex !important; }
        }
      `}</style>
    </>
  )
}