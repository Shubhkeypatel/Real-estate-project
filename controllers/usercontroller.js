const user = require('../models/user')
const userSchema=require('../models/user')
const mongoose = require ('mongoose')

//user registration
let userdata = (req,res)=>{
  let user1 = new user({
    "username":req.body.username,
    "usermobilenumber":req.body.usermobilenumber,
    "useremail":req.body.useremail,
    "userpassword":req.body.userpassword,
    "userage":req.body.userage,
    "usergender":req.body.usergender,
    "useroccupation":req.body.useroccupation
  })
  user1.save().then(()=>{
    res.send({"message":'user has been created '})
}) 
.catch((err)=>{
    console.log(err);
    res.send({"message":'user not created'})
})
}

//user login
let userlogin = (req,res)=>{
  let password = req.body.password
  user.findOne({name :"Mit"})
  .then((data)=>{
      if(password != data.password){
          res.send({"message":"password is incorrect"})
      }
      else{
         // const token = jwt.sign({broker: data.broker_name,role:'broker'},'10')
          res.send({message:"user logged in",/*token: token*/})
      }
      
   }).catch((err)=>{
      console.log(err);
      res.send({"message":"user not found"})
  })

}
module.exports = {userdata,userlogin}