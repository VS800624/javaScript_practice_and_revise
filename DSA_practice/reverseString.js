// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(s){
    if (typeof s === "string"){
        s = s.split("")
    }
    for (let i = 0; i< Math.floor(s.length / 2); i++){
        let x = s.length - 1 - i
        let temp = s[i]
        s[i] = s[x]
        s[x] = temp
    }
    return s
}

console.log(reverseString("hello"))