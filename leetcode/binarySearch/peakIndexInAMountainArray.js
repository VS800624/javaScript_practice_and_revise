// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

 

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

 

// Constraints:

// 3 <= arr.length <= 105
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

// with linear search
// var peakIndexInMountainArray = function(arr) {
//     for( let i =0; i<arr.length; i++){
//       if(arr[i]>arr[i+1]){
//         return i
//       }
//     }
// };

// with binary search
var peakIndexInMountainArray = function(arr) {
   let l = 0
   let r = arr.length - 1
   while(l<r){
    let m = l + Math.floor((r-l)/2)
    if(arr[m]< arr[m+1]){
      l = m + 1
    } else {  // arr[m]> arr[m+1]
      r = m 
    }  
   }
   return l
};


console.log(peakIndexInMountainArray([0,1,2,5,9,10,7,5,2]))