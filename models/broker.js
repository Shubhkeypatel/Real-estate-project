const mongoose = require('mongoose')
let brokerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('broker',brokerSchema)

