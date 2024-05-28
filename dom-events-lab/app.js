
// const calculator = document.querySelector('#calculator');
// const displayElement = document.querySelector(".display");

// let num1 = '';
// let operator = '';
// let num2 = '';
// let outcome = '';
    
// calculator.addEventListener('click', (event) => {
    
//     if (event.target.classList.contains('number')) {
//         if (operator === '') {  
//             num1 = parseInt(event.target.textContent);
//             displayElement.textContent = num1
//             console.log('num1', num1);
//         } else {
//             num2 = parseInt(event.target.textContent);
//             displayElement.textContent = num2
//             console.log('num2', num2);
//         }
     
//     }
//     if (event.target.classList.contains('equals')) {
//         outcome = calculate(num1, num2, operator);
//         displayElement.textContent = outcome;
//     }

//     if (event.target.classList.contains('operator')) {
//       operator = event.target.textContent;
//       console.log(operator);
//     }
//     if (event.target.classList.contains('clear')) {
//         num1 = '';
//         operator = '';
//         num2 = '';
//         outcome = '';
//         displayElement.textContent = '';
//     }

// });

// const calculate = (num1, num2, operator) => {
//     if (operator === '+') {
//         return (num1 + num2);
//     }
//     if (operator === '-') {
//         return (num1 - num2);
//     }
//     if (operator === '*') {
//         return (num1 * num2);
//     }
//     if (operator === '/') {
//         return (num1 / num2);
//     }
// }


    




//HOW CJ DID IT

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector ('.display');

//THEN

calculator.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.classList.contains('number')) {
        if (operator === '') {
        num1 = event.target.innerText;
        num1 = num1 + event.target.innerText; //num1 += event.target.innerText will do the same
        displayElement.textContent = num1 //this displays shows the number
        } else {
            num2 += event.target.innerText;
            displayElement.textContent = num2;
        }
            // if the operator is empty = '', then num1 is the number we are trying to input
        //if not empty then num2 is the number we're trying to input
    }
    if (event.target.classList.contains('operator')) {
        if(event.target.innerText === 'C') {
            num1 = '';
            num2 = '';
            operator = '';
            result = 0;
            displayElement.textContent = '';
        } else {
        operator = event.target.innerText;
        displayElement.textContent = '';
        }
    }
    if (event.target.classList.contains('equals')) {
        result = calculate(Number(num1), Number(num2), operator);
        // '63' + '52' = 6352
        // THE NUMBER(NUM1) thing makes it the proper value
        displayElement.textContent = result;
        num1 = result;
        num2 = '';
        operator = '';
    }
})

//FUNCTION

function calculate(a, b, operation) {
    if (operator === '+') {
        return a + b;
    }
    if (operator === '-') {
        return a - b;
    }
    if (operator === '*') {
        return a * b;
    }
    if (operator === '/') {
        return a / b;
    }
}