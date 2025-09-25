// Convert Object to Array and Vice Versa

const obj = {
   name: "John",
   age: 30,
   city: "Pune" 
}

// convert object to an array of key-value pairs
let entries = Object.entries(obj)
console.log(entries)
console.log(...entries)
console.log(entries.flat())

// convert the array of key-value pairs back to an object
let newObj = Object.fromEntries(entries)
console.log(newObj)

// Q) Simple interest
function calculateSimpleInterest(p,r,t){
    let simpleInterest = (p*r*t)/100
    return simpleInterest
}

console.log(calculateSimpleInterest(1000,5,3))