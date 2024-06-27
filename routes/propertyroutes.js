let express = require('express')
let {privatepropertydata,schmepropertiesdata,comercialpropertydata} = require('../controllers/propertycontroller')
let router = express.Router()

router.post('/createprivateproperty',privatepropertydata)
router.post('/createschemeproperties',schmepropertiesdata)
router.post('/createcomercialproperty',comercialpropertydata)
module.exports = router
