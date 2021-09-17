const mongoose = require('mongoose')
const { Schema , model } = mongoose

const donationSchema = Schema({
    name:{
        type:String,
        trim:true,
        required:true
    }
})

module.exports = Donation = model('Donation',donationSchema)