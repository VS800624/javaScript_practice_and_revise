// function fun(num){
//     if(num == 0){
//         return
//     }
//     console.log(num)
//     num = num -1
//     fun(num)
// }

// let a = 10
// fun(a)

// print n to 1 numbers
// function print(n){
//     if(n<1) return
//     console.log(n)
//     // n = n-1
//     // print(n)  or
//     print(--n)
// }

// print(20)

// print 1 to n numbers
let n = 10
function print(x){
    if(x>n) return 
    console.log(x)
    print(++x)
}

// print(1)

// sum of all the odd numbers in an array using recursion function

let arr = [5,2,0,3,6,7]

function sum (n){
    if(n===0) return arr[n]
    return arr[n] + sum(n-1)
}

function sumArray(arr) {
  function helper(i) {
    if (i === arr.length) return 0
    return arr[i] + helper(i+1)
  }
  return helper(0);
}

console.log(sumArray([1, 2, 3, 4]))

console.log(sum(arr.length -1))

// function sumOdd(n){
//     let isOdd = ((arr[n] %2) !== 0)
//     if(n===0){
//         return isOdd ? arr[n] : 0
//     }
//     return (isOdd ? arr[n] : 0 ) + sumOdd(n-1)
// }

// or
// function sumOdd(n){
//     if (n < 0) return 0

//     if (arr[n] % 2 !== 0) {
//         return arr[n] + sumOdd(n - 1)
//     } else {
//         return sumOdd(n - 1)
//     }
// }


// shorter version
function sumOdd(n){
    if (n < 0) return 0
    return (arr[n] % 2 !== 0 ? arr[n] : 0) + sumOdd(n - 1)
}


console.log(sumOdd(arr.length - 1))