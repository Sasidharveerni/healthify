const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
    petName: {
        type: String,
        required: true,
    },
    petAge: {
         type: Number,
        required: true,
    },
    password: {
         type: String,
        required: true,
    },
    email: {
         type: String,
        required: true,
        unique: true
    },
    profile: {
         type: String,
        required: true,
    },
    mobile: {
         type: String,
        required: true,
    }
})

const petAccount = mongoose.model('Pets', petSchema);

module.exports = petAccount;