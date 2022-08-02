const mongoose = require('mongoose')
const {Schema} = mongoose

const projectSchema = new Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  learnt: {type: [String], required: true},
  link: {type: String},
  github: {type: String}
})

const project = mongoose.model('project', projectSchema)
exports.Project = project