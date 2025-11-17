// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.
 

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

// var maxFreqSum = function(s) {
//     let map = {}
// // store all values with freq in a map
//     for (let i =0; i<s.length; i++){
//         if(!map[s[i]]){
//             map[s[i]] = 1
//         } else {
//             map[s[i]]++
//         }
//     }
//     console.log(map)

//     // find the max vowels and consonants inside the map
//     let maxVowel = 0
//     let maxConstant = 0
//     let vowels = ['a','e','i','o','u']
//     for (let i =0; i<s.length; i++){
//         if(vowels.includes(s[i])){
//             if(map[s[i]] > maxVowel){
//                 maxVowel = map[s[i]]
//             }
//         } else {
//             if(map[s[i]]> maxConstant){
//                 maxConstant = map[s[i]]
//             }
//         }
//     }
//     return maxConstant + maxVowel
// }; 


// improving the solution 

var maxFreqSum = function(s) {
    let map = {}
// store all values with freq in a map
    for (let i =0; i<s.length; i++){
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }
    // console.log(map)

    // find the max vowels and consonants inside the map
     let vowels = new Set(['a','e','i','o','u'])
    let maxVowel = 0
    let maxConstant = 0
     let mapKeys = Object.keys(map)
    for (let i =0; i<mapKeys.length; i++){
        if(vowels.has(mapKeys[i])){
            maxVowel = Math.max(maxVowel, map[mapKeys[i]])
        } else {
           maxConstant = Math.max(maxConstant, map[mapKeys[i]])
        }
    }
    return maxConstant + maxVowel
}; 

console.log(maxFreqSum("successes"))
