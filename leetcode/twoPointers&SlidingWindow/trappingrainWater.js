// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 
// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// var trap = function(arr) {
//   let maxL = []
//   maxL[0]  = arr[0]
//   for(let i =1; i<arr.length ; i++){
//     maxL[i] = Math.max(arr[i], maxL[i-1])
//   }

//   let maxR = []
//   maxR[arr.length - 1] = arr[arr.length-1]
//   for(let i = arr.length -2; i>=0; i--){
//     maxR[i] = Math.max(arr[i], maxR[i+1])
//   }

//   // console.log(maxL)
//   // console.log(maxR)
  
//   let ans = 0
//   for(let i =0; i<arr.length; i++){
//     let trappedWater = Math.min(maxL[i], maxR[i]) - arr[i]
//     ans = ans + (trappedWater<0 ? 0 : trappedWater)
//     // ans = ans + Math.max(0, trappedWater)
//   }
//   return ans
// };

// or more optimized
var trap = function(arr) {
  let maxL = []
  let maxR = []
  maxL[0]  = arr[0]
  maxR[arr.length - 1] = arr[arr.length - 1]
  for(let i =1; i<arr.length ; i++){
    maxL[i] = Math.max(arr[i], maxL[i-1])
    maxR[arr.length - 1-i] = Math.max(arr[arr.length - i -1], maxR[arr.length - i])
  }

  // console.log(maxL)
  // console.log(maxR)
  
  let ans = 0
  for(let i =0; i<arr.length; i++){
    let trappedWater = Math.min(maxL[i], maxR[i]) - arr[i]
    ans = ans + (trappedWater<0 ? 0 : trappedWater)
    // ans = ans + Math.max(0, trappedWater)
  }
  return ans
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))