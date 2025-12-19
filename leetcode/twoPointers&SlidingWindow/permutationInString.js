// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters
// a -> 97, A-> 65

var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) return false;
  let hashS = Array(26).fill(0)  
  let hashW = Array(26).fill(0)  
  let window_length = s1.length
  for(let i=0; i<window_length; i++){
    ++hashS[s1.charCodeAt(i) - 97]
    ++hashW[s2.charCodeAt(i) - 97]
  }

  let i =0
  let j = window_length - 1
  while(j<s2.length){
    if(isHashSame(hashS, hashW)){
      return true
    } else {
      --hashW[s2.charCodeAt(i) - 97]
      ++i
      ++j
      ++hashW[s2.charCodeAt(j) - 97]
    }
  }
  return false
};

function isHashSame(hashS,hashW){
  for(let i=0; i<26; i++){
    if(hashS[i] !== hashW[i]){
      return false
    }
  }
  return true
}

console.log(checkInclusion("ab","eidbaooo"))