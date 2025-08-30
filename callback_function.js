console.log(false == [])
console.log(false == ![])

let user = {name: "Virat Kholi"}
const userList = [user]
user = null
console.log(userList)

// (function() {
//     var a = b = 3
// })();
// console.log("a defined?" + (typeof a !== 'undefined'))
// console.log("b defined?" + (typeof b !== 'undefined'))

// function x(y){

// }
// x(function y(){

// })
// here y is the callback function y is not called here you give the responsibility of y function to another function it's like you passed this y inside x now it is upto x when it wants to call this y that is like this function y is called by sometime later in your code that's why it is known callback function

function attackEventListeners() {
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count)
    })
}



attackEventListeners()

// Note: Here the callback function xyz is forming the closure with its outer scope.

// Q) Why do we need to remove event listeners ?
// First of all event listeners are heavy means it takes memory. So whenever you attack a event listener it kind of forms the closure with this count (lexical environment). 
// When you add an event listener to an element (e.g., button.addEventListener('click', callback)), JavaScript keeps the listener in memory so it can run when the event (like a click) occurs.
// Problem: If the listener is no longer needed (e.g., the button is removed from the page or you stop tracking clicks), it still stays in memory unless explicitly removed. This can consume unnecessary resources, especially in large applications with many listeners.