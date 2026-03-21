import SectionWrapper from '../components/SectionWrapper'
import AchievementCard from '../components/AchievementCard'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" style={{ background: 'var(--bg2)' }}>
      <div className="section">
        <p className="section-label">Certifications & Milestones</p>
        <h2 className="section-title">My <span>Achievements</span></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}