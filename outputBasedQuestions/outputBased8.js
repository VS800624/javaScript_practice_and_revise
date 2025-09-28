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