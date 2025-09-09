// Write a function to check if a given String starts with a specific sub string.

// function startsWith(str,subStr){
//     subStr = subStr.split("")
//     console.log(subStr)
//     arr = str.split(" ") 
//         if(arr[i] === subStr[i]) {
//             return true
//         }  
//     return false
// }

// function startsWith(str,substr) {
//     return str.startsWith(substr)
// }

function startsWith(str,subStr){
    str = str.split(" ")
    for (let i =0; i< str.length; i++){
        if(str[i].includes(subStr)) return true
    }
    return false
}

// function startsWith(str,subStr) {
//     return str.slice(0,subStr.length) === subStr
// }

console.log(startsWith("hello world","hei"))