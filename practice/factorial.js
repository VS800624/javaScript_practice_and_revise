// Find the factorial of any number

// function factorial(x){
//     if (x<0) return "please enter a positive number"
//     let fact = 1
//     for(i=1;i<=x;i++){
//          fact = fact * i
//     }
//     return fact
// }


// with recursive function

function factorial(num) {
    if(num === 0) return 1
    if (num<0) return "please enter a positive number"
    else {
        return num * factorial(num -1)
    }
}



console.log(factorial(10))

