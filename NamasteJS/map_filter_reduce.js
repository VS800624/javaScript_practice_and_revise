// const arr = [5,1,3,2,6]

// const output = arr.map((element) => element*2)

// function double(x) {
//     return x * 2
// }

// function triple(x) {
//     return x * 3
// }

// function binary(x) {
//     return x.toString(2)
// }

// const output = arr.map(binary)

// const output = arr.map((element) => element.toString(2))

// function isOdd(x) {
//     return x % 2
// }

// const output = arr.filter(isOdd)
// const output = arr.filter((x) => x%2 )

// function findSum (arr) {
//    let sum = 0
//    for(let i =0; i<arr.length; i++){
//     sum = sum + arr[i]
//    }
//    return sum
// }

// const output = arr.reduce(function(accumulator, current){
//     accumulator = accumulator + current
//     return accumulator
// } , 0)
// const output = arr.reduce((acc, curr) => acc + curr, 0)

// The reduce() method is used to reduce an array into a single value (like a number, object, string, or even another array).
// The reduce() method executes a reducer function on each element of an array and returns a single accumulated result.

// Note: here this function is iterating each value of array so, this reduce basically iterates this function over each and every elements of the array and this current the second parameter represents the current value when we are iterating over the array inside the reduce function and the accumulator the first parameter is used to accumulate the values or accumulate the result what we have to get out of those values which are present in the array , it is like sum variable in the traditional method see above so if we compare this reduce function with the findSum accumulator is sum and current is arr[i]. 
// And the reduce function takes two arguments : first argument is the function and the second argument is any initial value which you need to pass inside this accumulator.


// function findMax(arr){
//     let max = 0
//     for (let i = 0; i< arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr))

// const output = arr.reduce((max, curr) => {
//     if (curr > max){
//         max = curr
//     }
//     return max
// }, 0)

// console.log(output)

const users = [
    {firstName: "akshay" , lastName: "saini", age: 26},
    {firstName: "donald" , lastName: "trump", age: 75},
    {firstName: "elon" , lastName: "musk", age: 50},
    {firstName: "john" , lastName: "doe", age: 26},
]



// const output = users.map((x) => x.firstName + " " + x.lastName)

// console.log(output)

// acc = {26 :2, 75: 1, 50: 1 }
// const output = users.reduce((acc, curr) => {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// }, {} )
// console.log(output)

// name of people age less than 30

// const filterAge = users.filter((x) => x.age < 30 ).map((x) => x.firstName)

const age = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName)
    } 
    return acc
} , [])


console.log(age)

function avg(arr) {
    let sum = 0
    for (i=0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    let avg = sum / arr.length 
    return avg
}
console.log(avg([3,5,7,4]))

// average of array with reducer
const calculateAvg = (arr) => {
    let avg = arr.reduce((acc, curr) => {
        acc = curr + acc 
        return acc
    }, 0)
    return avg/ arr.length

}

console.log(calculateAvg([3,5,7,4]))