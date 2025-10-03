// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]


// var findDisappearedNumbers = function(nums) {
//     let n = nums.length
//     let result = []
//     let set = new Set(nums)   // store all existing numbers

//     for (let i = 1; i <= n; i++) {
//         if (!set.has(i)) {    // if i is missing
//             result.push(i)
//         }
//     }
//     return result
// };

// Time Complexity
// new Set(nums) → takes O(n) to insert all elements.
// Loop from 1 to n and check set.has(i) → each lookup is O(1) average, and the loop runs n times → O(n).
//  Total time complexity = O(n) + O(n) = O(n)
// Space Complexity
// Set(nums) stores up to n elements → O(n) extra space.
// result can hold up to n missing numbers → also O(n) in worst case.
//  Total space complexity = O(n)

// var missingNumber = function(nums) {
//     for(let i =0; i<=nums.length; i++){
//         if(!nums.includes(i)){
//             return i
//         } 
//     }
// };
// nums.includes(i) is O(n) in worst case (because it checks element one by one).
// This is inside a loop that runs n+1 times → overall O(n²) time complexity.
// Space complexity: O(1) (no extra data structures).

// or 

var missingNumber = function(nums) {
    let n = nums.length
    let totalSum = n* (n+1) / 2
    let partialSum = 0
    for(let i =0; i<n; i++ ){
        partialSum= partialSum + nums[i]
    }
    return totalSum - partialSum
};
//Overall → O(n) time complexity.
// Space complexity: O(1) (just variables).


console.log(missingNumber([3,0,1]))