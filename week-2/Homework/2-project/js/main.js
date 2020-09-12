// Paleta de colores
const paletaDeColores = {
    blue: {
        jumbotron: '#588fbd',
        donate: '#ffa500',
        volunteer: {
            background: 'black',
            textColor: 'white'
        }
    },
    orange: {
        jumbotron: '#f0ad4e',
        donate: '#5751fd',
        volunteer: {
            background: '#31b0d5',
            textColor: 'white'
        }
    },
    green: {
        jumbotron: '#87ca8a',
        donate: 'black',
        volunteer: {
            background: '#8c9c08',
            textColor: 'white'
        }
    }
}

// funcion principal
function changeColor(color) {
    document.querySelector('.jumbotron').style.backgroundColor = paletaDeColores[color].jumbotron
    const buttons = document.querySelectorAll('.buttons a')
    const donateButton = buttons[0]
    const volunteerButton = buttons[1]
    donateButton.style.backgroundColor = paletaDeColores[color].donate
    volunteerButton.style.backgroundColor = paletaDeColores[color].volunteer.background
    volunteerButton.style.color = paletaDeColores[color].volunteer.textColor
}

function validateEmailAddress(event) {
    event.preventDefault()
    const emailField = document.getElementById('exampleInputEmail1')
    emailField.style.backgroundColor = 'white'
    if (!emailField.value.includes(`@`)) {
        emailField.style.backgroundColor = `red`
    }
}

function validateFieldsLength(event) {
    event.preventDefault()
    const fields = document.querySelectorAll('form input, form textarea')
    fields.forEach(
        field => {
            field.style.background = 'white'
            if (field.value.length === 0) {
                field.style.background = 'red'
            }
        }
    )
}

// bindings
document.getElementById('blueBtn').addEventListener('click', () => changeColor('blue'))
document.getElementById('orangeBtn').addEventListener('click', () => changeColor('orange'))
document.getElementById('greenBtn').addEventListener('click', () => changeColor('green'))

const submitButton = document.querySelector('form button')
submitButton.addEventListener('click', event => validateEmailAddress(event))
submitButton.addEventListener('click', event => validateFieldsLength(event))

