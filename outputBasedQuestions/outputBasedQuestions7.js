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

