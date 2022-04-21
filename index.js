require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5500
const app = express()

const homeRoute = require('./routers/homeRoute.js')

app
.set('view engine', 'ejs')
.set('views', path.join(__dirname, 'views'))
.use(express.static(__dirname + '/public'))
.use(bodyParser.urlencoded({ extended: true }))
.use('/', homeRoute)
.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
