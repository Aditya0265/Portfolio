export default function BlogCard({ post }) {
  const dateStr = new Date(post.date).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {post.tags.map(tag => (
          <span key={tag} style={{
            fontSize: '10px', padding: '2px 8px', borderRadius: '4px',
            background: 'rgba(232,197,71,0.08)',
            color: 'var(--accent)', border: '1px solid rgba(232,197,71,0.15)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>{tag}</span>
        ))}
      </div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '18px',
        color: 'var(--text)', lineHeight: 1.4 }}>
        {post.title}
      </h3>
      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, flex: 1 }}>
        {post.summary}
      </p>
      <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: 'auto',
        borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
        {dateStr}
      </p>
    </div>
  )
}