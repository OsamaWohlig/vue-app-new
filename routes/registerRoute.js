const express = require('express')
const router = express.Router()
const register = require('../controller/register')

const registerRoute = router.post('/register',register)

module.exports = registerRoute

