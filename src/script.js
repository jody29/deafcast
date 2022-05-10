import renderPodcast from "./modules/renderPodcast.js";

const readingSpeed = document.querySelector('#speed')
const currentSpeed = document.querySelector('#currentSpeed')
const startPodcast = document.querySelector('#startPodcast')

let speed = 50

currentSpeed.textContent = `1 word per ${speed}ms`

readingSpeed.addEventListener('change', (e) => {
    currentSpeed.textContent = `1 word per ${e.target.value}ms`
    speed = e.target.value
    console.log(speed)
})

startPodcast.addEventListener('click', () => {
    renderPodcast(speed)
})


