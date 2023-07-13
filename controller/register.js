const express = require('express')
const app = express()
const userModel = require('../model/user')

const register = async(req,res) => {
    try {
        const userData = new userModel(req.body)
        const response = userData.save()
        if(!response)return res.send('error')
        return res.send('success')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = register