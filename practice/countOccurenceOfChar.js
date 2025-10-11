// Count occurrence of the character

// Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string 


// function countChar(char, word){
//     let count = 0
//     char = char.toLowerCase()
//     word = word.toLowerCase()
//     let arr = char.split("")
//     console.log(arr)
//     for (let i =0 ; i< arr.length; i++){
//         if( arr[i] === word){
//             count = count + 1
//         }
//     }
//     return count
// }


// with reducer

function countChar(word, char){
    char = char.toLowerCase()
    word = word.toLowerCase()
    let count = word.split("").reduce((accumulator, currentChar) => {
        if(currentChar === char){
            accumulator++
        }
        return accumulator
    }, 0)
    return count
}

console.log(countChar("helladsDd", "d"))