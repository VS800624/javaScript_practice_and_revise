// Q)1

var a =[10,11,12,13,12]
function print(b,...a){
    console.log(a)
}

print(8,9,10,11,12)

// ans [ 9, 10, 11, 12 ] because first it will check the value of a in its lexical scope if it got a (i.e. in parameter ...a is rest operator 9,10,11,12 and print it) and if there is no value of a in its lexical scope then it will check in outer lexical scope and will print a = 10,11,12,13,14

// Q2) Give eg of map
const arr = [1,2,3,4]
const arr1 = arr.map((ele, index,arr) => {
   return  ele = 8
})

console.log(arr1)

// Q3) convert this object into the array with keys and values 
const obj = {
   a:1,
   b:2,
   c:3 
}


console.log(Object.entries(obj))


// Method	                    Converts To	                       Example Output
// Object.keys(obj)	            Array of keys	                        ['a','b','c']
// Object.values(obj)	        Array of values	                        [1,2,3]
// Object.entries(obj)	        Array of [key,value]	        [['a',1],['b',2],['c',3]]
// Object.fromEntries(array)	Object	                            {a:1,b:2,c:3}

// Q.4 Separate number , word and character form this array
const arr2 = [100,"q", "John", 10, 8, "C"]
const number = []
const str = []
const ch = []

arr2.forEach((ele) => {
    if(typeof ele === "number"){
        number.push(ele)
    } else if( ele.length > 1){
        str.push(ele)
    } else {
        ch.push(ele)
    }
})

console.log(number)
console.log(str)
console.log(ch)

// Q.5) how to merge two objects

// Using the Spread Operator
// eg: 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
// or const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }

const o1 = {}
const o2 = {
    name: "john"
}
const o3 = {
    name: "Akshay"
}

o1[o2] = {
    name: "aman"
}
o1[o3] = {
    name: "nikhil"
}

console.log(o1[o2])

// Step 1: Understanding object keys in JavaScript
// In JavaScript, object property keys are always strings (or Symbols).
// When you use something other than a string or symbol as a key, JS automatically converts it to a string.

// Step 2: What happens when you write o1[o2]?
// o2 is an object: { name: "john" }
// When used as a key, JS does:
// String(o2) // => "[object Object]"

// Similarly, o3 is { name: "Akshay" }, and:
// String(o3) // => "[object Object]"

// So effectively, your assignments are:
// o1["[object Object]"] = { name: "aman" };
// o1["[object Object]"] = { name: "nikhil" }; // overwrites previous

// Step 3: Resulting Object o1
// console.log(o1);
// // Output:
// {
//   "[object Object]": { name: "nikhil" }
// }

// Both o2 and o3 point to the same string key, so the first value is replaced by the second.

// Step 4: Accessing the key
// console.log(o1[o2]); // o2 -> "[object Object]"
// JS converts o2 to "[object Object]" and retrieves that property:
// o1["[object Object]"] // { name: "nikhil" }
// That’s why you get { name: "nikhil" }

// Q.6) 

function sum(a,b){
    if(a && b) return a + b
    return function (b){
        return a + b
    }
}

console.log(sum(8,9))
console.log(sum(8)(9))

console.log([] === []) // false
console.log([] == [])  // true

// either it is  == or === no matter what it is in case of non-primitive values (like arrays ,  objects) JavaScript will always compare with the reference (memory)
// All non-primitive values (objects, arrays, functions) are compared by reference, not by value.
// Only when an object is compared with a primitive (object == primitive), JS tries type coercion.

// console.log(100 - '8' - 20) //"1002020"

// let abc = 100
// if(function xyz(){}) {
//     abc = abc - typeof(xyz)
// }
// console.log(abc)

// Always remember:
// typeof undeclaredVariable → "undefined"
// undeclaredVariable → ReferenceError

// This is why in tricky code like:

// if (function xyz(){}) {
//   typeof xyz; // "undefined"
// }

// xyz doesn’t exist in the outer scope, but typeof safely returns "undefined".
// In JavaScript, typeof safely returns 'undefined' for undeclared variables instead of throwing a ReferenceError, because it checks the type without accessing the variable directly.

function abc() {

}
console.log(typeof abc)

// if (function xyz(){}) {
//     console.log(typeof xyz); // "undefined"
// }

// Why typeof xyz is "undefined"

// Function Expression inside parentheses
// Inside if(...), function xyz(){} is treated as a named function expression, not a declaration.
// Named function expressions do not create a variable in the outer scope.
// So outside (or even inside the if block), xyz is not accessible as a variable.

// Parentheses matter:
// If you just write:
// function xyz() {}
// outside parentheses → it’s a function declaration, and xyz exists in the scope.

// But wrapped inside if(...) or assigned to a variable:

// if (function xyz(){}) { ... }
// → JS treats it as a function expression, not a declaration.

// typeof behavior:
// xyz is undeclared in this scope, so typeof xyz safely returns "undefined" (instead of throwing an error).

// Key Takeaways:
// | Scenario                      | Type of `xyz` | `typeof xyz` |
// | ----------------------------- | ------------- | ------------ |
// | `function xyz(){}` outside    | Declaration   | "function"   |
// | `if (function xyz(){}) {...}` | Expression    | "undefined"  |
// | `const x = function xyz(){}`  | Expression    | "undefined"  |

// function abc() {}
// console.log(typeof abc); // "function"

// Global Scope:
// +------------------+
// | abc → function   |
// +------------------+

// Hoisted: Yes
// Accessible everywhere in scope: Yes
// typeof abc → "function"

// if (function xyz(){}) {
//     console.log(typeof xyz); // "undefined"
// }

// if() block:
// +-------------------------+
// | function xyz(){ ... }   |
// | Name 'xyz' exists ONLY  |
// | inside its own function |
// +-------------------------+

// Outer scope:
// xyz → does NOT exist
// typeof xyz → "undefined"

// Hoisted: No
// Accessible outside function: No
// typeof xyz → "undefined"

// Key Points:
// 1) Parentheses or context matters → inside if(...) or assignment → treated as function expression.
// 2) Named function expression name exists only inside the function itself.
// 3) typeof is safe → returns "undefined" for undeclared variables.

// Function declaration → "function"
// Named function expression → name exists only inside itself
// Undeclared → "undefined" (thanks to typeof)

let obj3 = {
    xyz: "john",
    pqr: function (){
        console.log(this.xyz)
    }
}
const c = obj3.pqr
obj3.pqr()
c()

// Method Call: obj3.pqr()
// +------------------+
// | obj3             |
// | └─ pqr() {       |
// |      console.log(this.xyz)  <-- this = obj3
// | }                |
// +------------------+
// Output: "john"


// Standalone Call: c()
// +------------------+
// | c() {            |
// |   console.log(this.xyz)     <-- this = undefined (strict mode)
// | }                |
// +------------------+
// Output: undefined

// Explanation

// obj3.pqr()
// Function is called as a method of obj3.
// this automatically points to obj3.
// So this.xyz → "john"

// c()
// Function is now detached from obj3.
// Called standalone → this defaults to undefined (in strict mode).
// So this.xyz → undefined
