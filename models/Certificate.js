const mongoose = require('mongoose')

const CertificateSchema = new mongoose.Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  link: {type: String},
  ranid: {type: String, required: true}
})

module.exports = mongoose.models.Certificate ||  mongoose.model('Certificate', CertificateSchema);