// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

// var duplicateZeros = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
      
//       // Shift elements to the right
//       for (let j = arr.length - 1; j > i; j--) {
//         arr[j] = arr[j - 1];
//       }
      
//       // Duplicate zero
//       i++; // Skip next index
//     }
//   }
  
//   return arr;
// };

// more optimize
var duplicateZeros = function (arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      k++;
    }
  }
  // console.log(k)
  let i = arr.length - 1;
  let j = arr.length + k - 1;
  while (i >= 0) {
    if (arr[i] !== 0) {
      if (j < arr.length) {
        arr[j] = arr[i];
      }
      j--;
    } else if (arr[i] === 0) {
      if (j < arr.length) {
        arr[j] = 0;
      }
      j--;
      if (j < arr.length) {
        arr[j] = 0;
      }
      j--
    }
    i--;
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
