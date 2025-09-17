// this in global space

console.log(this)  //global object (window in case of browser and global in case of node.js)
// What is the value of this in the global space?
// the value of this in global space is global object that can be different, it can be window , it can be global, it can be something else depending upon where you are running that piece of code where are you running js.

// Note: this keyword acts differently in strict mode and non-strict mode

// this inside a function
function x(){
    // the value of this is undefined in the strict mode inside a  function and it will be global object(window) in non-strict mode in the function 
    // console.log(this)
}
x()

// this inside non strict mode - (this substitution)
// According to this substitution if the value of this keyword is undefined or null this will be replace with global object only in non-strict mode

// What is the value of this keyword inside a function
// the value of this keyword inside a function is undefined but because JS has something known as this substitution so the value becomes equal to global object if not use strict mode

// the value of keyword also depends on how the function is called (window)
// x();  if the function is called without any reference of an object then it's will be undefined.
// window.x()  // this will be window(global object)

// this inside a object's method

// if you make a function as a part of an object then it is known as method.

const obj = {
    a: 10,
    x: function(){   //when you are inside an object if you create function inside an object then this function x is known as method now so, x is the method of an object obj
        console.log(this)   // here value of this is object 
        console.log(this.a)  
    }
}
// obj.x()
// Whenever you are inside the method the value of this keyword is the object where this method is present.

// call, apply and bind methods are used in sharing methods

const student = {
    name: "Akshay",
    printName: function(){
        console.log(this.name)  
    }
}
student.printName()

const student2 = {
    name: "Deepika"
}

student.printName.call(student2)  //value of this = student2 , whatever you pass in call will become value of this keyword
// value of this can be modified using call, apply and bind method 

// this inside arrow function
// arrow functions does not have their own this, they take value of their lexical environment where they are enclosed
// arrow functions retains the this value of the enclosing lexical context.
const obj2 = {
    a: 10,
    x : () => {
        console.log(this)
    },
}
obj.x()

// this inside the nested arrow function
const obj3 = {
    a: 10,
    x : function() {
        // enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y()
    },
}
obj2.x()

// here this represent the obj3 object because arrow function does not have their own this they take value of their lexical environment where they are enclosed here they are enclosed in the x method and this wil act like there is no arrow function it act like the this of the x method

// this inside DOM elements is the reference to that particular HTML DOM element (the HTML element where this is present)

// let obj3 = {
//     xyz: "john",
//     pqr: function (){
//         console.log(this.xyz)
//     }
// }
// const c = obj3.pqr
// obj3.pqr()
// c()

// Method Call: obj3.pqr()
// +------------------+
// | obj3             |
// | └─ pqr() {       |
// |      console.log(this.xyz)  <-- this = obj3
// | }                |
// +------------------+
// Output: "john"


// Standalone Call: c()
// +------------------+
// | c() {            |
// |   console.log(this.xyz)     <-- this = undefined (strict mode)
// | }                |
// +------------------+
// Output: undefined

// Explanation

// obj3.pqr()
// Function is called as a method of obj3.
// this automatically points to obj3.
// So this.xyz → "john"

// c()
// Function is now detached from obj3.
// Called standalone → this defaults to undefined (in strict mode).
// So this.xyz → undefined


// | Call Type                     | Example                           | `this` Inside Function                                | Output Example               |
// | ----------------------------- | --------------------------------- | ----------------------------------------------------- | ---------------------------- |
// | **Method call**               | `obj.fn()`                        | `obj` (object before dot)                             | Access object properties     |
// | **Standalone function call**  | `fn()`                            | `undefined` (strict) / global obj (non-strict)        | Usually undefined            |
// | **Constructor call**          | `new Fn()`                        | Newly created object                                  | Properties of new object     |
// | **Arrow function**            | `() => { console.log(this) }`     | `this` **lexically inherited** from surrounding scope | Depends on outer `this`      |
// | **`bind` / `call` / `apply`** | `fn.bind(obj)()` / `fn.call(obj)` | Explicitly set to object (`obj`)                      | Access object properties     |
// | **Event handler (DOM)**       | `element.onclick = fn`            | Event target (`element`)                              | Element that triggered event |


// Quick Memory Tips
// Dot matters → obj.fn() → this = obj
// Standalone = nothing → this = undefined (strict)
// Arrow functions → this is inherited
// Bind/call/apply → override this

