// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

// with linear search
// var searchRange = function(nums, target) {
//   let ans =  []
//   for(let i =0; i<nums.length; i++){
//     if(nums[i] === target){
//       ans.push(i)
//     }
//   }
//  if(!ans[0]){
//   return [-1,-1]
//  } else {
//    return [ans[0],ans[ans.length-1]]
//  }
// };

// with binary search
// var searchRange = function(nums, target) {
//     let l = 0
//     let r = nums.length - 1
//     let ans = [-1,-1]

//     // searching for first position
//     while(l<r){
//       let m = l + Math.floor((r-l)/2)
//       if(nums[m] === target){
//         ans[0] = m
//       }
//       if(nums[m]< target){
//         l = m + 1 
//       } else {
//         r = m
//       }
//     }
    
//     // searching for last position
//     l = 0
//     r = ans.length - 1
//     while(l < r){
//       let m = l + Math.ceil((r-l)/2)
//       if(nums[m] == target) {
//         ans[1] = m
//       }
//       if(nums[m]>target){
//         r = m - 1 
//       } else {
//         l = m
//       }
//     }
//     return ans
// };



console.log(searchRange([5,7,7,8,8,8,8,10],8))