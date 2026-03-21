import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      <div>
        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '20px',
          color: 'var(--text)', marginBottom: '10px' }}>
          {project.name}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>
          {project.description}
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: '11px', padding: '3px 10px', borderRadius: '4px',
            background: 'rgba(232,197,71,0.08)',
            color: 'var(--accent)', border: '1px solid rgba(232,197,71,0.2)',
            letterSpacing: '0.04em',
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', paddingTop: '8px' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', color: 'var(--muted)' }}>
            <FiGithub size={15} /> GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', color: 'var(--accent)' }}>
            <FiExternalLink size={15} /> Live
          </a>
        )}
      </div>
    </div>
  )
}