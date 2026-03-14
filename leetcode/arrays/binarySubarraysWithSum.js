// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// Constraints:

// 1 <= nums.length <= 3 * 104
// nums[i] is either 0 or 1.
// 0 <= goal <= nums.length

var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  let count = 0;
  let map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - goal]) {
      count += map[sum - goal];
    }

    if (!map[sum]) {
      map[sum] = 1;
    } else {
      map[sum]++;
    }
  }

  return count;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
