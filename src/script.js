import renderPodcast from "./modules/renderPodcast.js";

const readingSpeed = document.querySelector('#speed')
const currentSpeed = document.querySelector('#currentSpeed')

readingSpeed.addEventListener('change', (e) => {
    currentSpeed.textContent = e.target.value

    renderPodcast(e.target.value)
})

