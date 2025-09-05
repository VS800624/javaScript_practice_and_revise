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

// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
//     console.log(power(0))

//     var isPowerOfThree = function(n) {
//     if (n <= 0) return false
//     while (n > 1) {
//         if (n %3 !== 0) {
//          return false
        // } else {
//         n = n /3
//          }
//     }
//     return true
// };
// console.log(isPowerOfThree(9))

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

console.log(powerOfTwo(8))

function isPower(n) {
    let x = 1;
    while (x < n) {
        x = x * 2
    }
    return x === n
}
console.log(isPower(10))

const powerOf = (num) => {
  for (let i = 1; i < num; i++){
    if (2 ** i === e) {
        return true
        }
    };
  return false;
};

console.log(powerOf(18))