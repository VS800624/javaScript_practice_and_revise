// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

// var twoSum = function(nums, target) {
//      let result = []
//      for (let i = 0;i< nums.length; i++){
//         for(let j=i+1; j< nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//      }
//      return result
// };

// if there are multiple numbers that add up to target 
var twoSum = function(nums, target) {
     let result = []
     for (let i = 0;i< nums.length; i++){
        for(let j=i+1; j< nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push([i,j])
            }
        }
     }
     return result
};

console.log(twoSum([3,2,4],6))

