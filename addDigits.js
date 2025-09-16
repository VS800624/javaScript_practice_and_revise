// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

var addDigits = function(num) {
    while (num >= 10) {             // Step 1
        let sum = 0;                // Step 2
        let arr = num.toString().split("");  // Step 3
        for (let i = 0; i < arr.length; i++){  // Step 4
            sum += Number(arr[i]);   // Step 5
        }
        num = sum;                   // Step 6
    }
    return num;                       // Step 7
};

// or

// var addDigits = function(num) {
//     if (num === 0) return 0;
//     return 1 + (num - 1) % 9;
// };

console.log(addDigits(38))