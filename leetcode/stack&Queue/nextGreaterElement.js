// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 

// Constraints:

// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.

// brute force
// function nextGreaterElement(arr1,arr2){
//     let map = {}
//     for (let i=0; i<arr2.length; i++){
//         let next = -1;
//         // find first greater element
//         for(let j=i+1; j<arr2.length; j++){
//             if(arr2[i]< arr2[j]){
//                 next = arr2[j];
//                 break;
//             }
//         }
//         map[arr2[i]] = next;
//     }
//     let ans = []
//     for(let i=0;i<arr1.length; i++){
//         ans.push(map[arr1[i]])
//     }
//     return ans
// }

// var nextGreaterElement = function(nums1, nums2) {
//     let stack = []
//     let ngeMap = {}
//     let n = nums2.length
//     // last element has no greater element
//     stack.push(nums2[n-1])
//     ngeMap[nums2[n-1]] = -1

//     for(let i =n-2; i>=0; i--){
//       let top = stack[stack.length-1]
//       if(nums2[i] < top){
//         ngeMap[nums2[i]] = top
//       } else {
//         while(stack.length){
//           if(stack[stack.length - 1]< nums2[i]){
//             stack.pop()
//           } else {
//            ngeMap[nums2[i]] = stack[stack.length - 1]
//            break
//           }
//         }
//         if(stack.length === 0){
//           ngeMap[nums2[i]] = -1
//         }
//       }
//       stack.push(nums2[i]) 
//     }

//     let ans = []
//     for(let i =0; i<nums1.length ; i++){
//         ans.push(ngeMap[nums1[i]] )
      
//     }
//     return ans
// };

// or more optimized
var nextGreaterElement = function (nums1, nums2) {
    let stack = []
    let ngeMap = {}
    let n = nums2.length
    stack.push(nums2[n - 1])
    ngeMap[nums2[n - 1]] = -1

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1]
            while (stack.length) {
                if (stack[stack.length - 1] < nums2[i]) {
                    stack.pop()
                } else {
                    ngeMap[nums2[i]] = stack[stack.length - 1]
                    break
                }
            }
            if (stack.length === 0) {
                ngeMap[nums2[i]] = -1
            }
        stack.push(nums2[i])
    }

    return nums1.map((x) => ngeMap[x])
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))

