let express = require('express')
let {userdata,userlogin} = require('../controllers/usercontroller')
let router = express.Router()

router.post('/createuser',userdata)
router.get('/userlogin',userlogin)
//router.get('/brokerlogin',brokerlogin)
module.exports = router
