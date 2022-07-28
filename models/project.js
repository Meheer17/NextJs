const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  used: {type: [String], required: true},
  link: {type: String},
  github: {type: String}
})

const Project = mongoose.model('Project', projectSchema)
exports.Project = Project