

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
        messageElement.textContent = `Congratulations ${turn}`;
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
    if (winner === true) {
        return;
    }
    console.log(event.target.id);
    // const clickedElement = event.target;
    const squareIndex = event.target.id;
    const squareValue = board[squareIndex];
    if (squareValue !== '') {
        alert("The square you clicked is filled");
        return;
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
    
};

function placePiece(index) {
    board[index] = turn;
}

function checkForWinner() {
    winningCombos.forEach(combo => {
        let firstValue = board[combo[0]]
        let secondValue = board[combo[1]]
        let thirdValue = board[combo[2]]
        if (firstValue !== '') {
           if (firstValue === secondValue && secondValue === thirdValue) {
            winner = true
            console.log("winner")
        } 
        }
        
    })
}

function checkForTie() {
    if (winner === true) {
        return;
    }
    board.forEach(move => {
        if (!board.includes('')) {
            tie = true;
        } 
    }) 
}

function switchPlayerTurn() {
    if (winner === true) {
        return;
    } else {
        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    }
}

squareElements.forEach((squareElement) => {
squareElement.addEventListener('click', handleClick);

});




