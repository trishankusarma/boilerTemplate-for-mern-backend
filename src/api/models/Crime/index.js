const mongoose = require('mongoose')
const { Schema , model } = mongoose

const crimeSchema = Schema({
    event:{
        type:String,
        trim:true,
        required:true
    },
    date : {
        type:Date,
        required: true 
    }
})

module.exports = Crime = model('Crime',crimeSchema)