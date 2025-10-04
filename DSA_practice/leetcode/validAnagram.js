// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false


var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let count1 = {}
  let count2 ={}
   // count frequency in s
  for (let i =0; i<s.length; i++){
    let char = s[i]
    if(count1[char]){
        count1[char] += 1 
    } else{
        count1[char] = 1
    }
  }

   // count frequency in t
  for(let i =0; i<t.length;i++){
    let char = t[i]
    if(count2[char]){
        count2[char] += 1
    } else {
        count2[char] =1
    }
  }
  
  // compare count1 and count2
  let keys = Object.keys(count1)
  for(let i=0;i<keys.length; i++){
    let key = keys[i]
    if(count1[key] !== count2[key]){
        return false
    }
  }
  return true
};

console.log(isAnagram("anagram","nagaram"))

 