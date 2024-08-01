const {privatedb,schemedb,comdb} = require('../models/property')
const mongoose = require ('mongoose')

//add private property
let privatepropertydata = (req,res)=>{
    let privateproperty = new privatedb({
        p_fulladdress : req.body.p_fulladdress,
        p_carpetarea: req.body.p_carpetarea,
        p_rooms: req.body.p_rooms,
        p_owner: req.body.p_owner,
        p_description: req.body.p_description,
      //  p_image: req.body.p_image
    })
    privateproperty.save().then(()=>{
        res.send({"message":'private property added '})
    }) 
    .catch((err)=>{
        console.log(err);
        res.send({"message":'error'})
    })
}

//add scheme property
let schmepropertiesdata = (req,res)=>{
    let schemeproperties = new schemedb({
        s_fulladdress:req.body.s_fulladdress,
        s_carpetarea:req.body.s_carpetarea,
        s_rooms:req.body.s_rooms,
        s_facilities:req.body.s_facilities,
        s_price:req.body.s_price,
        s_builder:req.body.s_builder,
        s_description:req.body.s_description,
        s_image:req.body.s_image
    })
    schemeproperties.save().then(()=>{
        res.send({"message":'scheme property added '})
    }) 
    .catch((err)=>{
        console.log(err);
        res.send({"message":'error'})
    }) 
}

//commercial property
let comercialpropertydata = (req,res)=>{
    let comercialproperty = new comdb({
        c_address: req.body.c_address,
        c_carpetarea:req.body.c_carpetarea,
        c_type:req.body.c_type,
        c_facilities:req.body.c_facilities,
        c_price:req.body.c_price,
        c_buldergroup:req.body.c_buldergroup,
        c_description:req.body.c_description,
        //c_images:req.body.c_images
    })
    comercialproperty.save().then(()=>{
            res.send({"message":"commercial property has been added"})
    })
    .catch((err)=>{
        console.log(err);
        res.send ({"message":"error"})
    })
}

//getproduct

const getprivate  = (req,res)=>{
    comdb.find()
    .then((data)=>{
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

//update_product

let updateOnec = (req,res)=>{
    comdb.updateOne({c_carpetarea
        :req.query.c_carpetarea
    },req.body)
    .then((data)=>{
        console.log('Data',data);
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

module.exports = {privatepropertydata,schmepropertiesdata,comercialpropertydata,getprivate,updateOnec}
