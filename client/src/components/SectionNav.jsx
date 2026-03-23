export default function SectionNav() {
  const cards = [
    { label: 'About',        desc: 'Background, interests, and what I\'m currently building.',  href: '#about'        },
    { label: 'Projects',     desc: 'Full-stack apps and AI/ML projects with real outcomes.',     href: '#projects'     },
    { label: 'Skills',       desc: 'Technical stack across languages, frameworks, and tools.',   href: '#skills'       },
    { label: 'Experience',   desc: 'Internship at BytesEdge and community volunteering.',        href: '#experience'   },
    { label: 'Education',    desc: 'B.Tech CSE at GRIET. CGPA 7.9. Graduation 2027.',           href: '#education'    },
    { label: 'Contact',      desc: 'Available for internships. Based in Hyderabad.',             href: '#contact'      },
  ]

  return (
    <section style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '64px 24px',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <p style={{
          fontSize: '11px', letterSpacing: '0.2em',
          color: 'var(--muted)', textTransform: 'uppercase',
          marginBottom: '32px', fontWeight: 500,
        }}>Explore</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>
          {cards.map((card) => (
            <button
              key={card.href}
              onClick={() => document.querySelector(card.href)?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--bg)',
                border: 'none',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                padding: '28px 24px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
            >
              <p style={{
                fontFamily: 'var(--font-head)', fontSize: '16px',
                color: 'var(--text)', marginBottom: '8px',
              }}>{card.label}</p>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
                {card.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}