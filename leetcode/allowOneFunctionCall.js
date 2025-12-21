// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called
 

// Constraints:

// calls is a valid JSON array
// 1 <= calls.length <= 10
// 1 <= calls[i].length <= 100
// 2 <= JSON.stringify(calls).length <= 1000

var once = function(fn) {
    let called = false
    return function(...args){
        if(!called){
            called = true
            return fn(...args)
        }
        return undefined
    }
};

fn = (a,b,c) => (a + b + c)
function add(a, b) {
  return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(2, 3)) //  5
console.log(onceAdd(4, 5)) //  undefined
console.log(onceAdd(10, 20)) //  undefined

// “We return a wrapper function that remembers whether the original function has already been called.”
// Why this works (important idea)
// called stays in memory
// Even after once finishes
// Because of closure

// Step 1: once(add) runs one time
// const onceAdd = once(add);

// Inside once:
// let called = false;


//  At this moment:
// called is created once
// Memory is allocated
// Then:
// return function(...args) { ... }
// This returned function captures called.
// Now once finishes execution — but memory is NOT deleted.

// Step 2: Why memory is not deleted?
// Because:
// The returned function still needs called
// JavaScript keeps it alive
// This is called closure.
// 🧠 Think of closure like a backpack 🎒
// The inner function carries:
// called
// fn
// Even after once() is gone.

// 🔁 Step 3: First call to inner function
// onceAdd(2, 3);
// Inner function sees:
// called === false
// So:
// called = true;
// 👉 Memory is updated:
// called → true

// 🔁 Step 4: Second call
// onceAdd(4, 5);
// Now:
// called === true
// So:
// fn is NOT called
// called is NOT reset

// 🧪 Why is called NOT recreated?
// Because this line does NOT run again:
// let called = false;
// It only runs when once(fn) runs — not when the inner function runs.

// Important rule to remember forever
// Variables are created when their function runs, not when inner functions run.

// once(add) runs
// │
// ├── called = false  ← created ONCE
// │
// └── returns inner function
//        │
//        └── remembers called forever

// Because the inner function forms a closure over called, which is created only once when once() executes

// Final takeaway:
// called lives in outer function memory
// Inner function points to that memory
// Memory stays alive as long as inner function exists

// STEP 1: once(add) is called
// const onceAdd = once(add);

// What happens in memory?
// CALL STACK
// ┌───────────────┐
// │ once(add)     │
// └───────────────┘

// HEAP (Memory)
// ┌──────────────────────────┐
// │ fn     → add             │
// │ called → false           │
// └──────────────────────────┘
// Now once returns a function.

// STEP 2: once finishes execution
// Normally, you’d expect:
// “once is done → memory cleared”
// BUT NOT HERE.
// Why?
// Because the returned function still needs fn and called.
// So JavaScript says:
// “I’ll keep this memory alive.”
// This is closure.

// STEP 3: First call
// onceAdd(2, 3);
     
// JS looks for called
// Finds it in closure memory
// called === false
// So it updates memory:
// called → true

// STEP 4: Second call
// onceAdd(4, 5);
// Memory is NOT recreated.
// JS checks the SAME memory:
// called === true
// So function is blocked.

// IMPORTANT RULE (REMEMBER THIS)
// Variables are created when the function runs, not when it is remembered.

// called is created when:
// once(add)

// NOT when
// onceAdd()

// GARBAGE COLLECTION (VERY IMPORTANT)
// When will called be deleted?
// Only when this happens:
// onceAdd = null;
// Now memory looks like:
// (no reference to inner function)
// ↓
// closure memory is unreachable
// ↓
// JavaScript garbage collector deletes it
// ✔ Memory freed
// ✔ called removed