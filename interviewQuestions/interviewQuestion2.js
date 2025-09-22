// Q) 1
console.log(NaN === NaN)
// By definition, NaN is unordered and not equal to any value, even another NaN.
// So, the expression NaN === NaN is always false.

// eg: 
console.log("a" - 1)
console.log("xyz" - 2)
// here in this example both are NaN but they are different values so NaN is alway not equal to any number

// In JavaScript, there is only one special NaN value in memory. But according to the IEEE 754 standard, NaN is never equal to anything, even itself.
// So, NaN !== NaN is false not because there are multiple different NaN values, but because the definition of NaN says it is unordered and cannot be equal to any number (including itself).

// NaN means an invalid numeric result.
// By rule, NaN is not equal to any value, even another NaN.
// That’s why NaN === NaN gives false, and why we must use Number.isNaN() to check for it.

// Q)2
console.log(1<2<3)  // true
// because 1<2 is true and the value of true is 1 and 1<3 is true so the output will be true

// 1 < 2 < 3 is evaluated left-to-right as (1 < 2) < 3.
// So:

// 1 < 2 → true

// Then true < 3 → true is coerced to number 1, so 1 < 3 → true

// Final result: true.

// Why (not) right-to-left

// Relational operators (<, >, <=, >=) in JavaScript are left-associative. That means a < b < c is parsed as (a < b) < c, not a < (b < c).

// What happens under the hood (coercion rules)
// (1 < 2) produces a Boolean true.
// When a Boolean is compared with a Number using <, JavaScript converts the Boolean to Number: Number(true) === 1, Number(false) === 0.
// So true < 3 becomes 1 < 3, which is true.

// Q)3. What is destructuring ? 
// Destructuring is a syntax or feature in JavaScript that lets us extract values from arrays and objects and assign them to different variables in a single step.

// Q)4
 let [x,y, ...restof] = [10,20,30,40,50] 
console.log(restof)  // 30,40,50

// In array destructuring, the rest operator (...) is used to collect all the remaining values (that are not already assigned) into a new array.

// The rest operator must be the last element in destructuring.
// let [...rest, last] = [1, 2, 3]; // ❌ SyntaxError

// It always produces an array of leftover values.

// If there are no leftover values, it becomes an empty array:

// let [x, y, ...rest] = [10, 20];
// console.log(rest); // []

// Q)5
for(var i= 0; i<3;i++){
    setTimeout(() => console.log(i),2000)
}

// 1. How var works here
// var is function-scoped / global-scoped, not block-scoped.
// That means inside the loop, all iterations share the same single variable i.
// After the loop finishes, i becomes 3.

// 2. What happens with setTimeout
// setTimeout is asynchronous.
// The loop completes before the 2000ms delay ends.
// By the time the callbacks run, the loop is already over, so i = 3.

// 3. Output
// So after 2 seconds, all three setTimeout callbacks will print:
// 3
// 3
// 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 2000);
}

// Why the output becomes 0, 1, 2
// let is block-scoped.
// In a for loop, each iteration gets a new copy of i.
// So iteration 1 has its own i=0, iteration 2 has i=1, and iteration 3 has i=2.
// When the setTimeout callback runs later, it remembers the correct i for that iteration (thanks to closures).


// Case 1: Using var
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

// var is function-scoped, not block-scoped.
// So there is only one single variable i shared by the whole loop.

// When the loop runs:
// First iteration → i=0
// Second iteration → i=1
// Third iteration → i=2
// After loop ends → i=3

// setTimeout puts the callback into a task queue to run later.
// But by the time those callbacks run (after 2000ms), the loop has already finished, so i=3.
// Therefore, all callbacks print the same final value:

// 3
// 3
// 3

// Case 2: Using let
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

// Here comes the magic:
// let is block-scoped, but in a for loop it behaves in a special way.
// JavaScript actually creates a new separate variable i for every iteration.
// So internally it’s almost like this:
// {
//   let i = 0;
//   setTimeout(() => console.log(i), 2000);
// }
// {
//   let i = 1;
//   setTimeout(() => console.log(i), 2000);
// }
// {
//   let i = 2;
//   setTimeout(() => console.log(i), 2000);
// }

// Each iteration gets its own copy of i, stored in memory separately.
// When the setTimeout callback runs, it closes over (remembers) that iteration’s i, not the shared one.
// Output after 2000ms:
// 0
// 1
// 2

// Main Difference
// var → one shared i, updated each loop, all callbacks see the final value.
// let → a new i is created for every iteration, so callbacks remember their own copy.

// Q)6.

// let a= 8
// let b =2
// [b,a] = [a,b]
// console.log(a)

// Q)7 reverse a string
let str = "hello"
// let arr = str.split("").reverse().join("")
let arr = []
for(let i= str.length-1; i>=0; i--){
    // arr = arr[i]
    arr.push(str[i])
}
console.log(arr.join(""))

// Q)8 Different ways to combine two arrays: 

// 1. Using concat()
// The traditional way. It creates a new array.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = arr1.concat(arr2);

// console.log(result); // [1, 2, 3, 4]

// 2. Using Spread Operator (...)
// The modern, shorter way.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = [...arr1, ...arr2];

// console.log(result); // [1, 2, 3, 4]

// You can also mix with other values:
// let result = [0, ...arr1, 99, ...arr2];
// console.log(result); // [0, 1, 2, 99, 3, 4]

// 3. Using push() with Spread
// If you want to modify the first array instead of creating a new one:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// arr1.push(...arr2);

// console.log(arr1); // [1, 2, 3, 4]

// 4. Using Array.prototype.splice()
// Insert another array into a specific position:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// arr1.splice(arr1.length, 0, ...arr2);

// console.log(arr1); // [1, 2, 3, 4]

// Q9 What is babel? 
// Babel is a JavaScript compiler that converts the modern javaScript code (ES6 and above) into older versions of JS so that it  can run in all browsers

// How to Remember:
// Think of Babel like a translator:
// You write code in modern JS (with latest features).
// Babel translates it into old JS that even old browsers understand.

// Eg:
// You write:
// const greet = () => console.log("hello")

// Babel converts it into:
// function greet () {
//     console.log("hello")
// }
// Now even older browsers (that don’t support const or arrow functions) can run it.

//So, “Babel is a JavaScript compiler that helps developers use the latest JavaScript features by converting them into code that works in older browsers.”

// Q)10. undeclare vs undefined?
// undeclare : if we try to access a variable that is not declared then the variable is undeclared 
// A variable that has never been declared in the program.
// Accessing it gives a ReferenceError
// Example:

// console.log(x); // ReferenceError: x is not defined
// It does not exist in memory.


// undefined : if the variable is defined but not assigned the value that is undefined undefined takes some memory whereas undeclare does not take memory 
// A variable that is declared but not assigned a value.
// No error occurs, it simply gives undefined.
// Example:

// let y;
// console.log(y); // undefined
// Memory is allocated, but the value is undefined.

// Undeclared → variable doesn’t exist at all.
// Undefined → variable exists but has no value yet.

// Q)11 What is hoisting?
//  Hoisting: Mechanism in JS where the variable declarations look like they are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
// Hoisting is not about physically moving code to the top, but rather about how JavaScript allocates memory for variables and functions during the memory creation phase of the execution context. This mechanism allows for certain behaviors like using functions before they appear in the code, but it's crucial to understand that variables are initialized as 'undefined' until they're assigned a value during code execution. You can call a function before its declaration in the code because the entire function is available in memory from the start. Trying to access a variable before its declaration will result in 'undefined'.
// Function expressions and arrow functions, being treated as variables, hence cannot be called before their declaration in the code. Variable and function declarations are processed before any code is executed. However, only the declarations are processed, not the initializations. This gives the impression that declarations are "moved to the top" of their scope, but it's more accurate to say they're processed early in the execution context's creation.

// Easy Definition of Hoisting:

// Hoisting means JavaScript remembers all variable and function declarations first, before running the code.
// Functions can be used before they are written (because the whole function is stored in memory).
// Variables are also remembered, but they start with the value undefined until you assign something.
// Function expressions and arrow functions act like variables, so they cannot be used before their line in code.

// “Hoisting is JavaScript’s way of moving declarations to the top of the scope, so functions can run before they’re written, and variables exist but are undefined until assigned.”

// Q)12 Temporal Dead Zone ?

// 1. let and const are hoisted but its memory is allocated at other place(script or blocked scoped memory) than window (global execution context) which cannot be accessed before initialization.
// 2. Temporal Dead Zone exists until variable is declared and assigned a value.

// Q)13 map, filter and reduce?

// 1. map()
// Purpose: Transform each element in the array.
// Returns: Always a new array (same length as original).

// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2);
// console.log(doubled); // [2, 4, 6]

// 2. filter()
// Purpose: Keep only elements that satisfy a condition.
// Returns: Always a new array (may be shorter).

// const nums = [1, 2, 3, 4];
// const evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4]

// 3. reduce()

// Purpose: Reduce array to a single value (like sum, product, object, etc.).
// Returns: Not an array by default, but whatever you return in the callback (number, string, object, even an array if you build one).

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, ele) => acc + ele, 0);
// console.log(sum); // 10 (number, not array)

// Summary:
// map() → returns new array
// filter() → returns new array
// reduce() → returns a single value (not array, unless you explicitly make it build an array)

// Q.14) What are template literals?

// They are a special way to write strings in JavaScript using backticks (`).
// They allow you to:
// Insert variables or expressions easily with ${...} (this is called string interpolation).
// Write multi-line strings without using \n.
// Use features like tagged templates (advanced usage).

// 1. String with variables

// const name = "John";
// const age = 25;

// console.log(`My name is ${name} and I am ${age} years old.`);

// 2. Multi-line string
const poem = `Roses are red,
Violets are blue,
I love coding,
And so do you.`;

console.log(poem);

// 3. Expressions inside

const a = 10, b = 20;
console.log(`The sum is ${a + b}`); 
// Output: The sum is 30
