// You are given a string s consisting of lowercase English letters.

// A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

// Return the length of the longest balanced substring of s.

// Example 1:

// Input: s = "abbac"

// Output: 4

// Explanation:

// The longest balanced substring is "abba" because both distinct characters 'a' and 'b' each appear exactly 2 times.

// Example 2:

// Input: s = "zzabccy"

// Output: 4

// Explanation:

// The longest balanced substring is "zabc" because the distinct characters 'z', 'a', 'b', and 'c' each appear exactly 1 time.​​​​​​​

// Example 3:

// Input: s = "aba"

// Output: 2

// Explanation:

// ​​​​​​​One of the longest balanced substrings is "ab" because both distinct characters 'a' and 'b' each appear exactly 1 time. Another longest balanced substring is "ba".

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

// var longestBalanced = function (s) {
//   ans = 0;
//   for (let i = 0; i < s.length; i++) {
//     let freq = {};
//     for (let j = i; j < s.length; j++) {
//       if (freq[s[j]]) {
//         freq[s[j]] += 1;
//       } else {
//         freq[s[j]] = 1;
//       }
//       let values = Object.values(freq);
//       if (new Set(values).size === 1) {
//         let length = j - i + 1;
//         ans = Math.max(ans, length);
//       }
//     }
//   }
//   return ans;
// };

var longestBalanced = function (s) {
  let ans = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let freq = {};
    let minFreq = Infinity;
    let maxFreq = 0;

    for (let j = i; j < n; j++) {
      if (freq[s[j]]) {
        freq[s[j]] += 1;
      } else {
        freq[s[j]] = 1;
      }

      // Update max
      maxFreq = Math.max(maxFreq, freq[s[j]]);

      // Recalculate min (only over existing chars)
      minFreq = Infinity;
      for (let key in freq) {
        minFreq = Math.min(minFreq, freq[key]);
      }

      // Check balanced
      if (minFreq === maxFreq) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
};


console.log(longestBalanced("zzabccy"));
