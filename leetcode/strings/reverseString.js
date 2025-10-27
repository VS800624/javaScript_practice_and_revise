// Write a function to reverse a string without using any in-built methods or libraries. The function should take a string as input and return the reversed string.

// function reverseString(str) {
//     let result = []
//     // let arr = str.split("")
//     console.log(arr)
//     for(let i = arr.length -1; i>=0;i--){
//         result.push(arr[i])
//     }
//     return result.join("")
// }

// or 
function reverseString(str) {
    for(let i = 0; i< Math.floor(s.length/2);i++){
        let j = str.length- 1- i
       let temp = str[i]
        str[i] = str[j]
        str[j] = temp
    }
    return str
}

console.log(reverseString("hello"))


// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseStr(s){
    if(typeof s === "string"){
        s = s.split("")
    }
    for(let i = 0; i< Math.floor(s.length/2);i++){
        let j = s.length- 1- i
       let temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    return s
}

console.log(reverseStr(["h","e","l","l","o"]))