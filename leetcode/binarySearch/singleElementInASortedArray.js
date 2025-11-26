// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105

// with linear search
var singleNonDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i += 2) {
        // If current element has no pair then return it
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

// with map 
// function singleNonDuplicate(nums) {
//   let map = {};

//   // Count frequency
//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 1;
//     } else {
//       map[nums[i]]++;
//     }
//   }

//   // Check which key has value 1
//   let keys = Object.keys(map);
//   for (let i = 0; i < keys.length; i++) {
//     if (map[keys[i]] === 1) {
//       return Number(keys[i]); // convert back to number
//     }
//   }
// }

// with binary search
// var singleNonDuplicate = function(nums) {
//     let l = 0
//     let r = nums.length - 1
//     while(l<=r){
//       let m = l + Math.floor((r-l)/2)
//       // pair is on left side
//       if(nums[m] == nums[m-1]){
//         let leftCount = m - 1 - l
//         // left side has odd no of elements
//         if(leftCount % 2 === 1){
//           r = m - 2
//         } // right side has odd no of elements
//         else {
//           l = m +1
//         }
//       } 
//       // pair is on the right side
//       else if (nums[m] == nums[m+1]) {
//         let leftCount = m - l
//         // left side has odd no of elements
//         if(leftCount % 2 === 1){
//           r = m - 1
//         } // right side has odd no of elements
//         else {
//           l = m + 2
//         }
//       }  // single element left 
//       else {
//         return nums[m]
//       }
//     }
// };

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))