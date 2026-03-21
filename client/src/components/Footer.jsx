import { social } from '../data/portfolioData'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '20px' }}>
        <a href={social.github} target="_blank" rel="noreferrer"
          style={{ color: 'var(--muted)', fontSize: '20px' }}><FiGithub /></a>
        <a href={social.linkedin} target="_blank" rel="noreferrer"
          style={{ color: 'var(--muted)', fontSize: '20px' }}><FiLinkedin /></a>
        <a href={`mailto:${social.email}`}
          style={{ color: 'var(--muted)', fontSize: '20px' }}><FiMail /></a>
      </div>
      <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Suryadevara Aditya · Built with React + Express
      </p>
    </footer>
  )
}