import SectionWrapper from '../components/SectionWrapper'
import TimelineItem from '../components/TimelineItem'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <SectionWrapper id="education" style={{ background: 'var(--bg2)' }}>
      <div className="section">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">My <span>Education</span></h2>
        <div style={{ maxWidth: '720px' }}>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} isLast={i === education.length - 1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

