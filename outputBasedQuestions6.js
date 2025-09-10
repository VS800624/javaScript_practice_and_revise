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