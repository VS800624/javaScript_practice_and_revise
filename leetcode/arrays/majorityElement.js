// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// var majorityElement = function(nums) {
//     let count = {}
    
//     for(let i=0; i<nums.length; i++){
//         let num = nums[i]
//         if(count[num]){
//             count[num] = count[num] + 1
//         } else {
//             count[num] = 1
//         }
//     }
//     console.log(count)
//     let max = 0
//     let majority = 0
//     for(key in count){
//         if(max<count[key]){
//             max = count[key]
//             majority = key
//         }
//     }
//       return Number(majority)
// };

const majorityElement = (nums) => {
    let count = {}
    for (let i =0; i<nums.length; i++){
        let num = nums[i]
        if(count[num]){
            count[num] = count[num] + 1
        }else {
            count[num] = 1
        }
    }

    let max = 0
    let majority = 0
    let keys = Object.keys(count)
    for(let i =0; i<keys.length; i++){
        let key = keys[i]
        if(max< count[key]){
            max = count[key]
            majority = key
        }
    }
    return Number(majority)
} 

console.log(majorityElement([2,3,2]))