import SectionWrapper from '../components/SectionWrapper'
import ContactForm from '../components/ContactForm'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { social } from '../data/portfolioData'

export default function Contact() {
  return (
    <SectionWrapper id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="section">
        <p className="section-label">REACH OUT</p>
        <h2 className="section-title">Contact <span>Me</span></h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr',
          gap: '64px', alignItems: 'start',
        }} className="contact-grid">
          {/* Left info */}
          <div>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '32px' }}>
              Whether you have an opportunity, a question, or just want to say hello — 
              my inbox is always open.
            </p>
            {[
              { icon: <FiMail size={16}/>,    label: 'Email',    value: social.email,      href: `mailto:${social.email}` },
              { icon: <FiPhone size={16}/>,   label: 'Phone',    value: '+91-9390525814',   href: 'tel:+919390525814'        },
              { icon: <FiMapPin size={16}/>,  label: 'Location', value: 'Hyderabad, India', href: null                       },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '20px',
                alignItems: 'center' }}>
                <div style={{
                  color: 'var(--accent)', background: 'rgba(232,197,71,0.08)',
                  border: '1px solid rgba(232,197,71,0.15)',
                  borderRadius: '8px', padding: '10px', display: 'flex', flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--muted)',
                    letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</p>
                  {c.href
                    ? <a href={c.href} style={{ fontSize: '14px', color: 'var(--text)' }}>{c.value}</a>
                    : <p style={{ fontSize: '14px', color: 'var(--text)' }}>{c.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}