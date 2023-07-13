const express = require('express')
const router = express.Router()
const deleteProduct = require('../controller/deleteProduct')

const deleteProductRoute = router.use('/deleteProduct/:id',deleteProduct)

module.exports = deleteProductRoute

