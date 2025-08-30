// Q) Write a function find longest word that takes a string as input and return the longest word in the string . If there are multiple words, return the first encountered

//* Constraints 
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note: 
//? If the input is empty or contains only whitespace, the function should return an false.
//? The function should ignore loading and trailing whitespaces when determining the longest word.

// function findLongestWord(str) {
//     let arr = str.split(" ")
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (max.length <= arr[i].length) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// corner case if the string has two words with the same length then

function findLongestWord(str) {
    let arr =str.split(' ')
    let max = arr[0]
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i]       // update the longest word
            result = [arr[i]]  // reset result
        } else if (arr[i].length === max.length) {
            result.push(arr[i]) // add word with same length
        }
    }
    return result 
}

// with for of loop

// function findLongestWords(str) {
//     let arr = str.split(" ")
//     let maxLen = 0
//     let result = []

//     for (let word of arr) {
//         if (word.length > maxLen) {
//             maxLen = word.length
//             result = [word]   // reset result with this word
//         } else if (word.length === maxLen) {
//             result.push(word) // add word with same length
//         }
//     }
//     return result
// }

// or

// function findLongestWord(str) {
//     if (str.trim().length === 0){
//         return false
//     }

//     // // words = str.split(" ").sort((a,b) => a.length - b.length)
//     // words = str.split(" ").sort((a,b) => b.length - a.length)
//     // console.log(words)
//     // // return words.at(-1)
//     // return words[0]

//     // or 

//     let words = str.split(" ")
//     return words.reduce((accumulator, curWord) => (curWord.length > accumulator.length ? curWord : accumulator), "" )
// }

// console.log(findLongestWord("Watch Full Metal Alchemist Brotherhood"))

// or 

// function findLongestWord(str) {
//     let val = 0;
//     let largest = ''
//     let arr = str.split(" ")

//     arr.map((word) => {
//          if(word.length> val) {
//             largest = word
//             val = word.length
//          }
//     })
//     return largest
// }



console.log(findLongestWord("I love cats and dogs"))

