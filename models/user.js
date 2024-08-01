const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    usermobilenumber:{
        type:Number,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    userpassword:{
        type:String,
        required:true
    },
    userage:{
      type:String,
      require:true
    },
    usergender:{
      type:String,
      require:true
    },
    useroccupation:{
      type:String,
      require:true
    }
})
module.exports = mongoose.model('user',userSchema)

