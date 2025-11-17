// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

//Approach:1) With built-in methods:
// function isAnagram(s,t){
//   if(s.length !== t.length) return false
//   return s.split("").sort().join("") === t.split("").sort().join("")
// }

//Approach:2) With map or hashmap: 
// function isAnagram(s,t) {
// if(s.length !== t.length) return false
//   let map1 = {}
//   let map2 = {}
//    // count frequency in s
//   for(let i=0; i<s.length; i++){
//     if(!map1[s[i]]){
//       map1[s[i]] = 1
//     } else {
//       ++map1[s[i]]
//     }
//   }

//    // count frequency in t
//   for(let i=0; i<t.length; i++){
//     if(!map1[s[i]]){
//       map1[s[i]] = 1
//     } else {
//       ++map1[s[i]]
//     }
//   }

//   // compare map1 and map2
//   let keys = Object.keys(map1)
//   for (let i=0; i<keys.length; i++){
//     if(map2[keys[i]] !== map1[keys[i]]){
//       return false
//     } 
//   }
//   return true
// }

// Approach:3) More optimized approach
function isAnagram(s,t){
  if(s.length !== t.length) return false
  let map = {}

  for(let i =0; i<s.length; i++){
    if(!map[s[i]]){
      map[s[i]] = 1
    } else {
      ++map[s[i]]
    }
  }

  for(let i =0; i<t.length; i++){
    if(!map[t[i]] || map[t[i]] < 0){
      return false
    } else {
      --map[t[i]]
    }
  }
  return true
}


console.log(isAnagram("anagram","nagaram"))

 