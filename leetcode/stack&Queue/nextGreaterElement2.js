// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
 

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109

// var nextGreaterElements = function(nums) {
//     let arr = [...nums, ...nums]
//     let stack = []
//     let n = arr.length
//     let ans = Array(n).fill(-1)

//     stack.push(arr[n-1])
//     ans[n-1] = -1

//     for (let i=n-2; i>=0; i--){
//       while(stack.length){
//         let top = stack[stack.length-1]
//         if(top>arr[i]){
//           ans[i] = top
//           break
//         } else {
//           stack.pop()
//         }
//       }
//       // if(!stack.length){
//       //   ans[i] = -1
//       // }
//       stack.push(arr[i])
//     }
//     return ans.splice(0,n/2)
// };

// or more optimized

function nextGreaterElements(nums){
  let stack = []
  let n = nums.length
  let ans = Array(n).fill(-1)
  stack.push(nums[n-1])
  ans[n-1] = -1

  for(let i = (2*n)-2 ; i>=0; i--){
    while(stack.length){
      let top = stack[stack.length-1]
      if(top > nums[i%n]){
        ans[i%n] = top
        break
      } else {
        stack.pop()
      }
    }
    stack.push(nums[i%n])
  }
  return ans
}

console.log(nextGreaterElements([1,2,1]))