import fetchData from "./fetchPodcast.js"

const podcast = document.querySelector('#podcast')

const renderPodcast = () => {
    podcast.innerHTML = ''

    fetchData()
    .then(data => {
        data.transcript.forEach(obj => {
            const item = document.createElement('div')
            const text = document.createElement('span')
            const person = document.createElement('h3')

            person.textContent = obj.person

            item.appendChild(person)
            item.appendChild(text)

            if (obj.person === 'Vasilis') {
                item.classList.add('host')
            } else {
                item.classList.add('guest')
            }

            obj.words.forEach(part => {
                const word = document.createElement('p')
                word.classList.add(part.emotion)
                word.textContent = part.word

                text.appendChild(word)
            })

            podcast.appendChild(item)
        })
    })
}

export default renderPodcast