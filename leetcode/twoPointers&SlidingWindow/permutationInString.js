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

// with  map
// var checkInclusion = function(s1, s2) {
//   if (s2.length < s1.length) return false;
//   // s1 = s1.split('').sort().join('')
//   // s2 = s2.split('').sort().join('')
//   let mapS = {}
//   let mapW = {}
//   let window_length = s1.length

//   // build initial maps
//   for(let i=0; i<window_length; i++){
//     // mapS[s1[i]] = (mapS[s1[i]] || 0) + 1;
//     // mapW[s2[i]] = (mapW[s2[i]] || 0) + 1;  //or
//     if(!mapS[s1[i]]){
//       mapS[s1[i]] = 1
//     } else {
//       ++mapS[s1[i]]
//     }
//     if(!mapW[s2[i]]){
//       mapW[s2[i]] = 1
//     } else{
//       ++mapW[s2[i]]
//     }
//   }
//   let i =0
//   let j = window_length - 1
//   while(j<s2.length){
//     if(isMapSame(mapS,mapW)){
//       return true
//     } else {
//       // remove left character
//       --mapW[s2[i]]
//       if (mapW[s2[i]] === 0) {
//       delete mapW[s2[i]];
//     }
//       ++i

//       // move right
//       ++j
// j can cross the boundary inside the loop, even if the loop condition was safe at the start.
// That’s why we must check again after incrementing.
// We check j < s2.length to avoid accessing an out-of-bounds index, which would otherwise insert an invalid key into the frequency map
//       if (j < s2.length) {  
//       // mapW[s2[j]] = (mapW[s2[j]] || 0) + 1; or
//       if(mapW[s2[j]] === undefined){
//         mapW[s2[j]] = 1
//       } else{
//         ++mapW[s2[j]]
//       }
// }
//     }
//   }
//   return false
// };

// function isMapSame(mapS,mapW){
//   let keys = Object.keys(mapS)
//   for(let i =0;i<keys.length; i++){
//     if(mapS[keys[i]] !== mapW[keys[i]]){
//       return false
//     }
//   }
//   return true
// }


var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) return false;
  let hashS = Array(26).fill(0)  
  let hashW = Array(26).fill(0)  
  let window_length = s1.length

  // build initial maps
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
        // remove left character  
      --hashW[s2.charCodeAt(i) - 97]
      ++i
        // move right
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