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

print(1)

// sum of first n numbers

function sum(n){
    if(n===0) return 0
    return n + sum(n-1)
}


console.log(sum(5))