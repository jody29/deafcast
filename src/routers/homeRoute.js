const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const { content } = require('../modules/getPodcasts.js')
const links = require('../data/links.json')
const fs = require('fs')


router
.get('/', async (req, res) => {
    const date = new Date().getHours()

    const greeting = () => {
        if (date >= 6 && date < 12) {
            return 'Goedemorgen'
        } else if (date >= 12 && date < 18) {
            return 'Goedemiddag'
        } else if (date >= 18 && date < 0) {
            return 'Goedenavond'
        } else if (date >= 0 && date < 6) {
            return 'Goedenacht'
        }
    }

    const data = JSON.parse(fs.readFileSync('./src/data/links.json'))
    
    res.render('pages/index', {
        greeting: greeting(),
        data
    })
})
.get('podcast/:id', (req, res) => {
    console.log(req.params)
})

module.exports = router

// https://vasilis.nl/gbi/