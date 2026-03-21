export default function TimelineItem({ item, isLast }) {
  return (
    <div style={{ display: 'flex', gap: '24px', paddingBottom: isLast ? 0 : '48px' }}>
      {/* Spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: '12px', height: '12px', borderRadius: '50%',
          background: 'var(--accent)', flexShrink: 0, marginTop: '6px',
        }} />
        {!isLast && (
          <div style={{ width: '1px', flex: 1, background: 'var(--border)', marginTop: '8px' }} />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: '8px' }}>
        <p style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500,
          letterSpacing: '0.08em', marginBottom: '4px' }}>
          {item.period}
        </p>

        <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px',
          color: 'var(--text)', marginBottom: '2px' }}>
          {item.degree || item.role}
        </h3>

        <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>
          {item.institution || item.company} · {item.location}
        </p>

        {item.cgpa && (
          <p style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '8px' }}>
            CGPA: <strong style={{ color: 'var(--accent)' }}>{item.cgpa}</strong>
          </p>
        )}

        {item.tags && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '11px', padding: '3px 10px', borderRadius: '20px',
                background: 'rgba(232,197,71,0.1)', color: 'var(--accent)',
                border: '1px solid rgba(232,197,71,0.2)',
              }}>{tag}</span>
            ))}
          </div>
        )}

        {item.bullets && (
          <ul style={{ paddingLeft: '16px', marginTop: '8px' }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{ fontSize: '14px', color: 'var(--muted)',
                lineHeight: 1.8, marginBottom: '4px' }}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}