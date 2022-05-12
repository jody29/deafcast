const fetchData = async () => {
    const podcast = await fetch('./links.json') // fetch
    .then(res => res.json())
    .then(data => {
        return data
    })

    return podcast
}

export default fetchData