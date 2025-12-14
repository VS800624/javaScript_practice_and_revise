// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

// var checkIfPangram = function(sentence) {
//   let arr = Array(26).fill(0)
//   for(let i = 0; i<26; i++ ){
//     arr[i] =  String.fromCharCode(i + 97)
//   }  
//   for(let i=0; i<arr.length ; i++){
//     if(!sentence.includes(arr[i])){
//       return false
//     }
//   }
//   return true
//   // console.log(arr)
// };

// Note:
// char → code → charCodeAt()
// code → char → String.fromCharCode()


// optimize the solution
// var checkIfPangram = function(sentence) {
//     let letters = new Set()

//     for(let i =0 ; i<sentence.length ; i++){
//       letters.add(sentence[i])
//     }
//     return letters.size === 26
// };

// optimizing the solution
var checkIfPangram = function(sentence) {
  return new Set(sentence).size === 26  
};




console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))