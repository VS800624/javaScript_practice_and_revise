// Write a function to convert a string to camelCase and snake_case.

// with forLoop
function toCamelCase(str) {
    const words = str.trim().split(" ")
    for (let i =1; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return words.join("")
}

// with map

// function camelCase(str){
//     str = str.trim().split(" ")
//      str = str.map((curEle, index) => {
//         if(index === 0) {
//             return curEle.toLowerCase()
//         } else {
//             return curEle.charAt(0).toUpperCase() + curEle.slice(1).toLowerCase()
//         }
//     })
    
//     return str.join("")
// }

console.log(toCamelCase("hello world javasCriPt"))
// console.log(camelCase("hello world javasCriPt"))

function snakeCase (str) {
    let words = str.trim().toLowerCase().split(' ')
    return words.join("_")
 }

 console.log(snakeCase("hello world javasCriPt"))