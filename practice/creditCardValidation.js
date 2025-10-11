// validate a credit card number (luhn algorithm
// Write a function to validate credit card number using luhn algorithm

// Requirements: 
//? Write a function named validateCreditCard that takes a credit card number as a string.
 //? The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
 //? Ensure the function can handle numbers as strings, which may include spaces and dashes.

//* Luhn Algorithm Steps:
//* Steps of the Luhn Algorithm
//* Prepare the Number:
//* Start with the digits of the number. For example, if validating the number 79927398713.
//* Reverse the Digits:
//* Reverse the digits of the number. For example, it becomes 31789379297.
//* Double Every Second Digit:
//* Starting from the first digit, double every second digit.
//* For our example: 3, 1*2, 7, 9*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//* Which translates to: 3, 2, 7, 18, 9, 6, 7, 18, 2, 14, 9.
//* Subtract 9 from Numbers Higher than 9:
//* If doubling the number results in a number greater than 9, subtract 9 from it.
//* Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//* Sum All Digits:
//* Add all the digits together.
//* 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//* Check Modulo 10:
//* If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to luhn


function validateCreditCard(number)
{
    return number
    .split("")
    .filter(elem => elem !== " ")
    .reverse()
    .map(elem => parseInt(elem))
    .map((elem, index) => index % 2 !== 0? elem * 2 >= 9? (elem * 2) - 9 : elem * 2 : elem)
    .reduce((accum, elem) => accum + elem, 0) % 10 === 0? true : false;
}

// function validateCreditCard(number){
//     let reversed = str.split("").reverse().join("").replace(/\D/g, "")
// }