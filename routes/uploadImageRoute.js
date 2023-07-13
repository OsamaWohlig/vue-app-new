const express = require('express')
const router = express.Router()
const uploadImage = require('../controller/uploadImage')

const uploadImageRoute = router.use('/uploadImage',uploadImage)

module.exports = uploadImageRoute

