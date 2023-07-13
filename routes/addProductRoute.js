const express = require('express')
const router = express.Router()
const addProduct = require('../controller/addProduct')

const addProductRoute = router.use('/',addProduct)

module.exports = addProductRoute

