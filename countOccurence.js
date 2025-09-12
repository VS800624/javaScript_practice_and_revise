// Write a function to count the occurrences of each element in an array and store the counts in an object . The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

const numbers = [1,2,2,3,4,3,2]

// function occur(arr){
//     const obj = {}
//     for (let i = 0 ; i< arr.length; i++){
//         const num = arr[i]
//         if(obj[num]){
//             obj[num] = obj[num] + 1   // increment if already exists
//         } else {
//             obj[num] = 1      // initialize if doesn't exist
//         }
//     }
//     return obj
// }

// or

// function findCounts(arr){
//     let obj={}
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] in obj){
//              obj[arr[i]]=obj[arr[i]]+1
//         }else{
//                obj[arr[i]]=1
//         }
//     }
//     return obj
// }

// console.log(findCounts(numbers))

//with reduce

function occur(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
}


// with for of loop

// function occur(arr){
//     let obj = {}
//     for (let element of arr){
//         obj[element] = (obj[element] || 0) + 1
//     }
//     return obj
// }

console.log(occur(numbers))