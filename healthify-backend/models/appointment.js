const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    appointmentTime: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pets',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VDoctor',
        required: true
    }
})

const appointmentModel = mongoose.model('Appoitment', appointmentSchema)


module.exports = appointmentModel