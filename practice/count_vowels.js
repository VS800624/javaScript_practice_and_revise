//Q) count the no. of vowels present in the string

// const str = "Hey Js You are amazing";
// const vowels = ['a', 'e', 'i','o', 'u'];

// function countVowels(data){
//     let count = 0
//     data.toLowerCase().split('').forEach((char) => {
//         if (vowels.includes(char)) {  // or vowels.includes(char) && count++
//             count++
//         }
//     })

//     return count;
// }

// const numOfVowels = countVowels(str)
// console.log(numOfVowels)

// with for of loop
//  const countVowels = (str) => {
//     let vowels = ['a','e', 'i', 'o', 'u']
//     let count = 0
//     let arr = str.split('')
//     for (let char of arr){
//         if(vowels.includes(char.toLowerCase())){
//             count ++
//         }
//     }
//     return count
//  }

//  with reduce 
let vowels = ['a','e','i','o','u']
// function countVowels(str){
//    return  str.toLowerCase().split('').reduce((acc, curr) => {
//         if (vowels.includes(curr)){
//            acc = acc + 1
//         }
//         return acc
        
//     }, 0)
// }

// with for loop
function countVowels(str) {
    let count = 0
    str= str.toLowerCase().split('')
     for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
        count++;
    }
  }
  return count
}
 
console.log(countVowels("Helloo world"))
 