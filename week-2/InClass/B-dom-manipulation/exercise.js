/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1. all the "p" element nodes of the document,
var paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

// 2. the first div element node
var firstDiv = document.querySelector('div')
console.log(firstDiv)

// 3. the element with id "jumbotron-text"
var jumbotronDiv = document.querySelector('#jumbotron-text')
var jumbotronDiv = document.getElementById('jumbotron-text')
console.log(jumbotronDiv)

// 4. all the "p" elements of contained inside the .primary-content element node
var primaryContentP = document.querySelectorAll('.primary-content p')
console.log(primaryContentP)

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function greetings() {
    alert("Thanks for visiting Bikes for Refugees!");
}
function greetingsConsole() {
    console.log("Thanks for visiting Bikes for Refugees!");
}
var button = document.getElementById('alertBtn');
button.addEventListener('click', greetings);
button.addEventListener('click', greetingsConsole);
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// LOOK AT TASK 5

/*
Task 4
======

When a user clicks the ‘Add some text’ button,
a new paragraph should be added inside the section that says “LEARN MORE”
*/

function addSomeText(newText) {
    var paragraph = document.createElement('p')
    paragraph.innerText = newText

    var article = document.createElement('article')
    article.classList.add('article')
    article.appendChild(paragraph)

    var articles = document.querySelector('#mainArticles')
    articles.appendChild(article)
}
var newTextButton = document.querySelector('#addTextBtn')
newTextButton.addEventListener('click', addSomeText)
/*
Task 5
======

When the 'Larger links!' button is clicked,
the text of all links on the page should increase.
*/
function largerLinks() {
    var anchors = document.querySelectorAll('a[href]')
    anchors.forEach(
        anchor => {
            var fontSize = parseInt(anchor.style.fontSize)
            fontSize++
            anchor.style.fontSize = `${fontSize}em`
        }
    )
}
var largerLinksButton = document.querySelector('#largerLinksBtn')
largerLinksButton.addEventListener('click', largerLinks)
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked,
get the text inside the input field and
create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

function add() {
    var inputText = document.querySelector('#content input')
    var text = inputText.value
    addSomeText(text)
    inputText.value = ''
}
var addButton = document.getElementById('addArticleBtn')
addButton.addEventListener('click', add)

// Validaciones
var inputText = document.querySelector('#content input')
inputText.placeholder = 'Campo obligatorio'

function validation() {

    var text = inputText.value

    // Volver a caso limpio
    inputText.style.border = ''
    var currentAlerta = document.getElementById('alerta')
    if (currentAlerta) {
        currentAlerta.remove()
    }

    if (!text) {
        inputText.style.border = `1px solid #AA0000`
    }
}
addButton.addEventListener('click', validation)

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

var colores = [
    'cyan', // 0
    'red',  // 1
    'green',// 2
    'blue', // 3
    'yellow'// 4
]

function changeBackgroundColour() {
    var body = document.querySelector('body');
    var currentColour = body.style.backgroundColor          // string
    var currentColourIndex = colores.indexOf(currentColour) // 0, 1, ...
    currentColourIndex++

    if (currentColourIndex >= colores.length) {
        currentColourIndex = 0
    }
    body.style.backgroundColor = colores[currentColourIndex];
}
var buttonChangeColour = document.getElementById('bgrChangeBtn');
buttonChangeColour.addEventListener('click', changeBackgroundColour);

// Extra - ANIMATE

// Create floating square
var floatingSquare = document.createElement('div')
floatingSquare.style.backgroundColor = '#FF0000'
floatingSquare.style.height = '3em'
floatingSquare.style.width = '3em'
floatingSquare.style.top = 0
floatingSquare.style.left = 0
floatingSquare.style.position = 'absolute'

var body = document.querySelector('body')
body.appendChild(floatingSquare)

var pos = 0;
var id = 0;
var isAnimated = false;

function frame() {
    console.log(`frame`)
    if (pos == 350) {
        // clearInterval(id)
        pos = 0
    } else {
        pos++
        floatingSquare.style.top = `${pos}px`
        floatingSquare.style.left = `${pos}px`
    }
}

var animateButton = document.getElementById('animate');
animateButton.addEventListener('click', () => {
    isAnimated = !isAnimated
    if (isAnimated) {
        isAnimated = true
        id = setInterval(frame, 10)
    } else {
        clearInterval(id)
    }
})
