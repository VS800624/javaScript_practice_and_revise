// Q.1

console.log(parseInt('10+2'))
console.log(parseInt('7FM'))

// How parseInt() works
// parseInt(string) converts a string to an integer.
// It reads the string from left to right until it finds a character that cannot be part of a valid number.
// Then it stops parsing and returns the number it has read so far.
// parseInt parses the string from left to right until it encounters a non-numeric character. It stops at + and ignores the rest, returning only the leading integer 10.

// Q.2

// [1,2,3].map(num => {
//     if(num> 0) return 
//     return num * 2
// })

// Q.3)

function getInfo(member, year){
    member.name = 'FrontendMaster'
    year = '1947'
}

const person = { name: 'Dev'}
const birthYear = '2097'

getInfo(person, birthYear)
console.log(person, birthYear)

// Understanding the arguments

// member → refers to person object ({ name: 'Dev' })
// Objects are reference types in JavaScript.
// So when you pass person to getInfo, the function receives a reference to the original object.

// year → refers to birthYear string ('2097')
// Strings are primitive types in JavaScript.
// Primitives are passed by value, meaning the function gets a copy of the value.

// Key Concepts :

// Objects are passed by reference → modifying their properties inside a function affects the original object.
// Primitives (string, number, boolean, etc.) are passed by value → modifying them inside a function does not affect the original variable.
// Function parameters receive copies of values for primitives, but references for objects.