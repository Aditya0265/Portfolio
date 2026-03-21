export default function AchievementCard({ item }) {
  return (
    <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{
        fontSize: '28px', flexShrink: 0,
        background: 'rgba(232,197,71,0.08)',
        border: '1px solid rgba(232,197,71,0.15)',
        borderRadius: '10px', padding: '10px',
        lineHeight: 1,
      }}>
        {item.icon}
      </div>
      <div>
        <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '15px',
          color: 'var(--text)', marginBottom: '4px', lineHeight: 1.4 }}>
          {item.title}
        </h4>
        <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
          {item.issuer} · <span style={{ color: 'var(--accent)' }}>{item.date}</span>
        </p>
      </div>
    </div>
  )
}