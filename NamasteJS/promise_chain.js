const cart = ["shoes", "pants", "kurta"]
// consumer
// const promise = createOrder(cart)   // give us orderId
// console.log(promise)

// promise.then(function(orderId) {
//     console.log(orderId)
//     return orderId
// })
// .then(function(orderId) {
//    return proceedToPayment(orderId)
// })
// .then(function(paymentInfo) {
//     console.log(paymentInfo)
// })
// .catch(function (err) {
//     console.log(err.message)
// })
// .then(function() {
//     console.log("No matter what happens, I will definitely will be called")
// })  // Note: Whatever then method is there is after the catch it will definitely will be called no matter what happens so, it will be definitely be called if it is after the catch whatever the error are there this catch will handle all those errors which are there in the top or above this catch and whatever is there below this catch it does not have anything to do with it. 

//Producer 
///  this is the way to create a promise , and new Promise() is a promise constructor and this constructor takes a function which has resolve and reject as parameters and these resolve and reject are the functions which are given by JS to build promises.
// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject) {
//         // createOrder
//         // validateCard
//         // orderId 
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         // logic for createOrder
//         const orderId = "12345"
//         if(orderId){
//             setTimeout( function() {
//                 resolve(orderId)
//             }, 5000)
            
//         }
//     })
//     return pr
// }

// function proceedToPayment(orderId) {
//     ///
//     return new Promise(function(resolve, reject) {
//         resolve("Payment Successful")
//     })
// }

// function validateCart(cart) {
//     if (cart) {
//         return true
//     } else return false
// }

// summary of above process:
// firstly we are creating the createOrder API , once you call this createOrder API it will just create a new Promise and return this promise, now we as the creator of the api have two things to do we get cart items now we can either reject the promise or resolve the promise so , we do our own checks if the cart is validated then we will move ahead and create an order and we will resolve the promise with the orderId. Now we created the promise and above top we are consuming it. 
// At 12:30 So above what happened is that this createOrder(cart) function created a promise object and this promise object is attached to the promise.then function and what happened is it just return a promise and  then JS just called this createOrder Function and return the promise and because the cart item is validated and everything was a success so it just resolve the promise and once you resolve anything this data over here (whatever you have passed to orderId), it just gets over here in  callback function  that is attached to the promise (promise.then) and then we just logged this orderId so, this log is printed in the console.


// createOrder , proceedPayment, showOrderSummary, UpdateWallet

//consumer
createOrder(cart)
.then(function (orderId) {
    console.log(orderId)
    return orderId
})
.then(function(orderId) {
    return proceedToPayment(orderId)
})
.then(function({message, amount}) {
    console.log(message, 'of amount', amount)
    return showOrderSummary(message, amount)
})
.then(function({message, amount}){
    console.log("your wallet has been debited by", amount)
})
.catch(function(err) {
    console.log(err)
})
.then(function() {
    console.log("No matter what happens, I will be executed")
})
//producer
function createOrder(cart) {
    const promise = new Promise(function(resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid")
        }
        const orderId = "786767"
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            }, 3000)
        }
    })
    return promise
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        // logic for handling payment
        // This function return a promise
        resolve({message: `payment successful for order id: ${orderId}`, amount: 2500})
    })
}

function showOrderSummary(paymentInfo, amount){
    return new Promise (function(resolve, reject){
        // console.log(amount)
        if(amount > 2000) {
            resolve({message: `You have ordered items that cost RS ${amount}`, amount})
        } else {
            reject (new Error("Please buy more for discount"))
        }
    })
}

function validateCart(cart) {
    if (cart) {
        return true
    } else return false
}