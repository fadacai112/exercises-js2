// Write your code here
const img = document.getElementById('slideshow')
const p = document.getElementById('contador')
const timerInput = document.getElementById('timer')

const colorArray = ['cyan', 'pink', 'yellow']
const imagesLength = 3;
let intervalId = -1;
let index = 0; // `img/bob${index}.jpeg`

const nextImage = () => {
    index++
    if (index >= imagesLength) {
        index = 0
    }
    img.src = `img/bob${index}.jpeg`
    img.style.border = `10px solid ${colorArray[index]}`
    p.innerText = index
}
const backImage = () => {
    index--
    if(index < 0) {
        index = imagesLength - 1
    }
    img.src = `img/bob${index}.jpeg`
    img.style.border = `10px solid #${index}${index}${index}`
    p.innerText = index
}

function getImageTimer() {
    let timer = -1;
    if (timerInput.value <= 0) {
        timer = 1
    } else {
        timer = timerInput.value
    }
    timer *= 1000
    return timer
}

document.getElementById('auto-back').addEventListener('click', _event => {
    clearInterval(intervalId)
    intervalId = setInterval(() => backImage(), getImageTimer())
})

document.getElementById('back').addEventListener('click', _event => backImage())
document.getElementById('stop').addEventListener('click', _event => clearInterval(intervalId))
document.getElementById('forward').addEventListener('click', _event => nextImage())

document.getElementById('auto-forward').addEventListener('click', _event => {
    clearInterval(intervalId)
    intervalId = setInterval(() => nextImage(), getImageTimer())
})
