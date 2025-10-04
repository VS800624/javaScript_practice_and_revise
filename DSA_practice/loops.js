// for(let i = 0; i<= 20; i++){
//     console.log("Hello World" + i )
// } 

// for (let i=5; i< 4; i++){
//     console.log("Hello World" + i);
// }

// function greet(i) {
//     console.log("Namaste" + i)
// }

// for(let i=0; i<10; i++ ){
//     greet(i)
// }

// print all the even numbers in the array
// let arr = [10, 8, 32, 3, 9, 12];

// for (i = 0; i< arr.length; i++){
//     if (arr[i] % 2 ==0){
//         console.log(arr[i])
//     }
// }

// let i = 0
// while (i < 5) {
//     console.log("Hello World")
//     i++;
// }

// write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function searchElement(array, x) {
for (i=0; i<array.length; i++){
    if (array[i] == x){
        return i;
    } 
}
return -1
}
// let array = [4, 2, 0, 10, 8, 40];
// let result = searchElement(array, 10)
// console.log(result)

// searchElement[array, 4] => 0
// searchElement[array, 10] =>  3

// Write a function that returns the number of negative numbers in an array

function countNegatives(array, ) {
    let count = 0;
    for (i = 0; i < array.length ; i++){
        if (array[i] < 0){
           count = count + 1
        }
    }
    return count;
}

// let array = [2, -9, 17, 0, -10, -4, 8]

// result = countNegatives(array)
// console.log(result)

// Write a function that returns the largest number in an array

 function findLargest(arr){
    // let l = -Infinity;
    let l = arr[0]
    for (i = 0; i< arr.length; i++){
        if (arr[i] > l) {
            l = arr[i];
        }
    }
    return l;
 }

// let arr = [5, 0, 100, 8, 17, 1]
// let arr = [-4, -6, -10]
// result = findLargest(arr)
// console.log(result) 

// Write a function that return the smallest number in an array

function findSmallest(arr){
    s = +Infinity;  // INT_MIN
    // let s = arr[0]
    for (i = 0; i < arr.length; i++){
        if (arr[i]< s){
            s = arr[i]
        }
    }
    return s
}

let arr  = [5, 3, 2, -2 , -1]
let result = findSmallest(arr)
console.log(result)