
let  num = 20 ;
console.log(num + "20");
console.log(++num);


function plusplus(num) {
    let n = Number(num);
    n = n+ 1;
    return n
}

// function makeIce(size, money) {

// }

// function makeCream (flavor, color, temp=0, name) {

// }

// console.log(makeIce.length);
// console.log(makeCream.length)

// const date = new Date();
// console.log(date.getFullYear())

// type of null is object  
// let a;
// console.log(typeof a);

// let aa = undefined
// console.log(typeof aa)

// const a = [1,2,3,4]
// a.pop();

// let  sum = 0 
// let i = 1;
// while (i <=10) {
//     sum = sum + i
//     i++
// } 
// console.log(sum)


// let js = "JavaScript" 
// for (let char of js) {
//     console.log(char)
// }

// for (let i = 1; i<=20; i++) {
//     if(i % 2 != 0) {
//         console.log(i)
//     }
// }

// let i = 5;
// do{ 
//     console.log(i)
//     i--
//  }
// while(i>0)

// let fact = 1
// for (i= 5; i>0; i--){
//    fact = fact * i
// }
// console.log(fact)

// pattern ques
// for (let i=1; i<4; i++){
//     let row = ""
//     for (let j= 1; j<4; j++){
//         row = row + " " + j // or row = row + `${j} `
//     }
//     console.log(row)
// }

// let hold = 1;
// for (let i=1; i<4; i++){
//     let row = "";
//     for (let j= 1; j<4; j++){
//         row = row + " " + hold 
//         hold++
//     }
//     console.log(row)
// }

// let arr = [1,2,3,4]
// for (let i = arr.length-1 ; i>=0; i-- ){
//     console.log(arr[i])
// }

// reverse the array
// let arr = [1,2,3,4]
// for (let i = 0; i< Math.floor(arr.length/2); i++){
//     let temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp
// }
// console.log(arr)

// let i = 1;
// while(i<=100) {
//     if(i % 5 === 0 ){
//         console.log(i)
//     }
//     i++
// } 

// let obj = {
//     name: "John ",
//     city: "kashipur",
//     phone: 893893
// } 

// for (let key in obj) {
//     console.log(key)
// }
// for (let key in obj) {
//     console.log(obj[key])
// }

// var arr= ["a", "b" , "c", "d"]
// arr.forEach((value) =>  {
//     console.log(value)
// }) 

// add two elements to the array at the start using unshift
// let arr = [1,2,3,4,5];
// arr.unshift(0)
// arr.unshift(-1)

// console.log(arr)

//  remove the last element in the array
// let arr = [1,2,3,4,5]
// arr.pop();
// console.log(arr) 
// use slice to extract the first three elements of an array
// let arr = [1,2,3,4,5]
// console.log(arr.slice(2,3))   // slice(kaha se , kaha tak nikalne hai)

// find the index of the specific element in an array using indexOf
// let arr = [1,2,3,4,5]
// arr.indexOf(4)
// let arr2 = [6,7]
// console.log(arr.concat(arr2))

// sort an array of numbers [4,2,9,1] in ascending order.

// let arr = [1,24,6,40,5] 
// bubble short 
// for (let i = 0 ; i< arr.length-1; i++){
//     for(let j= 0 ; j < arr.length-1; j++){
//         if(arr[j] > arr[j+1] ) {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)

// Write a program that creates a copy of an array without mutating the original
// let arr = [1,24,6,40,5] 
// let arr2 = arr it is a mutation  because arr ka copy nahi reference chale gaya
// let arr2 = [...arr]   // 1st method
// let arr2 = []            // 2nd method
// arr.forEach((value) => {
//     arr2.push(value)
// })
// console.log(arr2)   


// function to check even or odd
function oddEven (value) {
    if (value % 2 == 0){
        console.log(value + " is a even no.")
    } else {
        console.log(value + " is a odd no.")
    }
}

function circleArea(radius) {
    area = Math.round(Math.PI * radius * radius)
    console.log(area)
}

// write a function that accepts an array and returns the sum of its elements.
// function array(arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum)
// }
// array([1,2,3,4])

//  write a function that checks if a string starts with a specific character 
// function checkChar(str, char) {
//    return  str.toLowerCase().startsWith(char.toLowerCase());
// }

// console.log(checkChar("Harsh", "d"))

// write the function to find the maximum of two numbers
function max(a, b){
 if (a< b) {
    console.log(`${b} is greater than ${a}`)
 } else if(b< a) {
    console.log( `${a} is greater than ${b}` )
 } else {
    console.log("both are equal")
 }
}
// max(5,4)

//  Create a function that takes a num and returns its factorial
function getFact(num) {
    let fact = 1
    for (i = 1 ; i <= num ; i++) {
        fact = fact * i
    }
    return fact
}
// console.log(getFact(5))

// Create a function that accepts a string and returns its reverse
function strReverse(str) {
    
}



