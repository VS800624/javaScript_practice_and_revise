// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

const { subarraySum } = require("./longestSubarrayWithSumK");

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

// var subarraySum = function (nums, k) {
//   let res = 0;
//   let n = nums.length;
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += nums[j];
//       if (sum === k) {
//         res++;
//       }
//     }
//   }
//   return res;
// };

// or more optimized
var subarraySum = function (nums, k) {
  let sum = 0;
  let count = 0;
  let map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) {
      count += map[sum - k];
    }

    // map[sum] = (map[sum] || 0) + 1; //or
    if (!map[sum]) {
      map[sum] = 1;
    } else {
      map[sum]++;
    }
  }

  return count;
};

console.log(subarraySum([1, 2, 1, 2, 1], 3));
