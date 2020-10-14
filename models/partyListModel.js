const mongoose = require('mongoose')
const { Schema } = mongoose;

const partyListSchema = new Schema({
   name: {
        type: String,
        max:2,
        max:30,
    },
    description: {
        type: String,
        max:2,
        max:30,
    },
    members: [
        {
        type:Schema.Types.ObjectId,
        ref:'Candidate'
        },
    ],
    votes: {
        type: Number,
        default: 0
    },
    voters: [
        {
        type:Schema.Types.ObjectId,
        ref:'User'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Partylist', partyListSchema)