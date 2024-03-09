const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const {mergePdfs}  = require('./merge.js')

const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})