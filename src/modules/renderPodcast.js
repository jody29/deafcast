import fetchData from "./fetchPodcast.js"

const podcast = document.querySelector('#podcast')

const renderPodcast = (readingSpeed, index, done) => {
    let speed = readingSpeed

    fetchData()
    .then(data => {
        const item = document.createElement('div')
        const text = document.createElement('span')
        const person = document.createElement('h3') 

        person.textContent = data.transcript[index].person

        item.appendChild(person)
        item.appendChild(text)

        if (data.transcript[index].person === 'Vasilis') {
            item.classList.add('host')
        } else {
            item.classList.add('guest')
        }

        let i = 0

        let timer = setInterval(() => {
            if (i < data.transcript[index].words.length) {
                const word = document.createElement('p')
                word.classList.add(data.transcript[index].words[i].emotion)
                word.textContent = data.transcript[index].words[i].word
                text.appendChild(word)
                i++
            } else {
                clearInterval(timer)
                done()
            }
        }, speed * data.transcript[index].words[i].word.length )

        
            
        podcast.appendChild(item)
    })
}

export default renderPodcast