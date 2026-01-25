// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

 

// Example 1:

// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
// Example 2:

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.
 

// Constraints:

// 1 <= k <= nums.length <= 1000
// 0 <= nums[i] <= 105

// we have to find the minimum difference between the Highest and lowest of K scores
// means For each group of k (i.e k can be 1 ,2,3 ) elements: difference = maximum − minimum 
// = last element − first element of that group then we have to find the minimum difference between these difference
var minimumDifference = function(nums, k) {
  // Sort the elements in ascending order
    nums = nums.sort((a,b) => a-b)
    let minDiff = Infinity
    // Iterate through all possible windows of size k 
    for (let i=0; i+k-1<nums.length; i++){
      // Calculate the difference between the highest and lowest values in the current window
        let diff = nums[i+k-1] - nums[i] 
        // Update the minimum difference found so far
        minDiff = Math.min(diff, minDiff)
    }
    return nums.length === 1 ? 0 : minDiff
};

console.log(minimumDifference([9,4,1,7,11],3))