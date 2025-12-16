// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

 

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists only of lowercase English letters.

// with inbuilt methods
// var firstPalindrome = function(words) {
//     for (let i =0; i<words.length; i++){
//       let reverseStr =  words[i].split("").reverse().join("")
//       // console.log(reverseStr)
//       if(words[i] === reverseStr){
//         return words[i]
//       }
//     }
//     return ""
// };

// without inbuilt methods
// var firstPalindrome = function(words) {
//   for (let i=0 ; i<words.length; i++){
//     let reverseStr = ""
//     for (let j = words[i].length-1; j>=0; j--){
//      reverseStr = reverseStr + words[i][j]
//     }
//     if (words[i] === reverseStr){
//       return words[i]
//     }
//   }  
//   return ""
// };

// optimizing the solution
var firstPalindrome = function(words) {
  for (let i=0 ; i<words.length; i++){
    let l = 0
    let r = words[i].length -1 
    let isPalindrome = true
    while(l<r){
      if(words[i][l] !== words[i][r]){
        isPalindrome = false
        break
      } else {
        l++
        r--
      }
    }
    if(isPalindrome) return words[i]
  }  
  return ""
};


console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))