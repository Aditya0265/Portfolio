require('dotenv').config({ path: '../.env' })
const mongoose = require('mongoose')
const Blog     = require('../models/Blog')

const seedData = [
  {
    title:   'Getting Started with Docker: What I Learned Building Connecting the Dots',
    summary: 'A walkthrough of containerizing a FAISS-based NLP application for CPU-only systems — challenges, solutions, and lessons learned.',
    tags:    ['Docker', 'NLP', 'Python'],
    slug:    'docker-faiss-nlp',
    date:    new Date('2026-02-01'),
  },
  {
    title:   'Why I Chose MongoDB for AdoptAPaw',
    summary: 'Comparing SQL vs NoSQL for a pet adoption platform — schema flexibility, adoption request flows, and the real-world trade-offs.',
    tags:    ['MongoDB', 'Database Design', 'MERN'],
    slug:    'mongodb-adoptapaw',
    date:    new Date('2025-12-10'),
  },
  {
    title:   'My AWS Cloud Foundations Journey',
    summary: 'Notes and key takeaways from completing the AWS Academy Cloud Foundations certification — concepts, services, and study tips.',
    tags:    ['AWS', 'Cloud', 'Certification'],
    slug:    'aws-cloud-foundations',
    date:    new Date('2024-01-15'),
  },
]

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(seedData)
    console.log('✅ Blog seed complete')
    process.exit(0)
  })
  .catch(err => { console.error(err); process.exit(1) })