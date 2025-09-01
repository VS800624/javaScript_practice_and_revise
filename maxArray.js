// Write a function to find the maximum number in an array.

// function findMax(arr){
//     max = arr[0]
//     for (let i =0; i< arr.length; i++){
//         if (max < arr[i]){
//             max = arr[i] 
//         }
//     }
//     return max
// }

// or 

function findMax(arr){
    return Math.max(...arr)
}

console.log(findMax([1,4,-6,4,3]))
