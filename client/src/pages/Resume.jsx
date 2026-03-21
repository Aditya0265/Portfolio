import SectionWrapper from '../components/SectionWrapper'
import { FiDownload, FiEye } from 'react-icons/fi'

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="section" style={{ textAlign: 'center' }}>
        <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Document</p>
        <h2 className="section-title">My <span>Resume</span></h2>

        <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '500px',
          margin: '0 auto 40px', lineHeight: 1.9 }}>
          Download my resume for a detailed overview of my education, skills, projects, 
          and experience — or preview it below.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="/Aditya_Resume.pdf" download className="btn btn-primary">
            <FiDownload size={14} /> Download PDF
          </a>
          <a href="/Aditya_Resume.pdf" target="_blank" rel="noreferrer"
            className="btn btn-outline">
            <FiEye size={14} /> Preview
          </a>
        </div>

        {/* PDF embed preview */}
        <div style={{
          width: '100%', maxWidth: '780px', margin: '0 auto',
          border: '1px solid var(--border)', borderRadius: 'var(--radius)',
          overflow: 'hidden', background: 'var(--bg2)',
        }}>
          <iframe
            src="/Aditya_Resume.pdf"
            title="Aditya Resume Preview"
            style={{ width: '100%', height: '700px', border: 'none' }}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}