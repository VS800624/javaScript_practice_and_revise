- When you declare an object or array with const in JavaScript, you cannot reassign the variable, but you can still change (mutate) the content inside it.

# Why This Happens

 - const makes the reference (variable) constant
 - It does NOT make the value immutable
 - Objects and arrays are stored by reference, not by value

How to Make Them Completely Unchangeable
 - You can use Object.freeze()

 so in short : const prevents reassignment, not mutation. Objects and arrays declared with const can still be modified.