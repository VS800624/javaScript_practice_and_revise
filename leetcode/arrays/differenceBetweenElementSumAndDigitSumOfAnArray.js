// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

 

// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.
 

// Constraints:

// 1 <= nums.length <= 2000
// 1 <= nums[i] <= 2000

// but this is better
// var differenceOfSum = function(nums) {
//     let digitSum = 0
//     let eleSum = 0
//     for(let i =0; i< nums.length; i++){
//         eleSum = eleSum + nums[i]
//         let n = nums[i]
//         while(n>0){
//           let rem =n%10
//           digitSum = digitSum + rem
//           n = Math.floor(n/10)
//         }
//     }
//     return Math.abs(eleSum-digitSum)
// };

// optimizing
// Why this code is still NOT recommended
// Even though eleSum works correctly, your code has a hidden problem.
// We are destroying the input array
var differenceOfSum = function (nums) {
    let digitSum = 0
    let eleSum = 0
    for (let i = 0; i < nums.length; i++) {
        eleSum = eleSum + nums[i]
        while (nums[i] > 0) {
          console.log(nums[i])
            let rem = nums[i] % 10
            digitSum = digitSum + rem
            nums[i] = Math.floor(nums[i] / 10)
        }
    }
    return Math.abs(eleSum - digitSum)
};

console.log(differenceOfSum([1,15,6,3]))