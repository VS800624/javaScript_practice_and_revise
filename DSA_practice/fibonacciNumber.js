// using recursion
function fib(n) {
    if(n<=1) return n
    return fib(n-1) + fib(n-2)
}

console.log(fib(10))



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