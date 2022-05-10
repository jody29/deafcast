const fetchData = () => {
    const podcast = fetch('../../data/links.json')
    .then(res => res.json())
    .then(data => {
        return data
    })

    return podcast
}

export default fetchData