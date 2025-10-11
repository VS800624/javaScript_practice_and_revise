// Write a function to check if a character is uppercase or lowercase

function isUpperCase(char) {
    if (char === char.toUpperCase()) return true
    return false
}

function isLowerCase(char) {
    return char === char.toLowerCase() 
}

// function isUpperCase(char) {
//     if(char.charCodeAt() >=65 && char.charCodeAt() <= 90){
//         return true
//     }
//     return false
// }

// function isLowerCase(char) {
//     if(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) return true
//     return false
// }

console.log(isUpperCase("A"))
console.log(isLowerCase("S"))