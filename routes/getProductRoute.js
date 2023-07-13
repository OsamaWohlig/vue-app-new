const express = require('express')
const router = express.Router()
const getProduct = require('../controller/getProducts')

const getProductRoute = router.use('/',getProduct)

module.exports = getProductRoute

