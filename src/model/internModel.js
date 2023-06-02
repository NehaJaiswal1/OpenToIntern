
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const interModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true

    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    mobile: {
        type: String,
        required: true

    },
    collegeId: {
        type: ObjectId,
        ref: "college",

    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamp: true
    })

module.exports = mongoose.model('intern', interModel)