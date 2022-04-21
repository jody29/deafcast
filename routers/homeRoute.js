const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')

router
.get('/', (req, res) => {
    res.render('pages/index')
})

module.exports = router