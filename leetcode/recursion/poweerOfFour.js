// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.


// var isPowerOfFour = function(n) {
//     if (n <= 0) return false
//     while (n > 1) {
//         if (n %4 !== 0) return false
//         n = n /4
//     }
//     return true
// };

// or using recursion 
function isPowerOfFour(n){
    if(n===1) return true
    else if (n<0 || n%4 !== 0) return false
    return isPowerOfFour(n/4)
}

console.log(isPowerOfFour(16))