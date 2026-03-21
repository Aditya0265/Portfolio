export default function SkillChip({ label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '8px 16px', borderRadius: '6px',
      background: 'var(--bg3)',
      border: '1px solid var(--border)',
      fontSize: '13px', fontWeight: 500,
      color: 'var(--text)',
      transition: 'all 0.2s ease',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(232,197,71,0.5)'
      e.currentTarget.style.color = 'var(--accent)'
      e.currentTarget.style.background = 'rgba(232,197,71,0.06)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.color = 'var(--text)'
      e.currentTarget.style.background = 'var(--bg3)'
    }}>
      {label}
    </span>
  )
}