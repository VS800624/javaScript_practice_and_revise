// Q.1)

function sayHi() {
    return (() => 0)()   // it is returning 0
}
console.log(typeof sayHi())   // so typeof sayHi() will be number

// Q.2)

console.log(typeof typeof 1)  // output string

// typeof always returns a string describing the type ("number", "string", "object", etc.).
// So when you do typeof typeof 1, the first typeof gives "number" (a string).
// The second typeof checks the type of that string → "string".

// Q.3)

const numbers = [1,2,3]
numbers[10] = 11
console.log(numbers)
console.log(numbers[9])

// Q.4)
// (() => {
//     let x, y;
//     try {
//         throw new Error()
//     } catch (x) {
//         (x=1)(y=2)         // local scope has always highest priority
//         console.log(x)
//     }
//     console.log(x)
//     console.log(y)
// })()  

// Q.5) 
const data = [..."Apple"]
console.log(data)

//Q.6)
console.log(20 + 30 + "10")

// key points: 
// Most operators are Left-to-right.

// Special right-to-left ones:
// Assignment (=, +=, etc.)
// Exponentiation (**)
// Ternary (?:)
// Unary operators (!, ++, typeof, etc.)
// Parentheses () always have the highest precedence (they override everything)

//Q.7)
function getMessage() {
    throw "hello message"
    // throw new Error("hello message")
}

function sayHello() {
    try {
        const data = getMessage()
        console.log("worked!", data)
    } catch (e) {
        console.log('an error:', e)
    }
}
sayHello()