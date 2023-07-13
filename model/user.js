const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:"string",
    password:"string"
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel