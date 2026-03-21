const express = require('express')
const router  = express.Router()
const Blog    = require('../models/Blog')

// GET all blogs (sorted newest first)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 }).limit(20)
    res.json(blogs)
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch blogs.' })
  }
})

// GET single blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
    if (!blog) return res.status(404).json({ error: 'Post not found.' })
    res.json(blog)
  } catch (err) {
    res.status(500).json({ error: 'Server error.' })
  }
})

module.exports = router