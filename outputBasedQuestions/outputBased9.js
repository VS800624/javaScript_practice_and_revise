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