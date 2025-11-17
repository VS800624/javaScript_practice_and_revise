// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
 

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.

// not work for bigger values
// var largestOddNumber = function(num) {
//     num = Number(num)
//     while(num > 0) {
//         if(num%2 !== 0){
//             return String(num)
//         } else {
//             num = Math.floor(num/10)
//         }
//     }
//     return ""
// };

// improving the above solution making it work for larger values  (still this solution is not passing 195/196)
//  “Time Limit Exceeded” (TLE) means your loop is stuck for one specific test case — most likely the input "0" or "0000000...".
// var largestOddNumber = function(num) {
//     let n = BigInt(num);  // works for any size

//     while (n > 0n) {
//         if (n % 2n !== 0n) {
//             return n.toString();
//         }
//         n = n / 10n;  // removes the last digit
//     }
//     return "";
// };

// correct approach
var largestOddNumber = function (num) {
    let n = num.length - 1;  // start from the last digit
    while (n >= 0) {
        if (Number(num[n]) % 2 !== 0) {  // check if digit is odd
            return num.slice(0, n + 1);  // return substring up to that digit
        }
        n--;  // move left
    }
    return "";  // no odd digit found
};

// above approach with for loop
// var largestOddNumber = function (num) {
//     let n = num.length - 1;  // start from the last digit
//     for(let i = n; i>=0; i--){
//         if (Number(num[n]) % 2 !== 0) {  // check if digit is odd
//             return num.slice(0, n + 1);  // return substring up to that digit
//         }
//     }
//     return "";  // no odd digit found
// };
 
console.log(largestOddNumber("4216"))
console.log(largestOddNumber("35427")); // "35427"
console.log(largestOddNumber("4207")); // "4207"