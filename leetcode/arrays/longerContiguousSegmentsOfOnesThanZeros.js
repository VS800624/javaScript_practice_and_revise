// Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

// For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

 

// Example 1:

// Input: s = "1101"
// Output: true
// Explanation:
// The longest contiguous segment of 1s has length 2: "1101"
// The longest contiguous segment of 0s has length 1: "1101"
// The segment of 1s is longer, so return true.
// Example 2:

// Input: s = "111000"
// Output: false
// Explanation:
// The longest contiguous segment of 1s has length 3: "111000"
// The longest contiguous segment of 0s has length 3: "111000"
// The segment of 1s is not longer, so return false.
// Example 3:

// Input: s = "110100010"
// Output: false
// Explanation:
// The longest contiguous segment of 1s has length 2: "110100010"
// The longest contiguous segment of 0s has length 3: "110100010"
// The segment of 1s is not longer, so return false.
 

// Constraints:

// 1 <= s.length <= 100
// s[i] is either '0' or '1'.

var checkZeroOnes = function (s) {
    let zerosCount = 0
    let onesCount = 0
    let currOnesCount = 0
    let currZerosCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            currOnesCount++
            currZerosCount = 0
        } 
        else {
            currZerosCount++
            currOnesCount = 0
        }
        onesCount = Math.max(onesCount,currOnesCount)
        zerosCount = Math.max(zerosCount,currZerosCount)
        console.log(onesCount,currOnesCount, zerosCount)
    }
    // console.log(onesCount)
    return onesCount > zerosCount
};

// or  
// var checkZeroOnes = function (s) {
//     let maxOnes = 0;
//     let maxZeros = 0;
//     let curr = 1;

//     for (let i = 1; i < s.length; i++) {
//         if (s[i] === s[i - 1]) {
//             curr++;
//         } else {
//             curr = 1;
//         }

//         if (s[i] === "1") {
//             maxOnes = Math.max(maxOnes, curr);
//         } else {
//             maxZeros = Math.max(maxZeros, curr);
//         }
//     }

//     if (s[0] === "1") maxOnes = Math.max(maxOnes, 1);
//     else maxZeros = Math.max(maxZeros, 1);

//     return maxOnes > maxZeros;
// };

console.log(checkZeroOnes("0111010011"))