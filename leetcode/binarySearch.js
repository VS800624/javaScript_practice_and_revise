// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function binarySearch(nums,target){
    let left = 0
    let right = nums.length - 1
    while (right>= left){
        let middle = Math.floor((right+left)/2)
        if(target === nums[middle]) return middle
        else if (target < nums[middle]) {
            right = middle - 1
        }
        else { 
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearch([2,5,8,9,13],9))