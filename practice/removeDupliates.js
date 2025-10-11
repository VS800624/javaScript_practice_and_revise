// Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.


// const removeDuplicates = (arr) => {
//     return arr.filter((value,index,self) => self.indexOf(value) ===index)
// }

// function removeDuplicates(arr) {
//     const result = []
//     for (let i=0; i< arr.length; i++){
//         if (!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }
//     return result.sort((a,b) => a-b)
// }


// with set
function removeDuplicates(arr){
    return [...new Set(arr)]
}


console.log(removeDuplicates([1,2,4,3,1,2]))