const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    testReport: {
        type: String,

    },
    doctorReport: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VDoctor',
    }
    }, {timestamps: true})

const Result = mongoose.model('Result', resultSchema)

module.exports = Result