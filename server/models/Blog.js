const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
  title:   { type: String, required: true },
  summary: { type: String, required: true },
  tags:    [String],
  slug:    { type: String, required: true, unique: true },
  date:    { type: Date, default: Date.now },
  link:    { type: String, default: null },
})

module.exports = mongoose.model('Blog', BlogSchema)