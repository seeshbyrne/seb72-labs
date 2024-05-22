console.log("Intro to JavaScript Functions Lab Homework");

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y){
        return x;
    }   else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {

    if (age < 18) {
        return('Minor');
}   else {
        return('Adult');
}
}

console.log('Exercise 2 Result:', isAdult(17));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/


function isCharAVowel(letter) {
    if (letter === 'a') {  
        return('true');
    } else if (letter === 'e') {
        return('true');
    } else if (letter === 'i') {
        return ('true')
    } else if (letter === 'o') {
        return ('true')
    } else if (letter === 'u') {
        return ('true')
    } else {
        return ('false');
    }
}

console.log('Exercise 3 Result:', isCharAVowel('a'));

// Unsure if there is an easier way to include all the vowels
// Tried using || but I couldn't get it to work

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

let username = "johnsmith";
let email = "example.com";

function generateEmail() {    
    return(username + '@' + email);
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// The above code works but I'm unsure about the use of return and console.log

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay} ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString (str) {
    return str.split("").reverse().join("")
}

console.log('Exercise 6 Result:', reverseString("rockstar"));

//The above I watched a video for - it makes sense but I need more practice

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(str) {
    let rev = str.split("").reverse().join("");
    if (rev == str) {
        return ('true')
    } else {
        return ('false');
    }
}
console.log('Exercise 7 Result:', checkPalindrome("radar"));

// MY RESEARCHED NOTES FOR ABOVE : Split, reverse and join methods
// inbuilt string method like split to split the string into characters array
// reverse the array using reverse method
// Join the array into a string using join method
//store the value inside another variable
// Compare the values and return true if both are equal

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x, y, z) => {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(bill, percentage) {
    return bill * (percentage / 100);
}

console.log('Exercise 9 Result:', calculateTip(50, 20));

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(x, y) {
    if (y === "C") {
    return (x * 1.8) + 32;
    } else if (y === "F") {
        return ((x - 32) * 1.8);
    }
    
}

console.log('Exercise 10 Result:', convertTemperature(32, "C"));

// Celcius to Farenheit
// (0 C x 9/5) + 32 = 33.8 F
// (32 F - 32) x 5/9 = 0 C

/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {
    if (operation == "subtract") {
    return (num1 - num2);
    } else if (operation == "multiply") {
        return (num1 * num2);
    } else if (operation == "divide") {
        return (num1 / num2);
    } else if (operation == "add") {
        return (num1 + num2);
    }
}

console.log('Exercise 11 Result:', basicCalculator(10, 5, "subtract"));

// I'm guessing there would be a cleaner way of producing the answer above?
// I wasn't 100% sure but I thought to give it a go

/*
Exercise 12: calculateGrade()

Define a function called calculateGrade. It should take a numerical score and return the corresponding letter grade (A, B, C, D, F). For example, 90 and above yields an 'A', 80-89 is a 'B', and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(score) {
    if (score >= 90) {
    return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
    
}

console.log('Exercise 12 Result:', calculateGrade(85));