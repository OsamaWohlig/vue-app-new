const express = require('express')
const app = express()
const {getStorage,ref,uploadString,getDownloadURL} = require('firebase/storage')
const {uuid} = require('uuidv4')

const uploadImage = async(req,res) => {
    try {
        const uniqueId = uuid()
        const storage = getStorage();
        const storageRef = ref(storage, `/test-images/${uniqueId}`);

        const check = await uploadString(storageRef,req.body.image.data,'data_url')
        if(!check) return res.send('error')
        const downloadRef = await getDownloadURL(check.ref)
        if(!downloadRef) return res.send('error')
        const data = {
            downloadUrl:downloadRef,
            imageData:req.body.imageData,
            imagePath:`/test-images/${uniqueId}`
        }
        return res.send(data)

    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = uploadImage