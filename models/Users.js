const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String, 
    pass: String
})

module.exports = mongoose.models.User ||  mongoose.model('User', UserSchema);