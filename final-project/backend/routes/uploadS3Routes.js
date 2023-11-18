const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/images', 
    upload.single('image'), 
    function (req, res, next) {
        res.send(`/${req.file.path}`);
  });


module.exports = router