

let board;
let winner;
let number;
let selectedNumber;

const squareElements = document.querySelectorAll('.sqr');
const numberElements = document.querySelectorAll('.num');
const messageElement = document.querySelector('#message');
const displayElement = document.querySelector ('.display');

// const numberOne = document.getElementById('1');
// const numberTwo = document.getElementById('2');
// const numberThree = document.getElementById('3');
// const numberFour = document.getElementById('4');

// this iterates over each element in the 'square Elements' node list
                            //this is a parameter representing the current element being processed in the iteration
// squareElements.forEach((squareElement) => {
//     squareElement.addEventListener('click', handleClick);
// });

numberElements.forEach((numberElement) => {
    numberElement.addEventListener('click', () => {
        selectedNumber = numberElement.innerText;
    })
});

squareElements.forEach((squareElement) => {
    squareElement.addEventListener('click', () => {
        if (selectedNumber) {
            squareElement.innerText = selectedNumber;
        }
    });
});

// function handleClick(event) {
//     if (event.target.classList.contains('num')) {
//         number = event.target.innerText;
//         displayElement.textContent = number;
//     }
// };



// function init() { 
//     board = ['', '', '', '', '', '', '', '', ''];
//     winner = false;
//     render();
// }

// window.onload = init();

// function render() {
//     updateBoard();
//     updateMessage();
// };



// // KEEP THESE
// squareElements.forEach((squareElement) => {
// squareElement.addEventListener('click', handleClick);
// });

// const resetButton = document.querySelector('#reset')
// resetButton.addEventListener('click', init
