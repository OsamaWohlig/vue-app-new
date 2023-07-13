const express = require('express')
const router = express.Router()
const getProductDetails = require('../controller/getProductDetails')

const getProductDetailsRoute = router.use('/productDetails/:id',getProductDetails)

module.exports = getProductDetailsRoute