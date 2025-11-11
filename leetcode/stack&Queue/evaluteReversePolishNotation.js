// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
 

// Constraints:

// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

// var evalRPN = function(tokens) {
//     let stack = []
//     for (let i =0; i<tokens.length; i++){
       
//       // if it's a number, push it to stack
//       if(tokens[i]!== "+" && tokens[i]!=="-" && tokens[i]!=="*" && tokens[i] !=="/"){
       
//        stack.push(Number(tokens[i]))
//       }
//         // else it's an operator 
//       else {
//         let a = stack.pop()
//         let b = stack.pop()
//         let val
//         if(tokens[i] === "+") val = b + a
//         else if(tokens[i] === "-") val = b - a
//         else if(tokens[i] === "*") val = b * a
//         else if(tokens[i] === "/") val = Math.trunc(b / a)
//         stack.push(val)
//       }
//     } 
//     return stack.pop()
// };

// or 
// var evalRPN = function(tokens) {
//     let stack = []
//     for (let i =0; i<tokens.length; i++){
       
//       // if it's a number, push it to stack
//       // if(tokens[i]!== "+" && tokens[i]!=="-" && tokens[i]!=="*" && tokens[i] !=="/"){ // or
//       if(!["+","-","*","/"].includes(tokens[i])){

//        stack.push(tokens[i])
//       }
//         // else it's an operator 
//       else {
//         let a = stack.pop()
//         let b = stack.pop()
//         let ans = eval( `${b}  ${tokens[i]}  ${a}`)
//         stack.push(Math.trunc(ans))
//       }
//     } 
//     return Number(stack.pop())
// };

// or
var evalRPN = function(tokens) {
    let stack = []
    let map = {
        "+" : (a,b) => (b + a),
        "-" : (a,b) => (b - a),
        "*" : (a,b) => (b * a),
        "/" : (a,b) => Math.trunc(b / a),
    }
    for (let i =0; i<tokens.length; i++){
        if(map[tokens[i]]){
            let a = stack.pop()
            let b = stack.pop()
            let val = map[tokens[i]](Number(a), Number(b))
            stack.push(val)
     }  else {
        stack.push(tokens[i])
     }
    }
    return Number(stack.pop())
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))