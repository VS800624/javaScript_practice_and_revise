// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

//  function power(n) {
//         if (n <= 0 ) return false 
//         while (n > 1) {
//            if (n%2 !== 0) return false
//             n = n/2
//         }
//         return true 
//     }

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
//     console.log(power(0))

//     var isPowerOfThree = function(n) {
//     if (n <= 0) return false
//     while (n > 1) {
//         if (n %3 !== 0) {
//          return false
        // } else {
//         n = n /3
//          }
//     }
//     return true
// };
// console.log(isPowerOfThree(9))

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.


// var isPowerOfFour = function(n) {
//     if (n <= 0) return false
//     while (n > 1) {
//         if (n %4 !== 0) return false
//         n = n /4
//     }
//     return true
// };

// console.log(isPowerOfThree(12))

// function fruits (...fruits){
//     console.log(...fruits)
// }
// fruits("apple", "banana", "grapes")

// Q) What will be the output of the following code?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count)
    }
}
const counter = outer()
counter();
counter();

// Q) what will console.log([] == false) return?
// The loose equality (==) operator in JavaScript tries to convert values to the same type before comparing.
// When comparing an object (like []) with a primitive, JS first converts the object to a primitive using .toPrimitive.
// For [], this becomes "" (an empty string).
// ([].toString() → "")
// Next, when comparing a string and boolean, JS converts the boolean to a number:
// false → 0
// The string "" is also converted to a number:
// "" → 0
// 0 == 0 → true

//Q) how do you deep clone an object in js?

// Shallow vs Deep Clone
// Shallow clone: Only the first level is copied. Nested objects/arrays are still references.
// Deep clone: Entire object structure is copied — no references to the original remain.

//  Ways to Deep Clone in JS:
// 1. Using structuredClone() (modern & recommended)
// Available in modern browsers and Node.js 17+.
// const obj = { a: 1, b: { c: 2 } };
// const deepCopy = structuredClone(obj);
// deepCopy.b.c = 42;
// console.log(obj.b.c); // 2 (original not affected)

// 2. Using JSON.stringify + JSON.parse
// Simple and widely used, but has limitations (loses functions, undefined, Date, Map, Set, etc.).
// const obj = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy.b.c = 42;
// console.log(obj.b.c); // 2

// Q) which function combines array elements into a single value?
// reduce() takes all the elements of an array and reduces them to a single value by applying a callback function step by step.

// Example: Sum of numbers
// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0); // 0 is the initial value of accumulator

// console.log(sum); // 10

// Example: Concatenate into a string
// const words = ["Hello", "world", "!"];

// const sentence = words.reduce((acc, word) => acc + " " + word);

// console.log(sentence); // "Hello world !"

// Example: Flatten nested arrays
// const nested = [[1, 2], [3, 4], [5]];

// const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat); // [1, 2, 3, 4, 5]


// So the function that combines array elements into a single value is:
//  reduce()

