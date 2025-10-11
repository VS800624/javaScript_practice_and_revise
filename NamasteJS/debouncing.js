let counter = 0
const getData = () => {
    // calls an api and gets Data
    console.log("Fetching Data...", counter++)
}

// only call getData method when the difference of time between the two keypress events is greater than 300ms 
const debounce = function (fn, delay) {
    let timer;
    return  function () {
        let context = this
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, args)
        },delay)
    } 
}

const betterFunction = debounce(getData, 300)  

// So, what will happen is when we type inside the search box, this betterFunction is called on every keypress event. That will trigger the debounce function, which sets a timer of 300ms. If another key is pressed before 300ms finishes, the previous timer is cleared and a new one is started. Only when you stop typing for at least 300ms, the getData function will finally be called.

// debounce method takes a method and returns you again a method which is a better method than what it was 

//  In short:
// Debouncing is used to limit how often a function runs, by making it wait until the user stops triggering it for a given time.
// it ensures that the function only runs after a certain period of inactivity following the last event.

// Throttling: 
// Runs at regular intervals no matter how many times you trigger it.
// Ensures the function runs at most once every X milliseconds.
// Even if  an event happens many times (like scrolling or resizing), throttling makes sure the function runs only once every fixed time period (like once every 500ms).
// Like replying at most once every 5 seconds while they’re talking, even if they keep saying stuff.
// eg: Throttling button click me use kia jata he taki user jitne baar bhi click kare toh vo us delay ke baad hi apply ho.
// What throttling does: ensures that a function runs at most once in a fixed delay (say 2 seconds), no matter how many times the event happens in between.
// In button clicks: if the user clicks the button very fast (10 times in 2 seconds), throttling will make sure the handler runs only once every 2 seconds.

// Important Points:
// If you run getData() directly inside setTimeout, the this will not point to obj anymore. It will default to window (or undefined in strict mode).
// So we save let context = this; and later call:
// This ensures that this inside getData is still the original object.
// Imagine your debounced function is triggered from an event listener:
// When the browser calls it, it passes the event object (KeyboardEvent) as an argument. If you just write getData(), that event is lost.
//  args is basically arguments → it contains everything that was originally passed (like the event).
// .apply(context, args) makes sure getData is called exactly as if it was called normally — with the right this and the right arguments.
// If you just wrote getData(), you would lose both.

// ES6 version of this solution :
// let counter = 0;
// const fetchFunc = (e) => {
//   console.log("Fetching data...", counter++,e);
// };

// const debounce = (functionRef, timeInMS) => {
//   let timer;
//   return (e) => {
//     clearTimeout(timer);
//     timer = setTimeout(()=> functionRef(e), timeInMS);
//   };
// };

// const debounceFunc = debounce(fetchFunc, 300);

// Debouncing is a programming technique used to limit the rate at which a function is executed.

// Example: Imagine a search bar where a function fetches data and updates the frontend on each keypress. We don't want this function to be invoked for every single keystroke. Instead, we want it to trigger only after the user stops typing for at least 300 milliseconds. Debouncing achieves this by waiting for a pause in the user input before executing the function, reducing unnecessary API calls and improving performance.