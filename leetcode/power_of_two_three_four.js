// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

//  function power(n) {
//         if (n <= 0 ) return false 
//         while (n > 1) {
//            if (n%2 !== 0) return false
//             n = n/2
//         }
//         return true 
//     }


function powerOfTwo(n){
    if (n<= 0) return false
    while (n>1) {
        if(n%2 !== 0) {
           return false
        } else {
            n = n/2
        }
    }
    return true
}

var isPowerOfTwo = function(n) {
    if (n===1) return true
    else if (n<1 || n%2!==0) return false
    return isPowerOfTwo(n/2)
};

isPowerOfTwo(12)

console.log(powerOfTwo(8))

function isPower(n) {
    let x = 1;
    while (x < n) {
        x = x * 2
    }
    return x === n
}
console.log(isPower(10))

// const powerOf = (num) => {
//   for (let i = 1; i < num; i++){
//     if (2 ** i === e) {
//         return true
//         }
//     };
//   return false;
// };

// console.log(powerOf(18))