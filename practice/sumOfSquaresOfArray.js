
// write a function to calculate the sum of squares of all elements in an array. For eg, given  the array [1,2,3], then the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

// with reduce
// const sumOfSquare = (arr) => {
//    return arr.reduce((acc,curr) => {
//         acc = acc + (curr * curr)
//         return acc
//     },0)
// }

// with for loop
// function sumOfSquare(arr) {
//     let sum = 0
//     for(let i = 0; i< arr.length; i++) {
//         sum = sum + (arr[i] * arr[i])
//     }
//     return sum
// }

// with for of loop

function sumOfSquare(arr) {
    let sum = 0
    for(ele of arr) {
        sum = sum + ele * ele
    }
    return sum
}

console.log(sumOfSquare([1,2,3]))