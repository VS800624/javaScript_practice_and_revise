// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Example 3:

// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.


// var findMaxLength = function(nums) {

//     let count = 0;
//     let maxLen = 0;
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {

//         // treat 0 as -1 and 1 as +1
//         if (nums[i] === 0) {
//             count--;
//         } else {
//             count++;
//         }

//         // case 1: if count becomes 0
//         // subarray from 0 to i is balanced
//         if (count === 0) {
//             maxLen = i + 1;
//         }

//         // case 2: if this count appeared before
//         if (map[count] !== undefined) {
//             let len = i - map[count];
//             maxLen = Math.max(maxLen, len);
//         }

//         // case 3: store first occurrence of count
//         else {
//             map[count] = i;
//         }
//     }

//     return maxLen;
// };

// or
var findMaxLength = function(nums) {
    
    // Step 1: This will track the difference between number of 1s and 0s
    let count = 0;

    // Step 2: Store the maximum length of balanced subarray
    let maxLen = 0;

    // Step 3: HashMap to store the first index where a particular count appears
    let map = {};

    // Step 4: Important initialization
    // If count becomes 0 at index i, it means subarray from 0 → i is balanced
    map[0] = -1;

    // Step 5: Traverse the array
    for (let i = 0; i < nums.length; i++) {
      // Step 6: Convert problem into prefix sum idea
        // Treat 0 as -1 and 1 as +1
        if (nums[i] === 0) {
            count--;
        } else {
            count++;
        }

      // Step 7: If this count was seen before
      // it means the subarray between prev index and current index is balanced 
      if (map[count] !== undefined){
        // Calculate length of that subarray
          let len = i - map[count];

        // Update maximum length
          maxLen = Math.max(maxLen, len);
      } else {
        // Step 8: If this count appears for the first time
        // store its index
        map[count] = i
      }
  
    }
    return maxLen
};

console.log(findMaxLength([0,1]))