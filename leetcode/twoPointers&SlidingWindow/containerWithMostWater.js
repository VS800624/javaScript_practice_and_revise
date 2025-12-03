// endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// with brute force not recommended
// var maxArea = function(height) {
//   let maxWater = 0
//     for(let i =0; i<height.length -1; i++){
//       for(let j=i+1; j<height.length; j++){
//         let area = Math.min(height[i], height[j]) * (j-i)
//         maxWater = Math.max(maxWater, area)
//       }
//     }
//     return maxWater
// };

var maxArea = function(height) {
    let maxWater = 0
    let i = 0
    let j = height.length - 1
    while(i<j){
      let area = Math.min(height[i], height[j]) * (j-i)
      maxWater = Math.max(maxWater, area)
      if(height[i]< height[j]){
        i++
      } else {
        j--
      }
    }
    return maxWater
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))