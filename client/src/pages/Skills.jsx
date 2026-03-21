import SectionWrapper from '../components/SectionWrapper'
import SkillChip from '../components/SkillChip'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 style={{
                fontFamily: 'var(--font-body)', fontSize: '12px',
                fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--muted)',
                marginBottom: '16px',
              }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {items.map(skill => <SkillChip key={skill} label={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}