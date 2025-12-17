// Create a function that takes a nested array of arbitrary depth and returns a flattened array where all nested elements are extracted and placed in a single array .

// eg:
// Input : [1,[2,[3,4],5],6]
// Output: [1,2,3,4,5,6]

// with iteration
function flattenArray(arr) {
    // Your implementation
    let stack = [...arr]
    let result = []
    while(stack.length){
      let next = stack.pop()
      // console.log(next)
      // console.log(stack)
      if(Array.isArray(next)){
       stack.push(...next)
      } else {
        result.unshift(next)
      }
    }
    return result
}

// with recursion
// function flattenArray(arr){
//   return arr.reduce ((acc,val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), [])
// }

//For the purpose of user debugging.
console.log(flattenArray([1, [2, [3, 4], 5], 6]))


