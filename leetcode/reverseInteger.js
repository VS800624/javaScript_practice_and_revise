// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321


function reverseInteger(n){
    let nCopy = n
    let rev = 0
    n = Math.abs(n)
    while(n>0){
        let last = n%10
        rev = (rev*10) + last
         n = Math.floor(n/10)
    }
    let limit = Math.pow(2,31)  // or let limit = 2 ** 31
    if (rev < -limit || rev> limit) return 0
    return (nCopy<0) ? -rev : rev
}

console.log(reverseInteger(123))