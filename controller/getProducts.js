const express = require('express')
const app = express()

const productModel = require('../model/products')

app.use(express.json())

const getProduct = async(req,res) => {
    try {
        const data = await productModel.find()
        if(!data){
            res.status(404).send('some error occured')
        }
        return res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = getProduct