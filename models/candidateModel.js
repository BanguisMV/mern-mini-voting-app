const mongoose = require('mongoose')
const { Schema } = mongoose;

const candidatesSchema = new Schema({
    
    position: {
        type: String,
        required:true,
        max:2,
        max:100
    },
    firstName: {
        type: String,
        max:2,
        max:100,
    },
    lastName: {
        type: String,
        max:2,
        max:100,
    },
    yearLevel: {
        type: Number,
    },
    images: {
        type: String,
    },
    partyList: {
        type:Schema.Types.ObjectId,
        ref:'Partylist',
    },
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

module.exports = mongoose.model('Candidate', candidatesSchema)