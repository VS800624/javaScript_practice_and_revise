// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// var groupAnagrams = function(strs) {
//     let map = {}
//     for (let i =0; i<strs.length; i++){
//       let sortedString = strs[i].split("").sort().join("")
//       if(!map[sortedString]) {
//         map[sortedString] = [strs[i]]
//       } else {
//         map[sortedString].push(strs[i])
//       }
//     }
//     return [...Object.values(map)]
// };

// or more optimized solution

function groupAnagrams(strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    // create key
    let s = strs[i];
    let freqArr = Array(26).fill(0);
    for (j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }
    let key = "";
    for (let k = 0; k < 26; k++) {
        // key = key + String.fromCharCode(k) + freqArr[k]; //or
        key = key + String.fromCharCode(97+k) + freqArr[k];
    }

    // fill the map
    if(!map[key]) {
      map[key] = [s]
    } else {
      map[key].push(s)
    }
  }
  return [...Object.keys(map)]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
