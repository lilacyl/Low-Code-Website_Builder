const express = require('express')
const multer = require('multer')
const path = require('path')

const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, 'frontend/public/')
    },
    filename(req, file, callback){
        callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) // format the file name
    }
})

function checkFileType(file, callback){
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype){
        return callback(null, true) // null error
    }else{
        callback('Images only!') // return an error
    }
}

const upload = multer({
    storage,
    fileFilter: function(req, file, callback){
        checkFileType(file, callback)
    }
})

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`) // path
})


module.exports = router