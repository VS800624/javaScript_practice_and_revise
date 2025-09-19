// Write a function that takes two parameters
// str: A string that needs to be repeated.
// num: An integer representing the number of times the string should be repeated.
// The function should repeat the input string str the specific number of times num and return the resulting string 


// function repeatString(str, num){
//     let repeat = []
//     for (let i = 0; i<num; i++) {
//         repeat.push(str)
//     }
//     return repeat.join("")
//     // console.log(repeat)
// }

// or 
// function repeatString(str, num) {
//     let repeat = ""
//     for (let i =0; i<num; i++){
//         repeat = repeat + str
//     }
//     return repeat 
// }

// or
function repeatString(str, num) {
    let res = str
    for (let i =1; i<num; i++){
        res = res + str
    }
    return res
}

console.log(repeatString("abc", 2))  // Output: "abcabcabcabcabc"

// Constraints: 
//  The input string str will contain only alphanumeric characters and punctuation marks.
// The input number num will be non-negative integer.
// The output string length should not exceed the length of str multiplied by num.