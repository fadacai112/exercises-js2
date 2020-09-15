/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or are not numeric, show a warning message

================
*/

const displayTemperature = temperature => {
    const jumboTron = document.createElement('div')
    const h3 = document.createElement('h3')
    jumboTron.appendChild(h3)

    const main = document.getElementById('main')
    main.appendChild(jumboTron)

    h3.innerText = `${temperature}°`
};

const displayError = () => {
    const jumboTron = document.createElement('div')
    const h3 = document.createElement('h3')
    jumboTron.appendChild(h3)

    const main = document.getElementById('main')
    main.appendChild(jumboTron)

    h3.innerText = `Los campos rellenados no son validos`
};

const getButton = document.getElementById('get-button');
getButton.addEventListener('click', () => {

    const latitude = document.getElementById('latitude').value
    const longitude = document.getElementById('longitude').value

    // Validar que latitde y longitud existen y los puedo parsear a float
    if (latitude && longitude && parseFloat(latitude) && parseFloat(longitude)) {
        // PROMISE function
        fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`) // nombre
        .then(response => response.json())                                   // then, que hacer con la información
        .then(json => {
            const temperature = json.main.temp
            displayTemperature(temperature)
        })
        .catch(error => console.error(error))                                // catch, que hacer en caso de error
    } else {
        displayError()
    }
});

function addProduct(product) {
    const body = document.querySelector(`body`)
    const productDiv = document.createElement(`div`)
    const productImage = document.createElement(`img`)
    productImage.src = product.image
    productImage.style.width = `200px`

    productDiv.style.margin = '20px'

    const titleH3 = document.createElement(`h3`)
    titleH3.innerText = product.title

    const priceParagraph = document.createElement(`p`)
    priceParagraph.innerText = product.price

    productDiv.appendChild(productImage)
    productDiv.appendChild(titleH3)
    productDiv.appendChild(priceParagraph)
    body.appendChild(productDiv)
}

const buttonGetItems = document.createElement(`button`)
buttonGetItems.innerText = `Get shopping items`

const body = document.querySelector(`body`)
body.appendChild(buttonGetItems)
buttonGetItems.addEventListener('click', () => {
    const url = `https://fakestoreapi.com/products`
    fetch(url)
    .then(response => response.json())
    .then(products => {
        products.forEach(
            product => addProduct(product)
        )
        console.log(products)
    })
    .catch(error => console.error(error))
})