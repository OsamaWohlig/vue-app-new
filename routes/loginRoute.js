const express = require('express')
const router = express.Router()
const login = require('../controller/login')

const loginRoute = router.post('/login',login)

module.exports = loginRoute

