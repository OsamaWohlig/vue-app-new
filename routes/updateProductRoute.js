const express = require('express')
const router = express.Router()
const updateProduct = require('../controller/updateProduct')

const updateProductRoute = router.use('/updateProduct/:id',updateProduct)

module.exports = updateProductRoute

