// Write a function that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

function findMode(arr) {
    if (arr.length === 0) return null; // handle empty array
    
    let count = {};
    let mode = arr[0];   // default mode as first element
    let maxCount = 0;    // to track highest frequency
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // count[num] = (count[num] || 0) + 1; // increase frequency
        if (count[num]) {
            count[num] = count[num] + 1;  // already exists → increase by 1
         } else {
            count[num] = 1;               // first time → set to 1
        }
        
        if (count[num] > maxCount) {
            maxCount = count[num];
            mode = num; // update mode
        }
    }
    
    return mode;
}


// or
// function findMode(arr){
//     let count = {}
//     let max = 0
//     let mode
//     for(let element of arr){
//         count[element] = (count[element] || 0) + 1
//         if(count[element] > max){
//             max = count[element]
//             mode = element
//         }
//     }
//     return mode
// }

console.log(findMode([1,2,2,3,1,4,2]))


function mode(arr) {
    if(arr === 0) return "array is empty"
    let count = {}
    let max = 0
    let mode = arr[0]

    for(let i =0; i<arr.length; i++){
        let num = arr[i]
       if (count[num]) {
            count[num] = count[num] + 1;  // already exists → increase by 1
         } else {
            count[num] = 1;               // first time → set to 1
        }
       if(count[arr[i]] > max)
        max = count[arr[i]]
         mode = arr[i]
    }
    return mode
}

console.log(mode([1,2,2,3,1,4,2]))