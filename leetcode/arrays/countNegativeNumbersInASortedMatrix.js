// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

// var countNegatives = function(grid) {
//     let counter = 0
//     for(let i = 0; i < grid.length; i++) {
//         for(let j = 0; j < grid[i].length; j++) {
//             if(grid[i][j] < 0) counter++
//         }
//     }
//     return counter
// };


// or optimizing the solution

// var countNegatives = function(grid) {
//     let count = 0
//     for(let i=0; i<grid.length; i++){
//         for(j=grid[i].length -1; j>=0; j--){
//             if(grid[i][j]<0){
//                 count++
//             } else {
//                 break
//             }
//         }
//     }
//     return count
// };

//optimize with binary search
// var countNegatives = function(grid) {
//     let count = 0
//     const rows = grid.length;
//     const cols = grid[0].length
    
//     for(let i=0; i<rows; i++){
//       let low = 0
//       let high = cols -1
//       let firstNegativeIndex = cols       //default: no negatives

//       while(low<=high){
//         let mid =   low + Math.floor(high-low/2)
//         // let mid =   Math.floor(high+low/2)
        
//         if(grid[i][mid]<0){
//           firstNegativeIndex = mid  // possible answer 
//           high = mid - 1            // search left side
//         } else {
//           low  = mid + 1            // search right side
//         }
        
//       }
//       count = count + cols - firstNegativeIndex
//     }
    
//     return count
// };

// with two pointers
var countNegatives = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let i = 0;          // start from first row
  let j = cols - 1;   // start from last column
  let count = 0;

  while (i < rows && j >= 0) {
    if (grid[i][j] < 0) {
      // all elements below grid[i][j] in this column are negative
      count = count + (rows - i);
      j--; // move left
    } else {
      i++; // move down
    }
  }

  return count;
};


console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))