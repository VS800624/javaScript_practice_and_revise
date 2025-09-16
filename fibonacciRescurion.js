// Write a function to find the nth Fibonacci number.

function fibonacci(num) {
    if (num <=1) return num
    else {
        return fibonacci(num - 1)  + fibonacci(num -2 )
    }
}


console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))