// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either '(' or ')'.
// s is a valid parentheses string.

// var removeOuterParentheses = function(s) {
//     let stack = []
//     let result = ""
//     for(let i=0; i<s.length; i++){
//       if(s[i] === "("){
//         stack.push(s[i])
//         // if(stack.length > 1) {
//         //   result = result + s[i]
//         // }  //or
//       result += (stack.length > 1) ? s[i] : ""
//       } else {
//          if(stack.length > 1) {
//           result = result + s[i]
//         } 
//         stack.pop()
//       }
//     }
//     return result
// };

// or without using stack
function removeOuterParentheses(s) {
  let level = 0
  let result = ""
  for(let i=0; i<s.length; i++){
    if(s[i] === "("){
      level++
      if(level>1){
        result = result + s[i]
      }
    } else {
      result += ((level>1)? s[i] : "")
      level--
    }
  }
  return result
}

console.log(removeOuterParentheses("(()())(())"))