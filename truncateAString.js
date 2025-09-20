// Write a function that takes two parameters?
// str: A string that needs to be truncated.
// maxLength: An integer representing the maximum length of the string allowed.
// The function should truncate the input string str if its length exceeds the specific maxLength. If truncation occurs, the function should abb '...' to the end of the truncated string/


// function truncateString(str,maxLength){
//     let result = ""
//     for(let i = 0; i<str.length; i++){
//         if(i>maxLength){
//          return result = result + "..."
//         } else {
//             result =  result + str[i]
//         }
//     }
//     return result
// }

// function truncateString(str, count) {
//     if (count <= 0) return str
//     else if(str.length > count) {
//         return str.slice(0,count).concat("...")
//     }
// }

function truncateString(str,count){
    return count<=0? str: str.slice(0,count).concat("...")
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))