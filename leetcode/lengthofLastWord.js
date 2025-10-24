// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// var lengthOfLastWord = function(s) {
//     let arr = s.trim().split(" ")
//     return arr[arr.length-1].length
// };

// var lengthOfLastWord = (s) => {
//     let i = s.length -1
//     let length = 0

//     while(i>=0 && s[i] === " "){
//         i--
//     }

//     while (i>0 && s[i] !== " "){
//         length++
//         i--
//     }
//     return length
// }

// var lengthOfLastWord = function(s) {
//     // trim the spaces at the last 
//     let n = s.length - 1
//     while(n>=0){
//         if(s[n] !== " " ){
//             break
//         } else {
//             n--
//         }
//     }
//         // we are at the last character
        
//         // counting the the length of the last word
//         let count = 0
//     while(n>=0){
//         if(s[n] === " "){
//             break
//         } else {
//             n--
//             count++
//         }
//     }
//     return count
// };

// or 
var lengthOfLastWord = function(s) {
    // trim all the spaces at the end
    let n = s.length - 1
    while(n>=0){
        if(s[n] === " " ){
            n--
        } else {
            break
        }
    }
    // n is the point where my last word start
        
    // count the character till you reach a space

    let count = 0
    while(n>=0){
        if(s[n] !== " "){
            n--
            count++
        } else {
            break
        }
    }
    return count
};


console.log(lengthOfLastWord("   fly me   to   the moon  "))

