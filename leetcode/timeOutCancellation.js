// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

 

// Example 1:

// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
// Example 2:

// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
// Example 3:

// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
// Output: [{"time": 30, "returned": 8}]
// Explanation: 
// const cancelTimeMs = 100;
// const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.
 

// Constraints:

// fn is a function
// args is a valid JSON array
// 1 <= args.length <= 10
// 20 <= t <= 1000
// 10 <= cancelTimeMs <= 1000

var cancellable = function(fn, args, t) {
 // This line declares a variable named cancellable and assigns it a function value.
 // The function takes three parameters: fn, args, and t.
 // fn is another function that we want to call later.
 // args is an array of arguments that we want to pass to fn when we call it.
 // t is a number of milliseconds that we want to wait before calling fn.

 let timer = setTimeout(() => {
   // This line creates a variable named timer and assigns it the result of calling setTimeout.
   // setTimeout is a built-in function that can execute another function after a delay.
   // The first argument of setTimeout is a function that we want to execute later.
   // The second argument of setTimeout is the delay in milliseconds.
   // In this case, we are using an arrow function as the first argument, which is a shorthand way of writing a function.
   // The arrow function has no parameters and no curly braces, which means it will execute one statement and return its value.
   fn(...args); // This is the statement that the arrow function will execute. It calls fn with the args as parameters.
   // The ... operator is called the spread operator, which can expand an array into individual elements.
   // For example, if args is [2, 3], then fn(...args) is equivalent to fn(2, 3).
 }, t);
 // The result of calling setTimeout is a numeric value that represents the timer ID. We can use this ID to cancel the timer later.

 return function() {
   // This line returns another function from the cancellable function. This function will act as the cancel function.
   // This function has no parameters and no name. It is an anonymous function.

   clearTimeout(timer); // This line calls clearTimeout, which is another built-in function that can cancel a timer created by setTimeout.
   // The argument of clearTimeout is the timer ID that we want to cancel. In this case, we use the timer variable that we created earlier.
 };
};

