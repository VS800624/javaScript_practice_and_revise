// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1
// nums = [1, 2, 3, 1]
// k = 3


// Check pairs:

// nums[0] = 1 and nums[3] = 1 → values are equal.

// Distance: abs(0 - 3) = 3 → which is <= k.

// So, return true because the condition is satisfied.


// var containsNearbyDuplicate = function (nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
//                 return true;
//             }
//         }
//     }
//     return false
// };


// var containsNearbyDuplicate = function (nums, k) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])){
//             let lastIndex = map.get(nums[i])
//             if(i - lastIndex <= k) return true
//         }
//         map.set(nums[i],i)
//     }
//     return false
// };

// or
var containsNearbyDuplicate = function (nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            let lastIndex = map[nums[i]]
            if (i - lastIndex <= k) return true
        }
        map[nums[i]] = i
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1],3))