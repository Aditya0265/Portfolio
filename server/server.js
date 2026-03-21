require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')

const contactRoutes = require('./routes/contact')
const blogRoutes    = require('./routes/blogs')

const app = express()

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

app.use('/api/contact', contactRoutes)
app.use('/api/blogs',   blogRoutes)

app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

const PORT = process.env.PORT || 5000

// Try MongoDB but start server regardless
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.warn('⚠️  MongoDB unavailable (running without DB):', err.message))

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))