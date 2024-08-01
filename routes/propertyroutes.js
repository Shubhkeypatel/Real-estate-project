let express = require('express')
let {privatepropertydata,schmepropertiesdata,comercialpropertydata,getprivate,updateOnec }
 = require('../controllers/propertycontroller')
let router = express.Router()

router.post('/createprivateproperty',privatepropertydata)
router.post('/createschemeproperties',schmepropertiesdata)
router.post('/createcomercialproperty',comercialpropertydata)
router.get('/getprivate',getprivate )
router.put('/updateOnec',updateOnec)
module.exports = router
