// Problem

// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is equal to k.

// If no such subarray exists, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1
// Input:
// nums = [1, 2, 3, 1, 1, 1, 1]
// k = 3

// Output:
// 3

// Explanation:
// The subarrays with sum = 3 are:
// [1,2], [3], and [1,1,1]

// The longest subarray is [1,1,1] with length = 3.
// Example 2
// Input:
// nums = [1, -1, 5, -2, 3]
// k = 3

// Output:
// 4

// Explanation:
// The subarray [1, -1, 5, -2] has sum = 3 and length = 4.
// Example 3
// Input:
// nums = [-2, -1, 2, 1]
// k = 1

// Output:
// 2

// Explanation:
// The subarray [-1, 2] has sum = 1.
// Constraints

// 1 <= nums.length <= 10^5

// -10^4 <= nums[i] <= 10^4

// -10^9 <= k <= 10^9

// function longestSubarray(arr, k) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // Sum of subarray from i to j
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       // console.log(sum)
//       // if subarray sum is equal to k
//       if (sum === k) {
//         // find subarray length and update result
//         let subLen = j - i + 1;
//         res = Math.max(res, subLen);
//       }
//     }
//   }
//   return res;
// }

// or with hashmap better solution
// function longestSubarray(arr, k) {
//   const preSumMap = new Map()
//   let sum = 0;
//   let map = {}
//   let maxLen = 0
//   for (let i =0; i<arr.length; i++){
//     sum += arr[i]
//     // if sum equals to k
//     if(sum === k){
//       maxLen = Math.max(maxLen, i+1)
//     }
//     let rem  = sum - k
//     // check if remainder already exists
//     if (preSumMap.has(rem)) {
//       let len = i  - preSumMap.get(rem)
//       maxLen = Math.max(maxLen, len)
//     } 
//     // store if prefix sum only first time
//     if(!preSumMap.has(sum)){
//       preSumMap.set(sum,i)
//     }
//   }
//   return maxLen;
// }

// best solution
function longestSubarray(arr, k) {
  let left = right = 0
  let  sum = arr[0]
  let maxLen = 0
  while(right < arr.length){
    while(left <= right && sum > k){
      sum -= arr[left]
      left++
    }
    if (sum == k){
      maxLen = Math.max(maxLen, right - left + 1)
    }
    right++
    if (right < arr.length) sum += arr[right]
  }
  return maxLen;
}


console.log(longestSubarray([1,2,3,1,3,4,5,6,7,1,2,4], 6));
