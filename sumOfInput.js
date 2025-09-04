// Write a function that takes a number as a input and returns the sum of its digits.

// function sumOfDigits(nums) {
//     let sum = 0
//     for (let i = 0; i< arguments.length; i++){
//         sum = sum + arguments[i]
//     }
//     return sum
// }

// or
// function sumOfDigits(num){
//     let arr = num.toString().split("")
//     return arr.reduce((acc, curr) => {
//       return  acc = acc + Number(curr)
//     }, 0)
// }

function sumOfDigits(num) {
    let str = num.toString();  // convert number to string
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]); // convert each digit back to number and add
    }

    return sum;
}


console.log(sumOfDigits(1234))