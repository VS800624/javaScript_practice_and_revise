- When you declare an object or array with const in JavaScript, you cannot reassign the variable, but you can still change (mutate) the content inside it.

# Why This Happens

 - const makes the reference (variable) constant
 - It does NOT make the value immutable
 - Objects and arrays are stored by reference, not by value

How to Make Them Completely Unchangeable
 - You can use Object.freeze()

 so in short : const prevents reassignment, not mutation. Objects and arrays declared with const can still be modified.

 Arrow functions: Arrow functions are a shorter syntax for writing functions in JavaScript that do not have their own this, arguments, or prototype, and inherit this from the surrounding scope.
 Arrow functions can take parameters like normal functions, but they do not have their own arguments object. To access all passed values, we use rest parameters (...args) instead.

 Where Arrow Functions Are Mostly Used:
   - Callback functions
   - Array methods (map, filter, reduce)
   - React components & handlers
   - Short utility functions

 When NOT to Use Arrow Functions

  - As object methods (because of this)
  - As constructors (new keyword not allowed)
  - When you need arguments 

rest vs spread operator? 
The rest operator is used to collect multiple values into a single array, while the spread operator is used to expand an array or object into individual elements. Both use the same ... syntax but behave differently based on where they are used.
