// Write a function that takes a number as a input and returns the sum of its digits.

function sumOfDigits(nums) {
    let sum = 0
    for (let i = 0; i< arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum
}

console.log(sumOfDigits(1,2,3,4))