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