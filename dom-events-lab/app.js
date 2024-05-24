
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector(".display");

let num1 = '';
let operator = '';
let num2 = '';
let outcome = '';
    
calculator.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('number')) {
        if (operator === '') {  
            num1 = parseInt(event.target.textContent);
            displayElement.textContent = num1
            console.log('num1', num1);
        } else {
            num2 = parseInt(event.target.textContent);
            displayElement.textContent = num2
            console.log('num2', num2);
        }
     
    }
    if (event.target.classList.contains('equals')) {
        outcome = calculate(num1, num2, operator);
        displayElement.textContent = outcome;
    }

    if (event.target.classList.contains('operator')) {
      operator = event.target.textContent;
      console.log(operator);
    }

});

const calculate = (num1, num2, operator) => {
    if (operator === '+') {
        return (num1 + num2);
    }
}



    // if (event.target.innerText === '+') {
    //     return `${num2}` + `${num1}`;
    // }
//    }
//    if (event.target.innerText === '-') {
//       return `${num2}` - `${num1}`;
//    }
    // if (event.target.innerText === '/') {
    //    return `${num2}` / `${num1}`;
    // }


    