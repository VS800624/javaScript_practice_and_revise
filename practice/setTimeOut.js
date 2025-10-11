// console.log("Start")


// setTimeout(function cb() {
//     console.log("Callback")
// }, 0)

// console.log("End")

// let startDate = new Date().getTime()
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime()
// }
// console.log("While expires")


console.log("Start")

function cb() {
    console.log("Callback")
}

setTimeout(cb, 0)

console.log("End")