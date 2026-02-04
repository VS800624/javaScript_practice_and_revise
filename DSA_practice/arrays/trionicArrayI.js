// You are given an integer array nums of length n.

// An array is trionic if there exist indices 0 < p < q < n − 1 such that:

// nums[0...p] is strictly increasing,
// nums[p...q] is strictly decreasing,
// nums[q...n − 1] is strictly increasing.
// Return true if nums is trionic, otherwise return false.

// Example 1:

// Input: nums = [1,3,5,4,2,6]

// Output: true

// Explanation:

// Pick p = 2, q = 4:

// nums[0...2] = [1, 3, 5] is strictly increasing (1 < 3 < 5).
// nums[2...4] = [5, 4, 2] is strictly decreasing (5 > 4 > 2).
// nums[4...5] = [2, 6] is strictly increasing (2 < 6).
// Example 2:

// Input: nums = [2,1,3]

// Output: false

// Explanation:

// There is no way to pick p and q to form the required three segments.

// Constraints:

// 3 <= n <= 100
// -1000 <= nums[i] <= 1000

// var isTrionic = function(nums) {
//    const n = nums.length
//    if(n<4) return false

//   //  try all possible p
//   for(let p = 1; p<=n-2; p++){
//     // try all possible q for each p
//     for(let q=p+1; q<=n-2; q++){

//       // check first segment: 0 to p (strictly increasing)
//       let firstOk = true
//       for(let i =0 ; i<p; i++){
//         if(nums[i]>nums[i+1]){
//           firstOk = false
//           break
//         }
//       }
//       if(!firstOk) continue

//       // check second segment: p to q (strictly decreasing)
//       let secondOk = true
//       for(let i =p; i<q; i++){
//         if(nums[i]<= nums[i+1]){
//           secondOk = false
//           break
//         }
//       }
//       if(!secondOk) continue

//       // check third segment: q to n-1 (strictly increasing)
//       let thirdOk = true
//       for (let i = q; i <n-1; i++){
//        if(nums[i]>=nums[i+1]){
//          thirdOk = false
//         break
//        }
//       }
//       if(thirdOk) return true
//     }
//   }
//     return false
// };

var isTrionic = function (nums) {
  const n = nums.length;
  if (n < 4) return false;

  // Phase 1: strictly increasing
  let i = 0;
  while (i + 1 < n && nums[i + 1] > nums[i]) {
    i++;
  }

  // Must have at least 1 increasing step
  if (i === 0) return false;

  // Phase 2: strictly decreasing
  let j = i;
  while (j + 1 < n && nums[j + 1] < nums[j]) {
    j++;
  }

  // Must have at least 1 decreasing step
  if (j === i) return false;

  // Phase 3: strictly increasing
  let k = j;
  while (k + 1 < n && nums[k + 1] > nums[k]) {
    k++;
  }
  
  // Must have increasing step
   if (k === j) return false;

  // Must reach end
  return k === n - 1;
};

console.log(isTrionic([6, 7, 5, 1]));
