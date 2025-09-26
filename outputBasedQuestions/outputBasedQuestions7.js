// Q.1)
(() => {
    let x = (y = 10) 
})()

console.log(typeof x)
console.log(typeof y)

// the x = (y = 10) is like
// y = 10 
// let x = y
// note : here y is undeclared variable amd undeclared variables are added to window object and x is local scoped so the output will be undefined and number
// In strict mode ("use strict";), this code would throw a ReferenceError because assigning to y without declaring it is not allowed.

// (y = 10) assigns 10 to y.

// Since y was never declared with let, const, or var, JavaScript treats it as an implicit global variable (in non-strict mode). So y gets attached to the global object (window in browsers, global in Node).

// Then let x = y assigns 10 to x, but x is declared with let inside the IIFE, so it’s block-scoped (only accessible inside the arrow function).
// After the IIFE runs:
// x is not accessible outside → it is undefined when you try typeof x.
// y was created as a global variable → it exists outside with value 10.

// Q.2
// const obj ={a: "John", b: 21}
// const data = {c: true, ...obj}
// console.log(data)

// The spread operator takes all key-value pairs from obj and adds them into data.
// The spread operator ...obj is used to copy all properties of one object into another

// Q.3)
const obj = {}
Object.defineProperty(obj, "a", {
    value: "char", enumerable: true
})
console.log(obj.a)
console.log(Object.keys(obj))


// Here you are adding a property "a" to the object obj using Object.defineProperty.
// By default, when you define a property this way, its attributes are:
// writable: false → you cannot change the value
// enumerable: false → it won’t show up in loops or Object.keys()
// configurable: false → you cannot delete or reconfigure it
// if you want enumerable to be true write it after the value
// Object.keys(obj) returns only the enumerable keys of the object.
// If the property a is non-enumerable by default, it will not appear in the result.

// Q.4) 
const box = {x: 10, y: 20}
Object.freeze(box)

const shape = box
shape.x =100
shape.z =20
console.log(shape)

//Note: if we freeze an object then we can not perform updation , deletion and insertion operation on that object so here the values inside the box will not change

// Q.5) 
function addItem (item, list){
    return list.push(item)
}

const result = addItem(" john", ['dog'])
console.log(result) 
// list.push(item) adds the element to the end of the array.
// The return value of push is the new length of the array, not the array itself. 
// so here we are returning not  returning the array, we are returning result of the push function and the result of push method returns the length of array 

// Q)6 
const name = "Mr.X"
age = 20

console.log(delete name)
console.log(delete age)

// 1. const name = "Mr.X"
// name is declared with const, so it is a block-scoped variable.
// Variables declared with var, let, or const cannot be deleted using delete.
// Therefore, delete name → false.

// 2. age = 20
// Here you didn’t use var, let, or const.
// In non-strict mode, this creates an implicit global variable (age) and adds it as a property on the global object (window in browsers).
// delete works on object properties, and since age is treated as a property of window, it can be deleted.
// Therefore, delete age → true.

// Q.7)
function* generatorFn(i){
    console.log('A')
    yield i;
    console.log('B')
    yield i * 2;
}

const gen = generatorFn(10)

console.log(gen.next().value)
console.log(gen.next().value)

// 1. What is a generator?
// A function with function* is a generator function.
// It doesn’t run all at once; instead, it produces an iterator (gen here).
// The code runs step by step, pausing whenever it hits a yield.

// 2. When you call:
// const gen = generatorFn(10);
// Nothing runs yet.
// gen is just a generator object (iterator).

// 3. First call:
// console.log(gen.next().value);
// Execution starts inside generatorFn(10).
// Logs "A".
// Hits yield i → pauses and returns i (which is 10).
// So this prints:

// A
// 10

// 4. Second call:
// console.log(gen.next().value);
// Resumes execution right after the first yield.
// Logs "B".
// Hits yield i * 2 → pauses and returns 20.
// So this prints:
// B
// 20

// Explanation in short:
// Generators allow pausing and resuming execution.
// Each yield temporarily stops the function and returns a value.
// First .next() gives 10, second .next() gives 20.
// console.log(gen.next().value); // 3rd call

// Step-by-step:
// After the second yield (i * 2), the function body has no more code left.
// So when you call gen.next() again, the generator is done.
// A generator’s .next() returns an object like this:
// { value: undefined, done: true }
// So the 3rd call prints:
// undefined

// Q.8)
async function getData(){
    return await Promise.resolve("Hello")
}

const data = getData()
console.log(data)   // output: Promise { <pending> }

data.then(res => console.log(res))   //output: Hello

// 1. async function getData() { ... }
// Any function declared with async always returns a Promise, no matter what you return.
// If you return "Hello", it’s actually Promise.resolve("Hello").
// If you throw error, it’s actually Promise.reject(error).

// 2. Inside the function:
// return await Promise.resolve("Hello");
// Promise.resolve("Hello") creates a resolved Promise with value "Hello".
// await waits for it and unwraps the value.
// But since this is inside an async function, the final return still gets wrapped in a Promise.
// So effectively, getData() returns:
// Promise { "Hello" }

// 3. First log:
// const data = getData();
// console.log(data);
// At this moment, getData() has returned a Promise.
// That’s why it logs:
// Promise { <pending> }
// (when logged immediately, it may still be pending until resolution).

// 4. Second log:
// data.then(res => console.log(res));
// .then(...) waits for the Promise to resolve.
// Once it resolves, it prints:
// Hello

// Final Output:
// Promise { <pending> }
// Hello

// In short:
// async always returns a Promise.
// That’s why console.log(data) prints a Promise.
// To get the actual value, you use .then(...) or await.


// Using await directly inside another async function
async function main() {
    const data = await getData();  
    console.log(data);  // prints: Hello
}

main();