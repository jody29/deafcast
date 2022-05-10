const readingSpeed = document.querySelector('#speed')

const setSpeed = (e) => {
    e.preventDefault()

    console.log(e.target.value)

    return e.target.value
}

readingSpeed.addEventListener('change', setSpeed)