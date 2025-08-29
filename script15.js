// a()
// b()

// Function statement or Function declaration
function a() {
    console.log("a called")
}

// Function Expressions

var b = function () {
    console.log("b called")
}

// difference between creating functions with these two types is hoisting , if we called a() and b() before even creating them in code in the output function b will throw an error that's the difference between both of them. So, during the hoisting phase , during the memory creation phase a is crated a memory and the function is assigned to a but ib the case of function expression the b is treated like any other variable it is assigned undefined initially until the code hits this function line  itself in coding phase. When the JS engine executes this  line by line and it reaches this function then only this function this function is assigned to variable b until then it is undefined . so here the value of b is undefined and you cannot call b like that that is the major difference between function statement and function variable


// Anonymous function 
// function () {
//     console.log("Anonymous function")
// }

// Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable


// var c = function xyz() {
//     console.log("c called")
// }
// xyz()
// Named function Expression: Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)
// Why it give reference error xyz is not defined ?
// If you use function like this here xyz is not created in the outer scope so, xyz is not a function inside this outer scope (or global scope) but it is created as a local variable if so can excess this function this function like this:
var c = function xyz() {
    console.log(xyz)
}
// But if you try to use outside like above it will throw an error

// Difference between Parameters & arguments ?
 var d = function xyz(param1, param2) {
    console.log("d is called")
}
// This (param1, param2) identifiers or labels or this variables in the function scope are parameter of the function
d(1,2) // the values which we pass inside the function when it is called  are known arguments and these variables or identifiers (param1,param2) which gets those values are parameters

// So in simple terms:
// Parameters = variables in the function definition 
// Arguments = actual values passed when the function is called

// First Class Functions

// var x = function(param) {
//     console.log(param)
// }
// x(function () {

// })

// var x = function(param) {
//     return function xyz() {
//     }
// }
// console.log(x())

// The ability of function to be used as values  and can be passed as an argument to another function and can be return out of another function this ability is known as first class function.

// first class Functions / first class citizens : 
// 1) used as values
// 2) can be passed as argument
// 3) can be executed inside a closured function
// 4) can be taken as return

