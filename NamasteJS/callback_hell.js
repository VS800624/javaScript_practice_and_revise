
const cart = ["shoes" , "pants", "kurta"]

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(
            function() {
                api.updateWallet()
            }
        )
    })
})




// While using callback we face 2 issues which are as follows:
// 1. Callback Hell : When more than 1 APIs depend on each other to get call so then we pass the callback function inside callback function so it created nested callback function this makes our code less maintainable and readable this is callback hell. It also know as "Pyramid of Doom".
//or When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 


// 2. Inversion of Control:  When we pass a callback function into another function then the execution of callback function is depend on that function so in this way we loose the control over our code this is know as Inversion of Control. 
// or The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
// That process is called inversion of control.

