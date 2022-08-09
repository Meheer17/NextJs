const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: {type: String, required: true},
  // image: {type: String, required: true},
  description: {type: String, required: true},
  learnt: {type: String, required: true},
  link: {type: String},
  github: {type: String},
  tags: {type: [String], required: true},
  pri: {type: Number, required: true}
})

module.exports = mongoose.models.Project ||  mongoose.model('Project', ProjectSchema);