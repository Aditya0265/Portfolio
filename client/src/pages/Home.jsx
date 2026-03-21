import { useEffect, useState } from 'react'
//import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { social } from '../data/portfolioData'
import avatar from '../assets/avatar.jpg'

const titles = ['Full Stack Developer', 'CS Student @ GRIET', 'Open Source Contributor']

export default function Home() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTitleIdx(i => (i + 1) % titles.length)
        setFade(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: '80px',
        alignItems: 'center',
        paddingTop: '64px',
      }} className="hero-grid">

        {/* LEFT — Photo in rounded card frame */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '340px',
            height: '420px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--bg3)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            position: 'relative',
          }}>
            <img
              src={avatar}
              alt="Suryadevara Aditya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            {/* Subtle bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '80px',
              background: 'linear-gradient(to top, rgba(10,10,15,0.3) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          <p style={{
            fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.22em', color: 'var(--accent)',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Portfolio
          </p>

          <h1 style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
            color: 'var(--text)', marginBottom: '12px', lineHeight: 1.0,
          }}>
            Suryadevara<br />Aditya
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {['Full Stack Dev', 'CS @ GRIET', 'AI/ML Explorer'].map((t, i, arr) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300 }}>{t}</span>
                {i < arr.length - 1 && <span style={{ color: 'var(--border)', fontSize: '16px' }}>·</span>}
              </span>
            ))}
          </div>

          <p style={{
            fontSize: '15px', color: 'var(--muted)',
            lineHeight: 1.9, marginBottom: '32px', maxWidth: '440px',
          }}>
            3rd-year B.Tech CSE student at GRIET, Hyderabad — building
            full-stack web apps, exploring AI/ML.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button onClick={() => scrollTo('#projects')} className="btn btn-primary">
              Explore My Work →
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn btn-outline">
              Get In Touch
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: '40px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            marginBottom: '32px',
          }}>
            {[
              { value: '3+',  label: 'Projects'      },
              { value: '6',   label: 'Certifications' },
              { value: '7.9', label: 'CGPA'           },
            ].map((s) => (
              <div key={s.label}>
                <p style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '28px', color: 'var(--text)',
                  marginBottom: '4px', lineHeight: 1,
                }}>{s.value}</p>
                <p style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>{s.label}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '11px', letterSpacing: '0.16em',
        color: 'var(--muted)', textTransform: 'uppercase',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'bounce 2s ease-in-out infinite',
        cursor: 'pointer',
      }} onClick={() => scrollTo('#about')}>
        Scroll to explore
        <span style={{ fontSize: '16px' }}>↓</span>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
            padding-top: 100px !important;
          }
          .hero-grid > div:first-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}