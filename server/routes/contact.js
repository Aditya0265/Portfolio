const express = require('express')
const router  = express.Router()
const Contact = require('../models/Contact')

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' })
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    const doc = await Contact.create({ name, email, message })
    console.log(`📩 New contact from ${name} <${email}>`)
    res.status(201).json({ success: true, id: doc._id })
  } catch (err) {
    console.error('Contact save error:', err.message)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

module.exports = router