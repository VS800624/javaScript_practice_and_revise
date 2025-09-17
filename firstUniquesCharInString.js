// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2




var firstUniqChar = function (s) {
    if (s.length === 0) return 0
    let arr = s.split("")
    let count = {}
   for (let i = 0; i< arr.length; i++){
    let ch = arr[i]
    if(count[ch] === undefined){
        count[ch] = 1
    } else {
        count[ch] = count[ch] + 1
    }
   }
   for ( let i = 0; i< arr.length; i++ ){
    if(count[arr[i]] === 1){
        return i
    }
   }
}

console.log(firstUniqChar("loveleetcode"))