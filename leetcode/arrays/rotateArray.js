// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

var rotate = function(nums, k) {
    // to avoid unnecessary rotation+
    k  = k% nums.length
    if(k=== 0) return nums
// removing elements from the last
    let arr = nums.slice(-k) 
    let rest = nums.slice(0, nums.length - k)
    nums.length = 0  //this willl clears the nums array
    nums.push(...arr, ...rest)
    return nums
};

console.log(rotate([1,2,3,4,5,6,7],k=3))