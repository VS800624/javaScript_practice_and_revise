document.querySelector("#grandparent")
.addEventListener('click',() => {
    console.log("Grandparent Clicked")
},true);  // event capturing

document.querySelector("#parent")
.addEventListener('click',(e) => {
    console.log("Parent Clicked")
    // e.stopPropagation()
},false);  //  event bubbling

document.querySelector("#child")
.addEventListener('click',() => {
    console.log("child Clicked")
},true);    // event capturing


// Capturing phase – the event goes down to the element.
// Target phase – the event reached the target element.
// Bubbling phase – the event bubbles up from the element.

// elem.addEventListener( event, callback,  capture)
// If it’s false (default), then the handler is set on the bubbling phase.
// If it’s true, then the handler is set on the capturing phase.

// event.stopPropagation() stops the bubbling

// To summarize code execution always runs from outer most div element's event handler/listener to inner most. 
// If the 'useCapture' flag inside a listener is:
// 1. true: then run the code block immediately (if there's a stopPropogation as well then no need to go further)
// 2. false: then wait for code execution till bubbling (bottom up)