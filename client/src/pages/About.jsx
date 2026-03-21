import SectionWrapper from '../components/SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about" style={{ background: 'var(--bg2)' }}>
      <div className="section">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div style={{ maxWidth: '720px' }}>
          <div className="accent-line" />
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 2, marginBottom: '20px' }}>
            Hi, I'm Aditya. I have a passion for crafting engaging digital experiences—whether that means architecting a robust  
            full-stack web application or diving deep into AI/ML to push the boundaries of what a project can do.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 2, marginBottom: '20px' }}>
            My recent work ranges from developing dynamic platforms like Adopt APaw and building NLP-powered document retrieval systems , 
            to working with Python-based data extraction tools and designing UI layouts and marketing assets in Adobe Photoshop.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 2 }}>
            Beyond code, I volunteer with the Lions Club, assisting in health camps and logistics—because good engineers build for communities, not just for screens. 
            When I'm taking a break, you can probably find me geeking out over anime, mangas, and books.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}