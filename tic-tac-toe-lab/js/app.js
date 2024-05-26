

let board;
let turn;
let winner;
let tie;

const squareElements = document.querySelectorAll('.sqr');

const messageElement = document.querySelector('#message');

function init() { 
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
}

window.onload = init();

function render() {
    updateBoard();
    updateMessage();
};

function updateBoard() {
    const squares = document.querySelectorAll('.sqr');
    board.forEach((cell, index) => {
        squares[index].textContent = cell;
    });
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageElement.textContent = `Its ${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageElement.textContent = "It's a tie!";
    } else {
        messageElement.textContent = `Congratulations`;
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function handleClick(event) {
    const clickedElement = event.target;
    const squareIndex = parseInt(event.target.textContent);
};

squareElements.forEach((squareElement) => {

    squareElement.addEventListener('click', handleClick);
});
