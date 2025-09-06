// const a = {} 
// const b = {key: "b"}
// const c = {key: "c"}

// a[b] = 222
// a[c] = 999

// console.log(a[b])

// In JavaScript, object keys are always strings (or symbols).
// When you use an object as a key (a[b]), JavaScript automatically converts that object into a string: String(b) // "[object Object]"

// When using objects as keys in a plain JavaScript object {}, they get converted to the string "[object Object]".

// So different objects (b, c) end up colliding into the same key.

// If you really want to use objects as keys, you should use a Map:


const a = new Map()
const b = {key: "b"}
const c = {key: "c"}

a.set(b, 222)
a.set(c, 999)

console.log(a.get(b)) // 222
console.log(a.get(c)) // 999
console.log(a) 
///

const lang = {name: "ReactJs"}

function getLib(ver) {
    return `${this.name} version ${ver}`
}

console.log(getLib.call(lang, 18))
console.log(getLib.bind(lang, 18))

// call and bind decides what will be the context of this, when function is called.

// It uses this.name → so the value of this depends on how the function is called.
// It also takes one argument → ver.

// .call(thisArg, arg1, arg2, …)
// → immediately invokes the function with the given this and arguments.

// .bind(thisArg, arg1, arg2, …)
// → does not call the function immediately.
// → Instead, it returns a new function with this permanently set to lang and 18 as the first argument.
