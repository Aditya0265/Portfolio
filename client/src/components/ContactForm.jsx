import { useState } from 'react'
import axios from 'axios'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setStatus('sending')
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (field) => ({
    width: '100%', background: 'var(--bg3)', border: `1px solid ${errors[field] ? '#e05252' : 'var(--border)'}`,
    borderRadius: '8px', padding: '14px 16px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s',
  })

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
        className="form-row">
        <div>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle('name')}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = errors.name ? '#e05252' : 'var(--border)'}
          />
          {errors.name && <p style={{ fontSize: '12px', color: '#e05252', marginTop: '4px' }}>{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle('email')}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = errors.email ? '#e05252' : 'var(--border)'}
          />
          {errors.email && <p style={{ fontSize: '12px', color: '#e05252', marginTop: '4px' }}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <textarea
          placeholder="Your message…"
          rows={5}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '140px' }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = errors.message ? '#e05252' : 'var(--border)'}
        />
        {errors.message && <p style={{ fontSize: '12px', color: '#e05252', marginTop: '4px' }}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary"
        style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending…' : <><FiSend size={14} /> Send Message</>}
      </button>

      {status === 'success' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px',
          color: '#5cb85c', fontSize: '14px' }}>
          <FiCheck /> Message sent! I'll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px',
          color: '#e05252', fontSize: '14px' }}>
          <FiAlertCircle /> Something went wrong. Please try again.
        </div>
      )}

      <style>{`
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  )
}