// Q)1

let newList = [2,3].push(4)

// console.log(newList)
// console.log(newList.push(5))

// 1) .push() adds an element to the array.

// let arr = [2,3]
// arr.push(4)   // modifies arr → arr = [2,3,4]
// But .push() returns the new length of the array, not the updated array.
// let arr = [2,3]
// let result = arr.push(4)
// console.log(result) // 3 (because array length is now 3)
// console.log(arr)    // [2,3,4]
// Your exact line:
// let newList = [2,3].push(4)
// [2,3] is created (a temporary array).

// 2) .push(4) is called → array becomes [2,3,4].
// .push(4) returns 3.
// That 3 is stored in newList.
// The temporary [2,3,4] array is lost (because you never stored it in a variable).
// Correct way if you want the array:
// let newList = [2,3]
// newList.push(4)
// console.log(newList)  // [2,3,4]

// Or without mutating (using spread):

// let newList = [...[2,3], 4]
// console.log(newList)  // [2,3,4]

// So the short answer:
// It stores 3 in newList because .push() returns the new length, not the updated array.

// Q.2) 
function nums(a,b){
    if(a>b) console.log('a is large')
    else console.log('b is large')
    return 
    a+ b
}
console.log(nums(4,2))
console.log(nums(1,2))

// In JavaScript, when you put a return and then a newline, JavaScript automatically inserts a semicolon (;) right after return.
// So your code is actually read like this:
// return;   // function ends here
// a + b;    // dead code, never runs

// The function will always return undefined, because the return ends the function before a + b is ever executed.
// The a + b line is ignored (unreachable code).


// Q.3) 
class Person {
    constructor(){
        this.name = 'Frontend'
    }
}

Person = class AnotherPerson{
    constructor() {
        this.name = "Master"
    }
}

const member = new Person()
console.log(member.name)
// In JavaScript, classes are just special functions, so they can be reassigned like variables. After redefining Person with AnotherPerson, the name Person points to the new class. That’s why the instance has name = "Master" instead of "Frontend"
// we reassigned the variable Person to a new class, the old class is lost, and the new one takes effect.
// Person points to the new class (AnotherPerson).
//  Person is a variable referencing a class. That’s why the original Person class is gone and replaced by the new one.

// "Class declarations create a fixed class tied to its name, while class expressions are flexible and can be assigned or reassigned to variables. That’s why in your example, the first Person class is replaced when you reassign Person to a new class expression."

// Hoisting: Like let/const, class declarations are hoisted but stay in the temporal dead zone. You can’t use them before they appear in code.

// Q.4)
// const name = "Happy Singh"
// console.log(name())  
// will throw a type error like TypeError: name is not a function

// Q.5) 
// let name = "Dev"

// function getName() {
//     console.log(name)
//     let name = "FrontendMaster"
// }

// getName()

// throw a ReferenceError: Cannot access 'name' before initialization because name is declared with let it will go to temporal dead zone
// "This throws a ReferenceError because the inner let name is hoisted to the top of the function but stays in the temporal dead zone until initialized. So console.log(name) tries to access the uninitialized local variable, instead of using the outer name."

// Why Error Happens?

// Hoisting of let:
// Inside the function, let name is hoisted to the top of the function scope but not initialized.
// So before the line let name = "FrontendMaster" executes, the variable name exists but is in the Temporal Dead Zone (TDZ).
// console.log(name):
// At this point, JS looks for name in the local scope first.
// It finds a let name (hoisted but uninitialized).
// Because it’s still in TDZ, you get a ReferenceError, not the outer "Dev".

// Q.6) 
const one = false || {} || null
const two = null || false || ""
const three = [] || 0 || true

console.log(one, two ,three)  // output: {} , "", []
// In JavaScript, we have 6 falsy values:
// false.
// 0 (zero)
// '' or “” (empty string)
// null.
// undefined.
// NaN.

// Q.7) 
// `${(x => x)('I love')} JS`

// Step 1: Arrow Function
// x => x
// This is an arrow function that simply returns whatever you pass in (an identity function).

// Step 2: Function Call
// (x => x)('I love')
// Here, the function (x => x) is immediately called with argument "I love".
// It returns "I love".

// So this whole part evaluates to:
// "I love"
// and the output will be : I love JS

// x → parameter (a placeholder inside the function).

// 'I love' → argument (the actual value you pass when calling the function).

// So when the function runs:

// x = 'I love' (parameter receives the argument).

// Function body x → just returns 'I love'.

// That’s why the template literal becomes:

// `${'I love'} JS` // → "I love JS"

// "This code uses an immediately invoked arrow function inside a template literal. The arrow function (x => x) just returns its argument. It is called with 'I love', which evaluates to 'I love'. Then the template literal produces the string 'I love JS'."
// "Here x is the parameter of the arrow function, 'I love' is the argument passed, and the function simply returns the argument. That value is then inserted into the template literal."

// Q.8
let num = 1
const list = ['happy', "sad", "angry"]
console.log(list[num +=1])
// output will be angry because this num is like num = num + 1 and num is already 1 so num will become 2 and this will be like list[2] so the the element at he index 2 i.e. angry will be printed.


// Q.9)
let randomValue = {name: "lydia"}
randomValue = 23
if (!typeof randomValue === "string"){
    console.log("It's not a string")
} else {
    console.log("Yay it's a string!")
}

// The value of randomValue is changed to the number 23.
// Now randomValue is no longer an object. It’s a number.
// typeof randomValue → gives "number" (because randomValue = 23).
// So effectively:
// typeof randomValue === "number"
// But the code is written as:
// !typeof randomValue === "string"
// Let’s break it:
// typeof randomValue → "number"
// ! "number" → In JavaScript, any non-empty string is truthy.
// So !"number" becomes false.
// Now the condition is:
// false === "string"   // comparing boolean to string
// This will always be false.
// Final Execution
// Since the if condition is false, the else block runs:
// console.log("Yay it's a string!")

// Q.10) 
const animals = {}
let dog = {emoji: "dog"}
let cat = {emoji: "cat"}

animals[dog] = {...dog, name: "Dug"}
animals[cat] = {...cat, name: "Bux"}
console.log(animals[dog])

// In JavaScript, object keys in normal objects ({}) must be strings (or symbols).
// When you use another object (dog) as a key, JavaScript automatically converts it to a string using .toString().
// For any plain object, {}.toString() gives "[object Object]".
// So this line is really:
// animals["[object Object]"] = {emoji: "dog", name: "Dug"}
// Second assignment
// animals[cat] = {...cat, name: "Bux"}
// Same thing: cat also gets converted to "[object Object]".
// This overwrites the previous value stored at "[object Object]".
// So now:
// animals["[object Object]"] = {emoji: "cat", name: "Bux"}
// here console.log(animals[dog])
// dog is again converted to "[object Object]".
// So it fetches:
// animals["[object Object]"]  // => {emoji: "cat", name: "Bux"}