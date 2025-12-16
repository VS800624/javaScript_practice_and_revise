// Given the array of numbers, return the number in the array. If the array is empty return , return null

// Constraints:
// Input must be an array of finite numbers
// Return false for non-array inputs
// Return for arrays containing non-numbers values 
// return false for the arrays containing Nan, Infinity, -Infinity 
// For an empty array, return null

// function findSmallest(arr) {
//   // your solution here
//   if(!Array.isArray(arr)) return false
//   if (arr.length === 0) return null
//   let min = Infinity
//   for (let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return false
//     if (arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   return min
// }
// Time complexity = O(n)
// Space complexity = O(1)

// Using Math.min with spread operator
// function findSmallest(arr) {
//   // your solution here
//   if(!Array.isArray(arr)) return false
//   if(!arr.every(x => typeof x === "number" && Number.isFinite(arr))) false
//   return arr.length === 0 ? null : Math.min(...arr)
// }

// Time complexity = O(n)
// Space complexity = O(n)  due to spread

// using reduce
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum); // 10


function findSmallest(arr) {
  // your solution here
  if(!Array.isArray(arr)) return false
   if (arr.length === 0) return null
  if(!arr.every(x => typeof x === "number" && Number.isFinite(arr))) false
  return arr.reduce((min,x) => {
    return x < min ? x : min
  }, arr[0])
}

// Time complexity = O(n)
// Space complexity = O(1)

console.log(findSmallest([3,1,2,0]))