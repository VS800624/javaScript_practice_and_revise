
// function showModal() {
//     console.log(showModal.timeout)
// }

// showModal()
// showModal.timeout = 200

// showModal.timeout = 100
// showModal()

function Human(fname, lname) {
    this.firstName = fname
    this.lastName = lname
}

const MrX = new Human ("Mr", "X")
const Rock = Human ("The", "Rock")

console.log(MrX)
console.log(Rock)

// what are the three phases of the event propagation?
// Capturing -> Target -> Bubbling

function getSummary(one, two, three){
    console.log(one)
    console.log(two)
    console.log(three)
}

const fName = "Vansuki"
const age = 878

getSummary `${fName} age is ${age}`

 function checkAge(data) {
    if (data === {age: 18}){
        console.log("You are an adult")
    } else if (data == {age : 18}){
        console.log("You are still an adult")
    } else {
        console.log('Hmm.. No age')
    }
 }
 checkAge({age: 18})

 function getType(...args) {
    console.log(typeof args)
 }

 getType(108)

const obj = {1: "a", 2: "b", 3: "c"}
const set = new Set([1,2,3,4,5])

console.log(obj.hasOwnProperty("1"))
console.log(obj.hasOwnProperty(1))

console.log(set.has("1"))
console.log(set.has(1))

const obj2 = {a: "1", b: "2", a: "3"}
console.log(obj2)
// note : if there are duplicates keys then the key added in the last will be used 
// In JavaScript, an object is basically a collection of key–value pairs.
// Keys must be unique inside one object.
// If you try to use the same key again, the latest value overwrites the previous one.

