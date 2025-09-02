// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns if the arrays are equal (i.e., contain the same element in the same order and false otherwise)

//  const arraysAreEqual = (arr1,arr2) => {
//     if (arr1.length !== arr2.length) return false
//     for (i = 0 ; i< arr1.length; i++) {
//         if (arr1[i] !== arr2[i]){
//              return false
//         }
//     }
//     return true

//  }

// or

const arraysAreEqual = (arr1,arr2) =>{
    if (arr1.length !== arr2.length) return false
    
   return arr1.every((curVal,index) => curVal === arr2[index])
}

 console.log(arraysAreEqual([1,2,3], [1,1,3]))

 