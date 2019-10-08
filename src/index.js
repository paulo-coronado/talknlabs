const path = require('path')
const cors = require('cors')
const express = require('express')
const multer = require('multer')
const networkService = require('./blockchain/network-service-IBP')
var bodyParser = require('body-parser')

// Initialize Express
const app = express()
const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Path for public content
app.use(express.static(path.join(__dirname, '../public')))

app.use(cors())

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
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'))

app.post('/send', async function (req, res) {
    var id = req.body.id
    var timestamp = req.body.timestamp

    console.log('ID:', id)
    console.log('Timestamp:', timestamp)

    var contrato = await networkService.getGatewayContract('vsc-acme')

    contrato.submitTransaction("createPass", id, timestamp)
});

app.listen(port, async () => {
    console.log('Server is up on port ' + port)
    await networkService.criarIdentidade('vsc-acme', 'MlKfcp71vLouNI3Y')
    // var contrato = await networkService.getGatewayContract('vsc-acme')
    // console.log(contrato)
    // contrato.submitTransaction("createPass", "tID", "tTimestamp")
})

