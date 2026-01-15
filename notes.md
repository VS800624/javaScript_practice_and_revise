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


What is Event Propagation?
When you click on an element inside another element (like a button inside a div), the event doesn’t stay at one element.
It travels through the DOM. This traveling is called event propagation.

There are two main phases:
 1) Event Capturing (Trickling)
 2) Event Bubbling

 1) Event Bubbling (Default Behavior): 
 In event bubbling, the event starts from the target element and moves upwards to its parents.

 2) Event Capturing (Trickling Phase):
 In event capturing, the event starts from the top (document) and goes down to the target element.
 To enable capturing, you must pass true as the third parameter.

  # Methods that CHANGE the original array (mutable)
    push()      // add at end
    pop()       // remove from end
    shift()     // remove from start
    unshift()   // add at start
    splice()    // add/remove/replace
    sort()      // sort array
    reverse()   // reverse array
    fill()      // fill with static value
    copyWithin()// copy part of array within itself

  # Methods that DO NOT change the original array (immutable)
      map()
      filter()
      reduce()
      slice()
      concat()
      flat()
      flatMap()
      includes()
      indexOf()
      find()
      findIndex()
      some()
      every()
      join()
      toString()

Objects are usually declared with const because we don’t want to change the reference, only the data inside it.
Objects are declared with const to prevent reassignment of the object reference while still allowing modification of its properties.

const makes the reference immutable, not the object
To make object truly immutable, you need:
Object.freeze(obj);
