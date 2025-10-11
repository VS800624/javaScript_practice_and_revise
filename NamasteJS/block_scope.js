// debugger
// console.log(a)
// let a = 10;
// var b = 100


// Block is also known as Compound statements. It is used to combine the multiple statements together (into a group)

// let & const are hoisted in a block scope. var is in global scope

// let and const variables are stored in block space, so it is called block-scoped but var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//     console.log(a)
//     console.log(b)    
//     console.log(c)    

// Here outside the block we cannot access the let and const because they are  block values and block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope) 

// Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that scope.

// Example 1: 
let x = 10; // Outer scope variable
function example() {
  let x = 20; // Inner scope variable, shadows outer 'x'
  console.log(x); // Prints 20
}
example(); //function call
console.log(x); // Prints 10

// Example 2: 
console.log(a); //hoisting
var a = 9;
console.log(a);
{
 var a = 10;  //overwrite within same GEC , both var 'a' is pointing to same variable
 console.log(a)
}
console.log(a);

// Output:
// Undefined
// 9
// 10
// 10

// variables declared with var are function-scoped or globally scoped, but they are not block-scoped like variables declared with let or const. So, the var a declared inside the block {} will override the outer var a declaration, and the value of a will be 10 when logged outside the block.
// var variable of function scoped overwrites the value of Global Scoped variable.
// Scope for arrow function is also same!

var num = 9
 var num = 10
 console.log(num)