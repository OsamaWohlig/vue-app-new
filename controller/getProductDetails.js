const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
const productModel = require('../model/products')

app.use(express.json())

const getProductDetails = async(req,res) => {
    try {
        const data = await productModel.find({_id:req.params.id})
        if(!data){
            return res.status(404).send('some error occured')
        }
        return res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = getProductDetails