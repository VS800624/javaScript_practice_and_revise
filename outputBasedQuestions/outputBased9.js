// Q.1) 
const user = {
    email: "abc@domian.com",
    updateEmail: email => {
        this.email = email
    }
}

user.updateEmail("latest@email.in")
console.log(user.email)

// this inside the arrow function always refers to parent scope and here in this will be refers to the global (i.e window object)
// arrow function this comes from parent scope.
// But the parent scope is not the object, it’s the global (or undefined in strict mode).
// That’s why user.email is not updated.

// In JavaScript:
// Normal functions → their this depends on how they are called (method call, global call, etc.).
 
// Arrow functions → they do not have their own this. Instead, they "lexically capture" this from the parent scope where they were created.

// Q.2)
const fruits = ["banana", "orange", "apple"]
fruits.slice(0,1)
fruits.splice(0,1)
fruits.unshift("grapes")

console.log(fruits)

// 1) fruits.slice(0,1)
// slice(start, end) does not modify the original array. It returns a new array with elements from start index up to (but not including) end.
// fruits.slice(0,1) → returns ["banana"].
// Important: fruits remains unchanged.

// 2) fruits.splice(0,1)
// splice(start, deleteCount) modifies the original array.
// Here, start = 0 and deleteCount = 1, so it removes 1 element starting from index 0.
// "banana" is removed from fruits.
// After this step: fruits = ["orange", "apple"].

// 3) fruits.unshift("grapes")
// unshift adds one or more elements at the start of the array.
// "grapes" is added to the beginning.
// After this step: fruits = ["grapes", "orange", "apple"].

// shift() → removes first element.
// unshift() → adds element(s) at the beginning.

// Q.3) 
let count = 0
const nums = [0,1,2,3]

nums.forEach(num => {
    if(num) {
        count += 1
    }
})

console.log(count)
// output is 3 because for the 0, if(0) is falsy value and so the loop will go to the else block and the count will not be increased 

// Q.4)
// const person = {
//     name: "FrontendMaster",
//     address: {
//         city: "delhi"
//     }
// }

// Object.freeze(person)
// person.name= null;
// person.address.city = null
// console.log(person)

// when you do Object.freeze(person) you cannot do updation , deletion and addition on that object  here the name will be unchanged but the address will be change because the Object.freeze(person) will only freeze object in only one level means shallow freeze if our object is nested (like here city under address) then Object.freeze() not freeze the all the objects in deep down it only freeze object in one level 

// When you call Object.freeze(person), it freezes only the top-level properties of the object — this is called a shallow freeze.
// You cannot:
// Add new properties (e.g., person.age = 25 → ignored)
// Delete existing properties (e.g., delete person.name → ignored)
// Modify top-level properties (e.g., person.name = null → ignored)
// However, nested objects are not frozen automatically.
// In our example:
// person.name → unchanged because it’s a top-level property (frozen)
// person.address.city → can be changed, because address (the nested object) itself is not frozen
// object.freeze will not work in nested object

//In short:
// “Object.freeze() only freezes the object in one level (shallow freeze). If our object is nested, it won’t freeze the inner objects.”


// Q.5)
// const person = {
//     name: "FrontendMaster"
// }

// Object.seal(person)
// person.name = "BackendMaster"
// person.skill = "JS"
// delete person.name
// console.log(person)
// in object.seal() method you can only do modification(updation) to the object you cannot apply deletion and addition in object

// Q.6)
const handler = {
    set: (target,property,value) => console.log("Added a new property!"),
    get: (target,property) => console.log("Accessed a property!")
}

const person = new Proxy({}, handler)
person.name = "FrontendMaster"
person.name

// the proxy method is used to detect changes in the objects

// A Proxy in JavaScript lets you intercept and customize how operations work on an object.
// It’s like putting a “middleman” between your code and the actual object.
// You can trap actions such as:
// Getting a property (get)
// Setting a property (set)
// Deleting a property (deleteProperty)
// Checking if a property exists (has)
// And many more…

// The handler defines what the proxy should do when someone interacts with the object.
// Here:
// const handler = {
//   set: (target, property, value) => console.log("Added a new property!"),
//   get: (target, property) => console.log("Accessed a property!")
// }
// set → runs when we assign a property
// (e.g. person.name = "FrontendMaster")
// get → runs when we access a property
// (e.g. person.name)

//  Creating the proxy
// const person = new Proxy({}, handler)
// {} → is the target object (the actual object behind the proxy)
// handler → defines the traps (intercepting behavior)
// So now, person is a proxy that wraps {}.

// Setting a property
// person.name = "FrontendMaster"
// This triggers the set trap:
// set: (target, property, value) => console.log("Added a new property!")
// So the console shows:

// Added a new property!
// ⚠️ Notice — the handler only logs the message;
// it does not actually save the value "FrontendMaster" to the target object.
// If you wanted it to behave normally and log, you’d write:
// set: (target, property, value) => {
//   console.log("Added a new property!");
//   target[property] = value;
//   return true;
// }

//  Getting a property
// person.name
// This triggers the get trap:
// get: (target, property) => console.log("Accessed a property!")
// So the console shows:

// Accessed a property!
