let multiply = function (x,y){
    console.log(x  * y )
}

let multiplyByTwo = multiply.bind(this,2) 
// let multiplyByTwo = multiply.bind(this,2, 3) here the 5 will be ignored which we passed in multiplyByTwo method and if we do not pass anything and pass 2 and 3 in multiplyByTwo(2,3) method then it will give us result 6 but we intensionally pass 2 in multiply.bind(this,2) to curry our method
multiplyByTwo(5)   // the argument what we pass inside multiplyByTwo will refer to y
// this multiplyByTwo will act like this
// let multiplyByTwo = function (y) {
//     let x =2;
//     console.log(x * y)
// }
// this is function currying with bind method we make a copy of this multiply method and we create more method out of this by presetting some arguments inside the function like how we preset the 2 as x over here this is one way to do currying 

let multiplyByThree = multiply.bind(this,3)
multiplyByThree(5)

// we can do currying with closures also
let multiply2 = function(x) {
    return function (y) {
        console.log(x * y)
    }
}
let multiplyByFour = multiply2(4)
multiplyByFour(3)

// Currying is a way to break a function with multiple argument into a series of function that each take one argument at a time.
// or Currying is a technique in JavaScript where you take a function with multiple arguments and turn it into a series of functions, each taking one argument at a time.
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.
// eg: 

function greet(greetType){
    return function (name){
        console.log(`${greetType}, ${name}`)
    }
}
let sayHello = greet("Hello")
sayHello("Akshay")
sayHello("Vishal")

let sayNamaste = greet("Namaste")
sayNamaste("JavaScript")