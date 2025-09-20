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



var missingNumber = function(nums) {
    for(let i =0; i<=nums.length; i++){
        if(!nums.includes(i)){
            return i
        } 
    }
};

console.log(missingNumber([3,0,1]))