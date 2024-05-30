
let winner;
let number;
let selectedNumber;

const squareElements = document.querySelectorAll('.sqr');
const numberElements = document.querySelectorAll('.num');
const messageElement = document.querySelector('#message');
const displayElement = document.querySelector ('.display');

function init() {
    board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    render();
};

window.onload = init();

// const resetButton = document.querySelector('#reset')
// resetButton.addEventListener('click', init);

function render() {
    updateBoard();
};

function updateBoard() {
    const squares = document.querySelectorAll('.sqr');
    board.forEach((cell, index) => {
        squares[index].textContent = cell;
    });
}

numberElements.forEach((numberElement) => {
    numberElement.addEventListener('click', () => {
        selectedNumber = numberElement.innerText;
    })
});

squareElements.forEach((squareElement) => {
    squareElement.addEventListener('click', () => {
           if (selectedNumber && !squareElement.innerText) {
            squareElement.innerText = selectedNumber;
        } 

    });
});

//NEED TO ASK HIM ABOUT THIS CONDITION - how to make it to keep the original ones there













// function handleClick(event) {
//     if (event.target.classList.contains('num')) {
//         number = event.target.innerText;
//         displayElement.textContent = number;
//     }
// };





// window.onload = init();

// function render() {
//     updateBoard();
//     updateMessage();
// };



// // KEEP THESE
// squareElements.forEach((squareElement) => {
// squareElement.addEventListener('click', handleClick);
// });

