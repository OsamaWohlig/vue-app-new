const express = require('express')
const app = express()
const {getStorage,ref, deleteObject} = require('firebase/storage')

const productModel = require('../model/products')

app.use(express.json())

const deleteProduct = async(req,res) => {
    try {
        const storage = getStorage();
        // const deleteRef = ref(storage, req.body.image);
        // await deleteObject(deleteRef)
        const result = await productModel.findByIdAndDelete(req.params.id)
        if(!result){
            return res.status(404).send('some error occured')
        }
        return res.status(200).send('Deleted Successfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = deleteProduct