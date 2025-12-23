// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.

// with inbuilt method
// var toLowerCase = function(s) {
//     return s.toLowerCase()
// };

// without in-built method
var toLowerCase = function(s) {
  let str = ""
    for(let i=0 ; i<s.length; i++){
      let charCode = s.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90){
          str = str + String.fromCharCode(charCode + 32)
            // console.log(str)
        } else {
          str = str + s[i]
        } 
    }
    return str
};

console.log(toLowerCase("Hello"))

// MUST-KNOW ASCII RANGES
// Type	Range
// Uppercase	65 – 90
// Lowercase	97 – 122
// Digits	48 – 57