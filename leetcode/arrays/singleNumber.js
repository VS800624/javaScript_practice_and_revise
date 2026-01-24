// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// function singleNum(nums){
//     let hash = {}
//     for(let i =0 ; i<nums.length; i++){
// // storing the values in hash object in keys (values of arrays in nums) and count(as values)
//         if(!hash[nums[i]]){
//             hash[nums[i]] = 1
//         } else{
//             hash[nums[i]]++
//         }
//     }
// // finding the non-duplicate number in hash which has count 1
//     for(let i =0 ; i<nums.length; i++){
//         if(hash[nums[i]] === 1){
//             return nums[i]   // returning the non-duplicate element in nums array
//         }
//     }
// }

// or

function singleNum(arr) {
    let xor = 0
    for(let i = 0; i< arr.length; i++){
       xor = xor ^ arr[i]
    }
    return xor
}

console.log(singleNum([2,2,1,4,4,1,3]))

// XOR is:
// Commutative → a ^ b = b ^ a
// Associative → (a ^ b) ^ c = a ^ (b ^ c)
// Let’s say your array is:
// [4, 1, 2, 1, 2]
// You compute:
// 0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2
// Rearrange it (XOR order doesn’t matter):
// (1 ^ 1) ^ (2 ^ 2) ^ 4 ^ 0
// Now apply XOR rules:
// 0 ^ 0 ^ 4 ^ 0 = 4
// All duplicate pairs become 0, and only the single number remains.