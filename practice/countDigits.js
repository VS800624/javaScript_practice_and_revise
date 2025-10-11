// write a function that return the count of digits in a number 

function countDigits(n){
    if(n===0) return 1
    let count = 0
    n = Math.abs(n)  //or n = n*-1  if n is negative
    while(n>0){
        n = Math.floor(n/10)
        count++
    }
    return count
}

console.log(countDigits(234))