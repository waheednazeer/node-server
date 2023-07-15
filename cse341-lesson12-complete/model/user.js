const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('User', userSchema)