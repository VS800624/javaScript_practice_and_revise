// find the given number is prime or not

function primeNumber(n){
    for (let i =2; i<=Math.sqrt(n); i++){
        if(n%i === 0) {
            return "Number is not a prime number"
        } 
    }
    return "Number is a prime number"
}

console.log(primeNumber(9))


// When checking if a number is prime:
// Factors always come in pairs.
// If a number n has a factor greater than its square root, the other factor must be less than the square root.
// Even if the square root is not a perfect integer, it still gives you the boundary to stop searching.
// That’s why the loop condition i < n is logically inefficient — you only need to check up to i <= sqrt(n) for correctness and optimization.