import renderPodcast from "./modules/renderPodcast.js";

const readingSpeed = document.querySelector('#speed')
const currentSpeed = document.querySelector('#currentSpeed')
const startPodcast = document.querySelector('#startPodcast')
const podcast = document.querySelector('#podcast')

let scrollRate = 10
let scrollInterval 

currentSpeed.textContent = `1 word per ${scrollRate}ms`

readingSpeed.addEventListener('change', (e) => {
    currentSpeed.textContent = `1 word per ${e.target.value}ms`
    scrollRate = e.target.value
    console.log(scrollRate)
})

startPodcast.addEventListener('click', () => {
    podcast.scrollIntoView({ behavior: "smooth" })
    renderPodcast()
    setTimeout(()=>{
        scrollUl_init()
    },2000)
})

const scrollUl_init = () => {
    scrollInterval = setInterval(scrollUl, scrollRate)
}

const scrollUl = () => {
    if(podcast.scrollTop < (podcast.scrollHeight - podcast.offsetHeight)) {
        podcast.scrollTop = podcast.scrollTop + 1
    } else {
        podcast.scrollTop = 0
    }
}


