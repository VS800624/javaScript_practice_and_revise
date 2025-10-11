// Write a function called mean that takes an array of numbers as input and return the mean (average) of those numbers.

// In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of a numbers.


// function mean(arr) {
//     if (arr.length === 0) return 0
//     let sum = 0
//     for (let i = 0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum /arr.length
// }

// with reduce

function mean(arr) {
    if (arr.length === 0) return 0
    let sum = arr.reduce((acc,curr) => {
        acc = acc + curr
        return acc
    },0)
    return sum/arr.length
}

console.log(mean([1,2,3,4,5]))
console.log(mean([-1,0,1]))

