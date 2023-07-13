const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    brand:String,
    imageData:Object
})

const productModel = mongoose.model('product',productSchema)

module.exports = productModel