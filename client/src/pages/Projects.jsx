import SectionWrapper from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'
import { projects, social } from '../data/portfolioData'
import { FiGithub } from 'react-icons/fi'

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">My <span>Projects</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href={social.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <FiGithub size={15} />
            View All Projects on GitHub
          </a>
        </div>

      </div>
    </SectionWrapper>
  )
}