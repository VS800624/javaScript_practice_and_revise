// Q) has tag generator 

// You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
// If the length of the input string is greater then 280 characters or if the input string is empty or contains only whitespaces, the function should return false .
// Otherwise, the function should return the generator hash tag prefixed with #.

// 1 solution
// function generateHash (str) {
//     if(str.length> 280 || str.trim().length === 0 ) {
//         return false
//     }
//     let arr = str.split(" ")
//     arr = arr.map((current) => current.replace(current[0], current[0].toUpperCase()))
//     // return arr
//     // console.log(arr)
//     str = `#${arr.join("")}`
//     return str
// }

// 2 solution

// function generateHash (str) {
//     if(str.length> 280 || str.trim().length === 0 ) {
//         return false
//     }
//     let arr = str.split(" ")
//     arr = arr.map((current) => current.charAt(0).toUpperCase() + current.slice(1))
//     str = `#${arr.join("")}`
//     return str
// }

// with for loop
function generateHash (str) {
    if(str.length> 280 || str.trim().length === 0 ) {
        return false
    }
    let arr = str.split(" ")
    let result = ""
    for(let i =0; i< arr.length; i++){
        let word = arr[i]
        if (word.length > 0){
            result += word.charAt(0).toUpperCase() + word.slice(1)
        }
    }
    return `#${result}`;
}


console.log(generateHash("hello js how are you"))