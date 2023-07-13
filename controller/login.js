const express = require('express')
const app = express()
const User = require('../model/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const loginUser = async(req,res) => {
    const userData = await User.findOne({username:req.body.username})
    if(!userData) return res.send('no data')
    const payload = {
        username:userData.username,
        password:userData.password
    }
    console.log(payload)
    const token = jwt.sign(payload,process.env.JWT_KEY)
    return res.send({token,username:userData.username})
}

module.exports = loginUser