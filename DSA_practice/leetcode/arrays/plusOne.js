// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// solution 1
// var plusOne = function(digits) {
//   const s = digits.join('');          // make string, e.g. "123"
//   const big = BigInt(s) + 1n;         // convert to BigInt and add 1
//   return big.toString().split('').map(Number);
// };




// Solution 2

var plusOne = function (digits){
    for(let i = digits.length - 1; i>= 0; i--){
        if(digits[i] < 9) {
           digits[i] = digits[i] + 1
            return digits
        }
        else if (digits[i] === 0){
            digits.unshift(1)
            return digits
        }
    }
}

console.log(plusOne([1,2,9]))