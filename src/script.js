import renderPodcast from "./modules/renderPodcast.js";

const readingSpeed = document.querySelector('#speed')
const currentSpeed = document.querySelector('#currentSpeed')
const startPodcast = document.querySelector('#startPodcast')
const podcast = document.querySelector('#podcast')
const podcastCont = document.querySelector('#podcastCont')

let scrollRate = 30
let scrollInterval 

podcastCont.classList.add('hidden')

readingSpeed.addEventListener('change', (e) => {
    scrollRate = e.target.value
    
    if (scrollInterval) {
        clearInterval(scrollInterval)

        scrollInterval = setInterval(scrollUl, scrollRate)
    }
})

startPodcast.addEventListener('click', () => {
    podcastCont.classList.remove('hidden')

    podcastCont.scrollIntoView({ behavior: "smooth" })
    renderPodcast()
    setTimeout(()=>{
        scrollUl_init()
    },2000)
})

window.addEventListener('load', () => {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual'
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0)
        }
    }
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


