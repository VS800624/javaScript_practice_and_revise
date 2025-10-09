// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique.

function mergeSort(nums) {
    if(nums.length <=1) return nums
    let middle = Math.floor(nums.length/2)
    let left = mergeSort(nums.slice(0,middle))
    let right = mergeSort(nums.slice(middle))
    return merge(left, right)
}

function merge(left, right){
    let res = []
    let i = 0
    let j  = 0
    while (i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    //  logic for adding remaining elements
    return [...res, ...left.slice(i), ...right.slice(j)]
    // while(i<left.length){
    //     res.push(left[i])
    //     i++
    // }
    //   while(j<right.length){
    //     res.push(right[j])
    //     j++
    // }
    // return res
}

console.log(mergeSort([5,1,1,2,0,0]))