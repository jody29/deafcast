import fetchData from "./fetchPodcast.js"

const podcast = document.querySelector('#podcast')

const renderPodcast = () => {
    fetchData()
    .then(data => {
        console.log(data)
        data.transcript.forEach(part => {
            const item = document.createElement('li')
            let i = 0
            let speed = 50

            setInterval(() => {
                if (i < part.words.length) {
                    item.insertAdjacentText('beforeend', part.words[i].word + ' ')
                    i++
                }
            }, speed * part.words[i].word.length )
            
            podcast.appendChild(item)
        })
    })
}

export default renderPodcast