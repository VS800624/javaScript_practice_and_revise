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

console.log(sum(arr.length -1))

function sumOdd(n){
    let isOdd = ((arr[n] %2) !== 0)
    if(n===0){
        return isOdd ? arr[n] : 0
    }
    return (isOdd ? arr[n] : 0 ) + sumOdd(n-1)
}

console.log(sumOdd(arr.length - 1))