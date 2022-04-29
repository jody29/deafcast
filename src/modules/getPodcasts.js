const got = require('got')
const fetch = require('node-fetch')
const jsdom = require('jsdom')
const {
    JSDOM
} = jsdom

const content = async () => {
    let links = {}

    const response = await fetch('../data/links.json').then(res => res.json)

    console.log(response)

    links['podcasts'] = dom.window.document.querySelectorAll('.u-url')

    return links
}

module.exports = {
    content
}