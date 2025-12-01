// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// with the inbuilt method not recommended
var strStr = function(haystack, needle) {
    if(needle === "") return -1
    return haystack.indexOf(needle)
}

// without using inbuilt method (sliding window)
var strStr = function(haystack, needle) {
    if(needle === "") return -1
    let n = haystack.length
    let m = needle.length
    for(let i =0 ; i<=n-m; i++){
      // check if needle === window
      let j = 0
      for ( j =0; j<m; j++){
        if(haystack[i+j] !== needle[j]){
          break
        }
      }
      if(j===m){
        return i
      }
    }
    return -1
}

console.log(strStr("sadbutsad","sad"))