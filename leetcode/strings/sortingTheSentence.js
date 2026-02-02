// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 

// Constraints:

// 2 <= s.length <= 200
// s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
// The number of words in s is between 1 and 9.
// The words in s are separated by a single space.
// s contains no leading or trailing spaces.

// var sortSentence = function(s) {
//     let words = s.split(" ")
//     console.log(words)
//   // console.log(words.sort())
//     for(let i =0; i<words.length - 1; i++){
//       for(let j = i+1; j<words.length; j++){
//           let word1 = Number(words[i][words[i].length-1])
//           let word2 = Number(words[j][words[j].length-1])
//           if(word2 < word1){
//             temp = words[i]
//             words[i] = words[j]
//             words[j] = temp 
//           }
//         }
//     }
//     // console.log(words)

//     for(let i =0; i<words.length; i++){
//       words[i] = words[i].split("").filter(char => isNaN(char)).join("")
//     }
//     return words.join(" ")
// };


// or with built-in method sort and regex
// var sortSentence = function(s) {
//   return s
//     .split(" ")
//     .sort((a, b) => {
//       return Number(a[a.length - 1]) - Number(b[b.length - 1]);
//     })
//     .map(word => word.replace(/\d/g, ""))
//     .join(" ");
// };


// or without regex:
var sortSentence = function(s) {
  return s
    .split(" ")
    .sort((a, b) => {
      return Number(a[a.length - 1]) - Number(b[b.length - 1]);
    })
    .map(word => {
      let result = "";
      for (let ch of word) {
        if (ch < '0' || ch > '9') {
          result += ch;
        }
      }
      return result;
    })
    .join(" ");
};


console.log(sortSentence("is2 sentence4 This1 a3"))