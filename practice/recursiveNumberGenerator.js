// Write a recursive function  that generates an array containing consecutive members from a to b (inclusive).

// constraints :
// a and b will be integers.
// a will be less than or equal to b.


function numberRange(a,b, arr =[]) {
    if(a<=b){
        arr.push(a)
        return numberRange(a+1,b,arr)
    }
    return arr
}

console.log(numberRange(0,5))