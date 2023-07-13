const express = require('express')
const app = express()
const sgmail = require('@sendgrid/mail')
const ejs = require('ejs')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const productModel = require('../model/products')
const usersModel = require('../model/user')

const addProduct = async(req,res) => {
    try {
        const productData = new productModel(req.body)
        const result = await productData.save()
        const imgUrl = req.body.imageData.downloadUrl
        if(result){
            ejs.renderFile(__dirname+'/email.ejs',{imgUrl},(err,data)=>{
              if(err){
                console.log(err)
              }else{
                const emailhtml = data
                const msg = {
                    to: 'osamap4026@gmail.com', // Change to your recipient
                    from: 'pateljaved26151@gmail.com', // Change to your verified sender
                    subject: 'new product',
                    text: 'New product added',
                    html: emailhtml,
                }
                sgmail.send(msg)
                    .then((res)=>console.log('sent',res))
                    .catch(err=>console.log(err))
                res.status(200).send('product added successfully')
              }
            })
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = addProduct