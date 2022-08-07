const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: {type: String},
  // image: {type: String, required: true},
  description: {type: String},
  learnt: {type: String},
  link: {type: String},
  github: {type: String}
})

module.exports = mongoose.models.Project ||  mongoose.model('Project', ProjectSchema);