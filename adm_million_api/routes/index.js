var express = require('express')
var router = express.Router()

var HomeController = require('../app/controllers/HomeController')
var AdmController = require('../app/controllers/AdmController')

/* GET home page. */
router.get('/', HomeController.index)
router.get('/adm.json', AdmController.index)

module.exports = router
