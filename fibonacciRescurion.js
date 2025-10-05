// Write a function to find the nth Fibonacci number.

// using recursion 
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


// using iteration
function fib(n){
    if (n<=1) return n
    let fib = 0
    let a =0
    let b =1
    for(let i=2; i<=n;i++){
        fib = a + b
        a = b
        b = fib
    }
    return fib
}

console.log(fib(10))