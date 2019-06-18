const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
    },
    signDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Customer', customerSchema)