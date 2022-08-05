const mongoose = require('mongoose')
const {Schema} = mongoose

const projectSchema = new Schema({
  title: {type: String},
  // image: {type: String, required: true},
  description: {type: String},
  learnt: {type: String},
  link: {type: String},
  github: {type: String}
})

const project = mongoose.model('project', projectSchema)
exports.Project = project