// Easy
// Topics
// premium lock icon
// Companies
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

// var titleToNumber = function (columnTitle) {
//   let map = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//     I: 9,
//     J: 10,
//     K: 11,
//     L: 12,
//     M: 13,
//     N: 14,
//     O: 15,
//     P: 16,
//     Q: 17,
//     R: 18,
//     S: 19,
//     T: 20,
//     U: 21,
//     V: 22,
//     W: 23,
//     X: 24,
//     Y: 25,
//     Z: 26,
//   };

//   let res = 0;

//   let i = 0;
//   let j = columnTitle.length - 1;
//   while (i < columnTitle.length && j >= 0) {
//     res = res + map[columnTitle[i]] * (26 ** j);
//     i++;
//     j--;
//   }
//   return res;
// };

// or more optimized
// ASCII of "A" = 65 and "a" = 97
var titleToNumber = function (columnTitle) {
  let res = 0

  for(let i =0; i<columnTitle.length; i++){
    value = columnTitle.charCodeAt(i) - 64
    res = res * 26 + value
  }
  
  return res;
};


console.log(titleToNumber("ZY"));

// We treat the Excel column as a base-26 number system where A = 1 to Z = 26. For each character, we multiply the current result by 26 and add its alphabetical value.

// A base-26 number system is a system where we use 26 symbols instead of 10.

// Decimal (normal numbers) → Base 10 → 0 to 9

// Binary → Base 2 → 0, 1

// Excel Columns → Base 26 → A to Z (1 to 26)

// So here, each position has a value of 26ⁿ.

// Base-26 means each position represents powers of 26, and Excel columns use letters A–Z as digits from 1 to 26 instead of 0 to 25.
