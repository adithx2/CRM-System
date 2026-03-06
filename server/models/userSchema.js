const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String, unique: true,
        required: true,
    },

    password: {

        type: String,
        required: true,
        min: 6
    },

    role: {
        type: String,
        enum: ['admin', 'mentor', 'student', 'agent']
    },

})

module.exports = mongoose.model("User", userSchema)
