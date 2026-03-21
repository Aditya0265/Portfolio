import { useState, useEffect } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import BlogCard from '../components/BlogCard'
import { placeholderBlogs } from '../data/portfolioData'
import axios from 'axios'

export default function Blog() {
  const [posts, setPosts]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`)
      .then(res => setPosts(res.data.length ? res.data : placeholderBlogs))
      .catch(() => setPosts(placeholderBlogs))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SectionWrapper id="blog">
      <div className="section">
        <p className="section-label">Thoughts & Writing</p>
        <h2 className="section-title">My <span>Blog</span></h2>

        {loading ? (
          <div style={{ display: 'flex', gap: '24px' }}>
            {[1,2,3].map(i => (
              <div key={i} style={{
                flex: 1, height: '240px', borderRadius: 'var(--radius)',
                background: 'var(--bg3)',
                animation: 'pulse 1.5s ease-in-out infinite',
              }} />
            ))}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {posts.map((post, i) => <BlogCard key={i} post={post} />)}
          </div>
        )}

        <style>{`
          @keyframes pulse {
            0%,100% { opacity: 0.4; }
            50%      { opacity: 0.7; }
          }
        `}</style>
      </div>
    </SectionWrapper>
  )
}