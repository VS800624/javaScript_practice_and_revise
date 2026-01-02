// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.

 

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.
// Example 2:

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
// Example 3:

// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.
// Example 4:

// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.
 

// Constraints:

// arr is a string representing the array.
// 2 <= arr.length <= 105
// 1 <= size <= arr.length + 1

// var chunk = function(arr, size) {
//     let res = []
//     for (let i =0; i<arr.length; i= i+size){
//         res.push(arr.slice(i, i +size))
//     }
//     return res
// };

// var chunk = function(arr, size) {
//     let res = []
//     let i = 0
//     while(i<arr.length){
//       res.push(arr.slice(i,i+size))
//       i = i + size
//     }
//     return res
// };

// with recursion
var chunk = function(arr, size) {
  if (arr.length === 0 || size<1) return []
    return [arr.slice(0,size), ...chunk(arr.slice(size),size)]
};

console.log(chunk([8,5,3,2,6],6))