const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required:true,
        min:2,
        max:300
    },
    password: {
        type: String,
        required:true,
        min:2,
        max:1024
    },
    role: {
        type: String,
        required:true,
        min:2,
        max:10
    },
    didVote: {
        type: Boolean,
        default:false
    },
    canVote: {
        type: Boolean,
        default:true
    },
})

module.exports = mongoose.model('User', userSchema)