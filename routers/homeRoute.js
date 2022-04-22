const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')

router
.get('/', (req, res) => {
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
    
    res.render('pages/index', {
        greeting: greeting()
    })
})

module.exports = router