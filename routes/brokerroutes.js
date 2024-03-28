let express = require('express')
let {brokerdata,brokerlogin} = require('../controllers/brokercontroller')
let router = express.Router()

router.post('/createbroker',brokerdata)
router.get('/brokerlogin',brokerlogin)
module.exports = router
