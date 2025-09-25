// Write a function that takes an object as input and determines whether it is empty or not. An empty object is defined as object with no own properties.
// Your task is to implement the function using JS and return a message indicating whether the object is empty or not. 

function isEmptyObject(obj) {
    if (Object.keys(obj).length === 0 ) return "It is empty"
    else return "It is not empty"
}

// or 
// function isEmptyObject(obj){
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             return "it's not empty"
//         }
//     }
//     return "it's empty"
// }

console.log(isEmptyObject({name: ""}))