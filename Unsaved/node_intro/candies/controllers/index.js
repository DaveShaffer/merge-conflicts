var express = require('express')
var router = express.Router()
var candyRoutes = require('./candies')

router.use('/candies', candyRoutes)

module.exports = router
