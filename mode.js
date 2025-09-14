// Write a function that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

// function findMode(arr) {
//     let count = {}
//     let max = 0
//     for(let i =0; i<arr.length;i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] === arr[j+1]){
//                 count = count + 1
//             }
//         }
//     }
//     return count
// }

// or
function findMode(arr){
    let count = {}
    let max = 0
    let mode
    for(let element of arr){
        count[element] = (count[element] || 0) + 1
        if(count[element] > max){
            max = count[element]
            mode = element
        }
    }
    return mode
}

console.log(findMode([1,2,2,3,1,4,2]))