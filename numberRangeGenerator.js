// Write function that generates an array containing consecutive numbers from a to b (inclusive).


function numberRange(start, end){
    if(end<start) return "second parameter should be greater then the first parameter"
    let arr = []
    for(let i = start; i<=end; i++){
        arr.push(i)
    }
    return arr
}

console.log(numberRange(0,5))