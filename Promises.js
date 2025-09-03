
const cart = ["shoes" , "pants", "kurta"]

createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
}) 

const promise = createOrder(cart)   // whenever js execute this line this createOrder api written us a promise (promise is nothing but an empty object) and the program just go on executing and after some time this promise object is filled with the data automatically

//{data: undefined } after some time {data: orderDetails}

promise.then(function (orderId) {   // As soon as we have data inside the promise it will call this function definitely  100% of the time that is the guarantee given by JS and it will call it just once and only once and we will also have control of our program with us as we are not passing our code to some other external function.
    proceedToPayment(orderId)
});

const Github_api = "https://api.github.com/users/akshaymarch7"

const user = fetch(Github_api)

console.log(user)   
// in console Promise {<pending>}
                // [[prototype]] : Promise
                // [[PromiseState]] : "fulfilled"
                // [[PromiseState]] : Response   
//  will be printed because what happens actually is when this console.log statement is executed at this point of time the user(the promise object) is in a pending because JS engine does not wait for anything is quickly execute whatever is there in line no. 18 fetch return a promise and that promise at that particular time is in the pending state it takes some time to get the data and fill it back to fulfilled but js does not wait for that it just goes on and print console.log into the console and then that's why this promise is pending over here but what google is chrome done is after some point of time this data will come to this promise object so, if you expand tis object in console it shows the current state of this promise so, that's it is fulfilled right now but when it was console logged it was in pending state and the promise result which was undefined earlier is now filled with response.


// user.then(function(data){
//     console.log(data)
// })

//Js guarantees that promise object can only be resolved once, either it will be success or failure. Promise objects are immutable. 
//  there can be three state in promise: 
// a) pending, b)fulfilled , c)rejected

// 1. What are Promises?
// Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

// or  A promise is an object which represents an eventual completion or failure of an asynchronous operation.

//  2. Importance of Promises:
// a) Promises can help us to write trust worthy code.
// b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
// c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
// d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
// e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.



// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable. 
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


// How we solve inversion of control?
// We had a promise object and that promise object will be eventually filled with the result of async operation and we don't pass function inside any other function but what we do is we attach a call back function to that promise object and whenever we have data inside or whenever the promise is resolved that callback function will automatically be called by promises

// Inversion of control happens with callbacks because we pass our function to someone else, and we can’t control if/when/how it will be executed. Promises solve this by returning a promise object instead of taking our callback. This way, we control the execution flow using .then(), .catch(), or async/await, making the code more predictable and avoiding callback hell.

// Promise chaining 

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance()
        })
    })
}) 

createOrder(Cart)
.then( orderId =>  proceedToPayment(orderId))
.then(function(paymentInfo){
   return  showOrderSummary(paymentInfo)
})
.then(function (paymentInfo) {
   return updateWalletBalance(paymentInfo)
})