const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
app.use(express.urlencoded({extended:false}))


const authUser = async(req,res,next) => {
    try {
        const headers = req.headers['authorization']
        const isAuthenticated = jwt.verify(headers,process.env.JWT_KEY)
        if(!isAuthenticated)return res.send('not authorized')
        next()
    } catch (error) {
        return res.send(error)
    }
}

module.exports = authUser;