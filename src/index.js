const path = require('path')
const cors = require('cors')
const express = require('express')
const multer = require('multer')

// Initialize Express
const app = express()
const port = process.env.PORT || 3000

// Path for public content
app.use(express.static(path.join(__dirname, '../public')))

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // error first callback
        cb(null, './public/');
    },
    filename: function (req, file, cb) {

        // error first callback
        cb(null, file.fieldname + '.mp4')
    }
})

var upload = multer({
    storage,
    limits: {
        fileSize: 1000000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4)$/)) {
            return cb(new Error('Please upload a video (.mp4)'))
        }

        cb(undefined, true)
    }
})

app.post('/upload', upload.single('video'),
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})