const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
     doctorAge: {
        type: Number,
        required: true
    },
     password: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true, 
    },
    mobileNum: {
         type: Number,
        required: true,
    },
    timings: {
         type: String,
        required: true,
    },
    scheduledAppointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
})

const doctorModel = mongoose.model('VDoctor', doctorSchema);

module.exports = doctorModel;