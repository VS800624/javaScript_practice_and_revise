// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// var isValid = function(s) {
//     if (s.length% 2 !==0) return false
//     let stack = []
//     for(let i=0; i< s.length; i++){
//         if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
//            stack.push(s[i]) 
//         } else {

//             if(s[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
//             else if(s[i] === "]" && stack[stack.length - 1] === "[") stack.pop();
//             else if(s[i] === "}" && stack[stack.length - 1] === "{") stack.pop();
//             else return false;  // If it doesn't match
//         }
        
//          console.log(stack)
//     }
//     return stack.length === 0
// };

// or
// var isValid = function(s) {
//     if (s.length === 0) return false
//     let stack = []
//     for(let i =0; i<s.length; i++){
//         if(s[i] === "(" || s[i] === "{" || s[i] === "["){
//             stack.push(s[i])
//         } else {
//             let top = stack.pop()
//             if(!top || top === "(" && s[i] !== ")" || top === "{" && s[i] !== "}" || top === "[" && s[i] !== "]"){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// };

// or optimizing the solution
var isValid = function(s) {
    if (s.length === 0) return false
    let stack = []
    let map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    for (let i =0 ; i<s.length ; i++) {
        if(map[s[i]]){
            stack.push(s[i])
        } else {
            let top = stack.pop()
            if(!top || s[i] !== map[top] ){
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid("()[]{}"))