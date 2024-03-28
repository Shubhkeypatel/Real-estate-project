const broker = require('../models/broker')
const brokerSchema = require('../models/broker')
const mongoose = require ('mongoose')

//broker registration
let brokerdata = (req,res)=>{
    let broker1 = new broker({
        "name": req.body.name,
        "mobilenumber": req.body.mobilenumber,
        "email":req.body.email,
        "password":req.body.password
    })
    broker1.save().then(()=>{
        res.send({"message":'broker has been created '})
    }) 
    .catch((err)=>{
        console.log(err);
        res.send({"message":'broker not created'})
    })
}


//broker login
let brokerlogin = (req,res)=>{
    let password = req.body.password
    broker.findOne({name :"Ajay"})
    .then((data)=>{
        if(password != data.password){
            res.send({"message":"password is incorrect"})
        }
        else{
           // const token = jwt.sign({broker: data.broker_name,role:'broker'},'10')
            res.send({message:"broker logged in",/*token: token*/})
        }
        
     }).catch((err)=>{
        console.log(err);
        res.send({"message":"broker not found"})
    })

}

module.exports = {brokerdata,brokerlogin}