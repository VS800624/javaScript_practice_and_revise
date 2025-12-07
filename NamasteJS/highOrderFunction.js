const radius = [3,1,2,5]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius){
    return 2* Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}

// const calculate = function(radius, logic) {
//     const output = []
//     for(let i = 0; i< radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

Array.prototype.calculate = function (logic) {
    const output = []
    for(let i =0; i< this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,diameter))

console.log(radius.map(area))

console.log(radius.calculate(area))

// Higher-order function: A function that takes another function as an argument or returns a function.
// First-class function: A function that can be treated like a normal value in JavaScript.