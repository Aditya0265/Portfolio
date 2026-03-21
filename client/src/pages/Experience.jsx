import SectionWrapper from '../components/SectionWrapper'
import TimelineItem from '../components/TimelineItem'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <SectionWrapper id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="section">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">My <span>Experience</span></h2>
        <div style={{ maxWidth: '720px' }}>
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}