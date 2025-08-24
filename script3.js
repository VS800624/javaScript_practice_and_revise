
// Q) What is the output of the following code
// console.log(myFunc);
// function myFunc() {
//     return "hello"
// }

// Q) What will be the output of the following code?
// const obj = {
//     value: 42,
//     getValue: () => {
//         return this.value;
//     }
// }
// console.log(obj.getValue())

// Q) What will be the output of the following asynchronous code?
// async function foo() {
//     return "hello";
// }
// console.log(foo())

// Q) how to make passing argument mandatory?
// function check () {
//     throw new Error("Param required")
// } 

// function show(name = check()){
//     // Name is required
//     console.log(name)
// }

// show("vd")

// You must store the returned function in a variable and then call it multiple times:

function counter(n) {
    return function() {
       return n++;
    };
};

const myCounter = counter(10);  // create a counter starting at 10

console.log(myCounter()); // 10
console.log(myCounter()); // 11
console.log(myCounter()); // 12

// Step 1: Outer function

// counter takes an integer n as input.

// It returns another function (this is called a closure).

// const myCounter = counter(5);
// Now, myCounter is a function that remembers n = 5.

// Step 2: Inner function
// return function() {
//     return n++;
// };

// This function does 2 things every time you call it:
// return n++ →
// Returns the current value of n.
// Then increases n by 1 (post-increment).
// Because of closure, the inner function "remembers" the variable n even after the outer function has finished running.

