let a = 108
let b = new Number(108)
let c = 108

console.log(a == b)
console.log(a===b)
console.log(b===c)


// 1. console.log(a == b) → true

// a is a primitive number (108).

// b is a Number object wrapping the value 108.

// == (loose equality) converts objects to primitives before comparing.

// So b gets converted to its primitive value 108.

// Hence 108 == 108 → true.

// 2. console.log(a === b) → false

// === is strict equality → no type conversion.

// a is a primitive number.

// b is a Number object (an object, not a primitive).

// Different types → false.

// 3. console.log(b === c) → false

// b is a Number object.

// c is a primitive number (108).

// === checks both value and type.

// Object (b) !== primitive (c).

// So → false.

// Note:

// == allows type conversion → compares values.

// === requires exact same type and value → primitives and objects are never strictly equal.


let x = new Number(108)
let y = new Number(108)

console.log(x == y)   // false
console.log(x === y)  // false

// 1. x == y → false

// Both x and y are different objects in memory, even though they wrap the same value (108).

// Objects are compared by reference, not by value.

// Since x and y don’t point to the same memory address → false.

// 2. x === y → false

// Same reason as above: === checks both type and reference.

// Both are objects, but different ones.

// So → false.