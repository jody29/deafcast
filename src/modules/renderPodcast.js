import fetchData from "./fetchPodcast.js"

const podcast = document.querySelector('#podcast')

const renderPodcast = () => {
    fetchData()
    .then(data => {
        console.log(data)
        data.transcript.forEach(part => {
            const item = document.createElement('div')

            if (part.person === 'Vasilis') {
                item.classList.add('host')
            } else {
                item.classList.add('guest')
            }

            let i = 0
            let speed = 50

            setInterval(() => {
                if (i < part.words.length) {
                    const word = document.createElement('p')
                    word.textContent = part.words[i].word
                    item.appendChild(word)
                    i++
                }
            }, speed * part.words[i].word.length )
            
            if (podcast.innerHTML === '') {
                podcast.appendChild(item)
            }
        })
    })
}

export default renderPodcast