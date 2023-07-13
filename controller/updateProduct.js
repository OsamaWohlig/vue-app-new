const express = require('express')
const app = express()

const productModel = require('../model/products')

const updateProduct = async(req,res) => {
    try {
        const result = await productModel.findByIdAndUpdate(req.params.id,req.body)
        console.log(req.body)
        console.log(result)
        if(result){
            res.status(200).send('product updated successfully')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = updateProduct