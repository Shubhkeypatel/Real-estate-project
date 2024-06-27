const mongoose = require('mongoose')
let privatepropertyschema = mongoose.Schema({
    p_fulladdress:{
        type:String,
        require:true
    },
    p_carpetarea:{
        type:String,
        require:true
    },
    p_rooms:{
        type:String,
        require:true
    },
    p_owner:{
        type:String,
        require:true
    },
    p_description:{
        type:String,
        require:true
    },
    //p_image:{
      //  type:String,
        //require:true
    //}

})

let scheme_propertiesschema = mongoose.Schema({
    s_fulladdress:{
        type:String,
        require:true
    },
    s_carpetarea:{
        type:String,
        require:true
    },
    s_rooms:{
        type:String,
        require:true
    } ,
    s_facilities:{
        type:String,
        require:true
    } ,
    s_price:{
        type:String,
        require:true
    } ,
    s_builder:{
        type:String,
        require:true
    } ,
    s_description:{
        type:String,
        require:true
    },
    //s_image:{
      //  type:String,
        //require:true
    //}
})

//comercial property
let comercialpropertyschema = mongoose.Schema({
    c_address :{
        type:String,
        require: true
    },
    c_carpetarea: {
        type:String,
        require:true
    },
    c_type:{
        type:String,
        require:true
    },
    c_facilities:{
        type:String,
        require:true
    },
    c_price:{
        type:String,
        require:true
    },
    c_buldergroup:{
        type:String,
        require:true
    },
    c_description:{
        type:String,
        require:true
    },
   /* c_images:{
        type:String,
        require:true

    }*/
})

const privatedb=mongoose.model('privateproperty',privatepropertyschema)
const schemedb=mongoose.model('schemeproperties',scheme_propertiesschema)
const comdb=mongoose.model('comercialproperty',comercialpropertyschema)
module.exports = {privatedb,schemedb,comdb}
//module.exports = mongoose.model('property',privatepropertyschema)
