// find the minimum value in an array.
// with for of loop
// function findMin(arr) {
//     if (arr.length === 0) return "array is empty"
//     let min = Infinity
//     for (num of arr) {
//         if(num < min) {
//             min = num
//         }
//     }
//     return min
// }

// with for loop
// function findMin(arr) {
//     if (arr.length === 0) return "array is empty"
//     // let min = Infinity
//     let min = arr[0]
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min
// }

// with sort

function min(arr) {
    arr = arr.sort((a, b) => a - b);
    return arr[0];
}

console.log(min[-11,10,-2,-3,-10])

function findMin(arr) {
    return Math.min(...arr)
}
console.log(findMin([-11,10,-2,-3,-10]))