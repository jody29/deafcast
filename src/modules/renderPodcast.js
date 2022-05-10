import fetchData from "./fetchPodcast.js"

const podcast = document.querySelector('#podcast')

const renderPodcast = (readingSpeed) => {
    let speed = readingSpeed

    podcast.innerHTML = ''

    fetchData()
    .then(data => {
        data.transcript.forEach(part => {
            const item = document.createElement('div')
            const text = document.createElement('span')
            const person = document.createElement('h3') 

            person.textContent = part.person

            item.appendChild(person)
            item.appendChild(text)

            if (part.person === 'Vasilis') {
                item.classList.add('host')
            } else {
                item.classList.add('guest')
            }

            let i = 0

            setInterval(() => {
                if (i < part.words.length) {
                    const word = document.createElement('p')
                    word.textContent = part.words[i].word
                    text.appendChild(word)
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